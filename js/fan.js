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


    //    鼠标滑动门
    var list1 = $('.ctr_change ul li');
    list1.each(function (ele,index) {
        var li = $(this);
        var liw = $(this).width();
        var lih = $(this).height();
        var ctr_div = $(this).children("div");
        var x1 = li.offset().left,
            y1 = -li.offset().top, //注意坐标，所有的y坐标都是负数
            x2 = x1 + li.width(),
            y2 = y1 - li.height(), //同样y坐标为负数
            x0 = (x1 + x2) / 2,
            y0 = (y1 + y2) / 2;
        var k = (y2 - y1) / (x2 - x1); //斜率k
// alert(-k)
        var e;
        var x;
        var y;
        var K;
        li.hover(function(e){
            e = e || window.event;
            x = e.pageX, //鼠标刚移入div内，记录下当前的x坐标
                y = -e.pageY; //鼠标刚移入div内，记录下当前的y坐标
            K = (y - y0) / (x - x0); //K是鼠标移入点和中心点的斜率
//当K大于k并且小于-k时，则肯定是左右移入，当移入点的x坐标大于中心点 ，则为右移入，小于则是左移入
            if(k < K && K < -k){
                if(x > x0){
                    // alert("右")
                    ctr_div.css("left",liw);
                    ctr_div.css("top",0);
                    ctr_div.stop().animate({"left":0,"opacity":1},600);
                }else{
                    // alert('左');
                    ctr_div.css("left",-liw);
                    ctr_div.css("top",0);
                    ctr_div.stop().animate({"left":0,"opacity":1},600);
                }
            }else{
//注意此处y是负数，判断上下的方法同上
                if(y > y0){
                    // alert('上');
                    ctr_div.css("top",-lih);
                    ctr_div.css("left",0);
                    ctr_div.stop().animate({"top":0,"opacity":1},600);
                }else{
                    // alert('下');
                    ctr_div.css("top",lih);
                    ctr_div.css("left",0);
                    ctr_div.stop().animate({"top":0,"opacity":1});
                }
            }
        },function () {
            if(k < K && K < -k){
                if(x > x0){
                    ctr_div.animate({"left":liw,"opacity":0},600)
                }else{
                    ctr_div.animate({"left":-liw,"opacity":0},600)
                }
            }else{
                if(y > y0){
                    ctr_div.animate({"top":-lih,"opacity":0},600)
                }else{
                    ctr_div.animate({"top":lih,"opacity":0},600)
                }
            }
        })

    })

    })
