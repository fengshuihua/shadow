$(function(){
        // 1.获取标签
        var list = $('#fan ul li');
        // li的宽度
        var liW = list[0].offsetWidth;
        // 全局索引 记录图片的位置
        var currIndex = 0;

        // 2.修改li的位置
        $.each(list, function (ele,index) {
            // 动态创建指示器
            var span = document.createElement('span');
            $('#fan .ctl').append(span);
            var fanTitle = $(this).children('.name').text();
            span.className = 'ctl_icon';
            span.innerText = fanTitle;
        });
        $('#fan .ctl span').eq(0).addClass('current');

        // 3.下一张
        $('#fan .ctl_next').click(changePositionRight);
        function changePositionRight() {
            // 1.当前图片做动画左移动
            // 2.修改下一张图片的位置 为右边
            currIndex++;
            if (currIndex > list.length - 1) {
                currIndex = 0;
            }
            list.eq(currIndex).fadeIn(500).siblings().fadeOut(500);

            // 3.下一张图片做动画进入

            // 4.切换指示器
            changefan(currIndex);
        }

        /**
         * 切换指示器
         */
        function changefan(i) {
            var spans = $('#fan .ctl span');
            // 4.1清空所有
            // 设置当前
            spans.eq(i).addClass('current').siblings().removeClass('current');
        }

        // 4.点击下边


        $.each($('#fan .ctl span'),function(index,ele){
            $(this).mouseover(function(){
                currIndex = index;
                changefan(currIndex);
                list.eq(currIndex).fadeIn(500).siblings().fadeOut(500);
            })
        })

        // 5.自动播放

        var timer = setInterval(changePositionRight, 2000);

        $('#fan').hover(function() {
            clearInterval(timer);
        }, function() {
            timer = setInterval(changePositionRight, 2000);
        });
    })
