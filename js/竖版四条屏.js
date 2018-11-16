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
})