$(function () {
var data = [
    {
        height:500,
        top:10,
        left:90,
        opacity:0.4,
        zIndex:2
    },
    {
        height:500,
        top:30,
        left:220,
        opacity:0.6,
        zIndex:3
    },
    {
        height:500,
        top:50,
        left:350,
        opacity:0.84,
        zIndex:4
    },
    {
        height:500,
        top:70,
        left:480,
        opacity:1,
        zIndex:6
    },
    {
        height:500,
        top:50,
        left:610,
        opacity:0.8,
        zIndex:5
    },
    {

        height:500,
        top:30,
        left:740,
        opacity:0.6,
        zIndex:4
    },
    {
        height:500,
        top:10,
        left:870,
        opacity:0.4,
        zIndex:3
    }
];
function change() {
$(".eight li").each(function (index,ele) {
        $(this).stop(false,true).animate(
            {
                "left":data[index].left,
                "top":data[index].top,
                "opacity":data[index].opacity,
                "zIndex":data[index].zIndex,
                "height":data[index].height
            }
            ,1000);
    })
}
change();

$(".ctl_prev").click(function () {
    prev_y();
});
$(".ctl_next").click(function () {
    next_y();
});
    function prev_y() {
        var temp = data.pop();
        data.unshift(temp);
        change();
    }
    function next_y() {
        var temp = data.shift();
        data.push(temp);
        change();
    }
var timer_y = setInterval(next_y,2000);
    var y_index = 0;
$(".eight").hover(function () {
    clearInterval(timer_y);
},function () {
    timer_y = setInterval(next_y,2000);
})
    $(".eight li").hover(function () {
        y_index = $(this).index();
        $(".eight .y_mask").eq(y_index).css("display","block");
    },function () {
        $(".eight .y_mask").eq(y_index).css("display","none");
    })

})