$(function () {
    //返回顶部
    $(window).on("scroll",function () {
        if($(window).scrollTop() > 100){
            $(".back-top").stop().animate({"opacity":1},500);
        }else{
            $(".back-top").stop().animate({"opacity":0},500);
        }
    })
    $(".panda-top").on("click",function () {
        $("html").animate({"scrollTop":0},500);
    })
    // $(".y-nav li").eq(0).hover(function () {
    //     $(".nav-hid ").css("display","block");
    // },function () {
    //     $(".nav-hid ").css("display","none");
    // })

//     //顶部作者栏目内容
//     var index1 = 0;
//     itemAarry = store.get("data") || [] ;
//     itemAarry[0] = {};
//     itemAarry[1] = {};
//     itemAarry[2] = {};
//     var arr0 =  [];
//     var arr1 =  [];
//     var arr2 =  [];
//     load();
//     $(".author-name>p").mouseenter(function () {
//         $(this).stop().addClass("special").animate({"left":30},500).siblings().removeClass("special").stop().animate({"left":0},500);
//         var index = $(this).index();
//         index1 = index;
//         $(".author-data div").eq(index1).css("z-index",2).siblings("div").css("z-index",1);
//         load();
//         $(".author-name ul").eq(index1).css("display","block").siblings("ul").css("display","none");
//     });
//     //点击喜欢
//
//     $(".like img").click(fn1());
//     function fn1() {
//         var value = 1;
//         return function () {
//             $(".like span").html("喜欢(" + (value++) + ") ");
//         }
//     }
//     $(".collect img").click(fn2());
//     function fn2() {
//         var value = 1;
//         return function () {
//             $(".collect span").html("收藏(" + (value++) + ") ");
//         }
//     }
//
// //    添加任务
//     $("#submitID").click(function () {
//         var text = $("#textID").val();
//         text = $.trim(text);
//         if(text === ""){
//             throw "请输入正确的格式";
//         }
//         $("#textID").val("");
//         //本地数据存储
//         if(index1 === 0){
//             arr0.push(text);
//             itemAarry[0] = {
//                 word:arr0,
//                 collect:0,
//                 like:0
//             };
//         }else if(index1 === 1){
//             arr1.push(text);
//             itemAarry[1] = {
//                 word:arr1,
//                 collect:0,
//                 like:0
//             };
//         }else if(index1 === 2){
//             arr2.push(text);
//             itemAarry[2] = {
//                 word:arr2,
//                 collect:0,
//                 like:0
//             };
//         }
//         store.set("data",itemAarry);
//         //    更新UI
//         load();
//         $(".words ul li").first().stop().hide().slideDown(500);
//     });
//
//
//
//     function load() {
//         //清空页面中ul标签中的数据
//         $(".author-name ul").empty();
//         // 遍历本地数组,根据数组中的元素来创建标签
//         if(index1 === 0){
//             if(itemAarry[0].word === undefined) return;
//             var first0 = itemAarry[0].word;
//             for(i = 0; i<first0.length; i++){
//                 var tpl = '<li>'+first0[i]+'</li>';
//                 $(".words ul").eq(0).prepend($(tpl));
//             }
//
//         }
//         if(index1 === 1){
//             if(itemAarry[1].word === undefined) return;
//             var first1 = itemAarry[1].word;
//             for(i = 0; i<first1.length; i++){
//                 var tpl = '<li>'+first1[i]+'</li>';
//                 $(".words ul").eq(1).prepend($(tpl));
//             }
//         }
//         if(index1 === 2){
//             if(itemAarry[2].word === undefined) return;
//             var first2 = itemAarry[2].word;
//             for(i = 0; i<first2.length; i++){
//                 var tpl = '<li>'+first2[i]+'</li>';
//                 $(".words ul").eq(2).prepend($(tpl));
//             }
//         }
//
//     }
//

//     //第二个内容
//     $(".left .li-class").each(function (index) {
//         $(this).css("left",(index)*80+ "px");
//     });
//     $(".left ul").hover(
//         function () {
//             $(".left .li-class").each(function (index) {
//                 $(this).stop().animate({"left":293*(index)},800);
//             })
//             $(".left .left-class,.left .right-class").stop().fadeIn(500);
//             $(".left .text").stop().fadeOut(500);
//         }
//         ,function () {
//             $(".left .li-class").each(function (index) {
//                 $(this).stop().animate({"left": 80 * (index)}, 800);
//             })
//             $(".left .left-class,.left .right-class").stop().fadeOut(500);
//             $(".left .text").stop().fadeIn(1000);
//         });

    // //    第三个内容
    // $(".right .li-class").each(function (index) {
    //     $(this).css("right",(index)*80+ "px");
    // });
    // $(".right ul").hover(
    //     function () {
    //         $(".right .li-class").each(function (index) {
    //             $(this).stop().animate({"right":293*(index)},800);
    //         })
    //         $(".right .left-class,.right .right-class").stop().fadeIn(500);
    //         $(".right .text").stop().fadeOut(500);
    //     }
    //     ,function () {
    //         $(".right .li-class").each(function (index) {
    //             $(this).stop().animate({"right": 80 * (index)}, 800);
    //         })
    //         $(".right .left-class,.right .right-class").stop().fadeOut(500);
    //         $(".right .text").stop().fadeIn(1000);
    //     });

    // //    第四个内容  js实现
    // var oul = document.getElementById("oul");
    // var list = document.querySelectorAll(".mid-content3 #oul li");
    // oul.style.transform = "rotateZ(-70deg)";
    // for(i = 0; i<list.length; i++){
    //     list[i].style.transform = "rotateZ("+i*20+"deg)";
    // }
    // //  第四个内容  jq实现
    // //点击图片进入放大界面
    // var _index = 0;
    // $("#oul li").click(function () {
    //     _index = $(this).index();
    //     $(".hide-img .now img").attr("src","images/new/"+(_index+1)+".jpg");
    //     $(".hide-img").addClass("now");
    //     $(".change li").eq(_index).addClass("check").siblings().removeClass("check");
    // })
    // //点击关闭
    // $(".hide-img>span").click(function () {
    //     $(".hide-img").removeClass("now");
    // });
    // //点击上一张
    // $(".hide-img p span").eq(0).click(function () {
    //     _index--;
    //     if(_index<0){
    //         _index = 7;
    //     }
    //     set();
    // });
    // //点击下一张
    // $(".hide-img p span").eq(1).click(function () {
    //     _index++;
    //     if(_index>7){
    //         _index = 0;
    //     }
    //     set();
    // });
    // //鼠标经过下边
    // $(".change li").mouseenter(function () {
    //     _index =$(this).index();
    //     set();
    // });
    // //扇形响应式
    // window.onresize = exchange;
    // function exchange() {
    //     var clientw = client().width;
    //     if(clientw > 1200){
    //         for(i = 0; i<list.length; i++){
    //             list[i].style.transform = "rotateZ("+i*20+"deg)";
    //         }
    //     }else if(clientw < 1200&&clientw > 1100){
    //         list[list.length-1].style.transform = "rotateZ("+((list.length-1)*20 - 20)+"deg)";
    //     }else if(clientw > 1000 && clientw<1100){
    //         for(i = list.length-2; i<list.length; i++){
    //             list[i].style.transform = "rotateZ("+((list.length-2)*20-20)+"deg)";
    //         }
    //     }else if(clientw <1000 &&clientw > 900){
    //         for(i = list.length-3; i<list.length; i++){
    //             list[i].style.transform = "rotateZ("+((list.length-3)*20-20)+"deg)";
    //         }
    //     }else if(clientw >800 &&clientw < 900){
    //         for(i = list.length-4; i<list.length; i++){
    //             list[i].style.transform = "rotateZ("+((list.length-4)*20-20)+"deg)";
    //         }
    //     }else if(clientw >700 &&clientw < 800){
    //         for(i = list.length-5; i<list.length; i++){
    //             list[i].style.transform = "rotateZ("+((list.length-5)*20-20)+"deg)";
    //         }
    //     }else if(clientw >600 &&clientw < 700){
    //         for(i = list.length-6; i<list.length; i++){
    //             list[i].style.transform = "rotateZ("+((list.length-6)*20-20)+"deg)";
    //         }
    //     }else if(clientw >500 &&clientw < 600){
    //         for(i = list.length-7; i<list.length; i++){
    //             list[i].style.transform = "rotateZ("+((list.length-7)*20-20)+"deg)";
    //         }
    //     }
    // }
    //
    // //封装改变图片和鼠标经过的位置
    // function set() {
    //     $(".hide-img .now img").attr("src","images/new/"+ (_index+1) +".jpg").hide(0).stop().fadeIn(1000);
    //     $(".change li").eq(_index).addClass("check").siblings().removeClass("check");
    // }

    // //    第五个内容 四方花鸟画
    // //当鼠标移入时切换图片
    // $(".right-box li").mouseenter(function () {
    //     var index = $(this).index();
    //     $(".left-box img").attr("src","images/img-002/sanliuwu-"+(index+1)+".jpg");
    //     $(".left-box img").css({"left":"200px","opacity":0}).stop().animate({"left":0,"opacity":1},500);
    //
    // })
    // //当鼠标移入时显示和隐藏价格和标签
    // $(".right-box li").hover(function () {
    //     $(this).children("p").stop().animate({"bottom":0},500);
    // },function () {
    //     $(this).children("p").stop().animate({"bottom":-50},500);
    // })
    // //鼠标按下
    // $(".mid-content4>p span").mousedown(function (e) {
    //     var distance = e.pageX - $(this).offset().left;
    //     //鼠标移动
    //     $(document).mousemove(function (e) {
    //         var x = e.pageX - distance - $(".mid-content4>p").offset().left;
    //         if(x<0){
    //             x = 0;
    //         }else if(x> $(".mid-content4>p span").width()){
    //             x = 100;
    //         }
    //         $(".mid-content4>p span").css({"left":x+"px"});
    //         //鼠标按下移动时图片同比例移动
    //         var u_x = -x/$(".mid-content4>p span").width()*($(".right-box ul").width()-$(".right-box").width());
    //         $(".right-box ul").css({"left":u_x + "px"});
    //         return false;
    //     })
    //     return false;
    // })
    // //鼠标抬起
    // $(document).mouseup(function () {
    //     $(document).off("mousemove");
    // })


})
