$(function () {
    $(".season img").hover(function () {
        $(this).stop().animate({top:"-20px"},400);
    },function () {
        $(this).stop().animate({top:0},400);
    })

})