$(function () {

    //第二个内容
    $(".left .li-class").each(function (index) {
        $(this).css("left",(index)*80+ "px");
    });
    $(".left ul").hover(
        function () {
            $(".left .li-class").each(function (index) {
                $(this).stop().animate({"left":293*(index)},800);
            })
            $(".left .left-class,.left .right-class").stop().fadeIn(500);
            $(".left .text").stop().fadeOut(500);
        }
        ,function () {
            $(".left .li-class").each(function (index) {
                $(this).stop().animate({"left": 80 * (index)}, 800);
            })
            $(".left .left-class,.left .right-class").stop().fadeOut(500);
            $(".left .text").stop().fadeIn(1000);
        });
    //    第三个内容
    $(".right .li-class").each(function (index) {
        $(this).css("right",(index)*80+ "px");
    });
    $(".right ul").hover(
        function () {
            $(".right .li-class").each(function (index) {
                $(this).stop().animate({"right":293*(index)},800);
            })
            $(".right .left-class,.right .right-class").stop().fadeIn(500);
            $(".right .text").stop().fadeOut(500);
        }
        ,function () {
            $(".right .li-class").each(function (index) {
                $(this).stop().animate({"right": 80 * (index)}, 800);
            })
            $(".right .left-class,.right .right-class").stop().fadeOut(500);
            $(".right .text").stop().fadeIn(1000);
        });
})