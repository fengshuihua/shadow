$(function () {

    $('.ch-content').mouseenter(function () {
        $(this).fadeOut(200).fadeIn(200);
    });


    $('.z-oul >li').hover(function () {

        $(this).addClass('zcurrent').siblings().removeClass('zcurrent');
    }, function () {
        $(this).removeClass('zcurrent');
    });


    $('.z-btn').click(function () {
        $(this).siblings('.z-dis').animate({
            top: 0
        }, 2000);
    });


    var arrz = store.get('list') || [];

    rendering();

    // for (var i = 0; i < arrz.length; i++) {
    //     var arrzele = arrz[i];
    //     if (arrzele != null && itemele != '') {
    //         arrz.push(arrzele);
    //     }
    // }
    // // console.log(arrz);
    // store.set('list', arrz);
    //
    $('#car > span').text(arrz.length);



    //删除
    $('.panel >ul').on('click', '.delete', function () {

        $(this).parent().slideUp(function () {
            $(this).remove();
        });

        var _index = $(this).parent().attr('index');
        // console.log(item[_index]);
        delete arrz[_index];

        // console.log(arrz);
        // console.log(Object.prototype.toString.call(item[0]));



        // for (var i = 0; i < arrz.length; i++) {
        //     var arrzele = arrz[i];
        //     if (Object.prototype.toString.call(arrzele) != '[Object Object]') {
        //         arrz.splice(i,1);
        //     }
        // }
        //
        console.log(arrz);
        // store.set('list', item);
         for (var i = 0; i < arrz.length; i++) {
             var arrzs = arrz[i];
             if(arrzs == null) {
                 arrz.splice(i,1)
             }

         }
        console.log(arrz);
        store.set('list', arrz);

        $('#car > span').text(arrz.length);

        // console.log(arrz);



        // rendering();
    });

    $('#car').click(function () {
        // window.open('跳转04.html');
        $('.cover').fadeIn(500);
    });
    $('.cover').click(function () {

        $('.cover').fadeOut(500);
    });
    $('.panel').click(function (e) {
        e.stopPropagation();
    });


    function rendering() {
        $('.panel >ul').empty();
        for (var i = 0; i < arrz.length; i++) {
            var current = arrz[i];
            if (current == null) continue;
            var tpl = '<li index = ' + i + '>' +
                '<span class="zleft">' + current.name + '</span>' +
                '<span class="zleft">' + current.price + '</span>' +
                '<span class="pre pay">付款</span>' +
                '<span class="pre delete">删除</span>' +
                '</li>';
            $('.panel >ul').prepend(tpl);
        }

    };

    function rushnum() {



    }




})

// function fnz() {
//     window.open('跳转01.html')
//
// }

// var dem = document.querySelector('.zed');
// console.log(dem);
//
// dem.onclick =function () {
//     // fnz();
//
//     var dd=document.createElement('div');
//     dd.className='ccc';
//     console.log(dd);
//     document.body.appendChild(dd);
// }

// var dem = 04;
//     // console.log($('.aaa').attr('zindex'));
// $('.aaa').click(function () {
//    dem =  $(this).attr('zindex');
//     return dem;
//         console.log(dem);
//
//     }
// // $('.class1').src = 'images/hover z/04.jpg';
// );
// $('.class1').src = 'images/hover z/'+ dem +'.jpg';
