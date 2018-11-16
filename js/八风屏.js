$(function () {
    //    第四个内容  js实现
    var oul = document.getElementById("oul");
    var list = document.querySelectorAll(".mid-content3 #oul li");
    oul.style.transform = "rotateZ(-70deg)";
    for(i = 0; i<list.length; i++){
        list[i].style.transform = "rotateZ("+i*20+"deg)";
    }
    //  第四个内容  jq实现
    //点击图片进入放大界面
    var _index = 0;
    $("#oul li").click(function () {
        _index = $(this).index();
        $(".hide-img .now img").attr("src","images/vertical/"+(_index+1)+".jpg");
        $(".hide-img").addClass("now");
        $(".change li").eq(_index).addClass("check").siblings().removeClass("check");
    })
    //点击关闭
    $(".hide-img>span").click(function () {
        $(".hide-img").removeClass("now");
    });
    //点击上一张
    $(".hide-img p span").eq(0).click(function () {
        _index--;
        if(_index<0){
            _index = 7;
        }
        set();
    });
    //点击下一张
    $(".hide-img p span").eq(1).click(function () {
        _index++;
        if(_index>7){
            _index = 0;
        }
        set();
    });
    //鼠标经过下边
    $(".change li").mouseenter(function () {
        _index =$(this).index();
        set();
    });
    //扇形响应式
    window.onresize = exchange;
    function exchange() {
        var clientw = client().width;
        if(clientw > 1200){
            for(i = 0; i<list.length; i++){
                list[i].style.transform = "rotateZ("+i*20+"deg)";
            }
        }else if(clientw < 1200&&clientw > 1100){
            list[list.length-1].style.transform = "rotateZ("+((list.length-1)*20 - 20)+"deg)";
        }else if(clientw > 1000 && clientw<1100){
            for(i = list.length-2; i<list.length; i++){
                list[i].style.transform = "rotateZ("+((list.length-2)*20-20)+"deg)";
            }
        }else if(clientw <1000 &&clientw > 900){
            for(i = list.length-3; i<list.length; i++){
                list[i].style.transform = "rotateZ("+((list.length-3)*20-20)+"deg)";
            }
        }else if(clientw >800 &&clientw < 900){
            for(i = list.length-4; i<list.length; i++){
                list[i].style.transform = "rotateZ("+((list.length-4)*20-20)+"deg)";
            }
        }else if(clientw >700 &&clientw < 800){
            for(i = list.length-5; i<list.length; i++){
                list[i].style.transform = "rotateZ("+((list.length-5)*20-20)+"deg)";
            }
        }else if(clientw >600 &&clientw < 700){
            for(i = list.length-6; i<list.length; i++){
                list[i].style.transform = "rotateZ("+((list.length-6)*20-20)+"deg)";
            }
        }else if(clientw >500 &&clientw < 600){
            for(i = list.length-7; i<list.length; i++){
                list[i].style.transform = "rotateZ("+((list.length-7)*20-20)+"deg)";
            }
        }
    }

    //封装改变图片和鼠标经过的位置
    function set() {
        $(".hide-img .now img").attr("src","images/vertical/"+ (_index+1) +".jpg").hide(0).stop().fadeIn(1000);
        $(".change li").eq(_index).addClass("check").siblings().removeClass("check");
    }
})
