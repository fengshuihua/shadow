$(function () {
    //    第五个内容 四方花鸟画
    //当鼠标移入时切换图片
    $(".right-box li").mouseenter(function () {
        var index = $(this).index();
        $(".left-box img").attr("src","images/square/"+(index+1)+".jpg");
        $(".left-box img").css({"left":"200px","opacity":0}).stop().animate({"left":0,"opacity":1},500);

    })
    //当鼠标移入时显示和隐藏价格和标签
    $(".right-box li").hover(function () {
        $(this).children("p").stop().animate({"bottom":0},500);
    },function () {
        $(this).children("p").stop().animate({"bottom":-50},500);
    })
    //鼠标按下
    $(".mid-content4>p span").mousedown(function (e) {
        var distance = e.pageX - $(this).offset().left;
        //鼠标移动
        $(document).mousemove(function (e) {
            var x = e.pageX - distance - $(".mid-content4>p").offset().left;
            if(x<0){
                x = 0;
            }else if(x> $(".mid-content4>p span").width()){
                x = 100;
            }
            $(".mid-content4>p span").css({"left":x+"px"});
            //鼠标按下移动时图片同比例移动
            var u_x = -x/$(".mid-content4>p span").width()*($(".right-box ul").width()-$(".right-box").width());
            $(".right-box ul").css({"left":u_x + "px"});
            return false;
        })
        return false;
    })
    //鼠标抬起
    $(document).mouseup(function () {
        $(document).off("mousemove");
    })

})
