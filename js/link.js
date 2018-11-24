
$(function () {


    var opt = 1;
    var strz = 0;
    var arrM = [];
    zcarajax();


    $('.zlink').on('click',function () {
        // alert(1);
        var that = $(this);
        var odiv = $('<div></div>');
        var opicc = $(this).find('.picc').attr('src');
        // console.log(opicc);
        var html =
            '<div class="zlink zed">' +
            '<div><img src="' + opicc + '"/></div>' +
            '<div>' +
            '<span class="ztitle">' + $(this).find('.name').text() + '</span>' +
            '<span class="zjia">' + $(this).find(".zzprice").text() + '</span>' +
            '<p class="zcar"> 加 入 购 物 车 </p>' +
            '</div>' +
            '</div>';
        odiv.html(html);
        odiv.addClass('zzmask');
        $('body').append(odiv);
        odiv.click(function () {
            // alert(1)
            $(this).fadeOut(600);
        });
        $('.zlink').click(function (e) {
            e.stopPropagation();
        });


        // console.log($('.zcar'));

        $('.zcar').on('click',function (e) {
            e.stopPropagation();
            // alert(35);
            $('.zzmask').fadeIn(600);
            $('.z-data').fadeIn(600);
            $(this).parent('div').remove();
            //添加购物车
                $.ajax({
                    type: 'get',
                    url: 'shadow.php',
                    data: 'act=add&content='+ that.find('.name').text() + ',' + that.find(".zzprice").text(),
                    // data: 'act=add&content=666,¥999',
                    dataType: 'json',
                    success: function (obj) {
                        // console.log(obj);
                        creatli(obj);
                        zcarajax();
                    }
                });
                $.ajax({
                    type: 'get',
                    url: 'shadow.php',
                    data: 'act=get&page=1',
                    success: function (obj) {
                        // console.log(obj);
                        // console.log(obj.length);
                        // console.log(eval(obj));
                        $('.z-data > ul').empty();
                        arrM = eval(obj);
                        // console.log(arrM);
                        // console.log(arrM.length);
                        for (var i = 0; i < arrM.length; i++) {

                            var arrz = arrM[i];

                            $('.z-data > ul').append(creatli(arrz));
                        }

                    }
                });
        });




                // $('.ment').eq(0).mouseenter(function () {
                //     // alert(91)
                //     $('.code').eq(0).css('display','block');
                // }).mouseout(function(){
                //     $('.code').eq(0).css('display','none');
                // })

                //     function () {
                //     $('.code').eq(0).css('display','none');
                // });
                // $('.ment').eq(1).hover(function () {
                //     $('.code').eq(1).css('display','block');
                // },function () {
                //     $('.code').eq(1).css('display','none');
                // });
                // $('.ment').eq(2).hover(function () {
                //     $('.code').eq(2).css('display','block');
                // },function () {
                //     $('.code').eq(2).css('display','none');
                // });



        // $('.zcar').click(function () {
        //     alert(1);
        //     $('.zzlist').fadeIn(600);
        //     //添加购物车
        //     $.ajax({
        //         type: 'get',
        //         url: 'shadow.php',
        //         data: 'act=add&content='+ $('.name').text(),
        //         dataType: 'json',
        //         success: function (obj) {
        //             console.log(obj);
        //             creatli(obj);
        //         }
        //     });
        //     $.ajax({
        //         type: 'get',
        //         url: 'shadow.php',
        //         data: 'act=get&page=1',
        //         success: function (obj) {
        //             console.log(obj);
        //             console.log(eval(obj));
        //             $('.z-data > ul').empty();
        //             var arrM = eval(obj);
        //             for (var i = 0; i < arrM.length; i++) {
        //                 var arrz = arrM[i];
        //
        //                 $('.z-data > ul').append(creatli(arrz));
        //             }
        //         }
        //     });
        //

            $('.ment').eq(0).hover(function () {

                $('.code').eq(0).stop().fadeIn(500);
            },function () {

                $('.code').eq(0).stop().fadeOut(500);
            });

            $('.ment').eq(1).hover(function () {

                $('.code').eq(1).stop().fadeIn(500);
            },function () {

                $('.code').eq(1).stop().fadeOut(500);
            });

            $('.ment').eq(2).hover(function () {

                $('.code').eq(2).stop().fadeIn(500);
            },function () {

                $('.code').eq(2).stop().fadeOut(500);
            });
        //
    });


            $('.zclose').click(function () {
                // alert(102);
                $('.z-data').fadeOut(600);
                $('.zzmask').fadeOut(600);
                $('.zpay').css('display','none');
            });





    // console.log($('#car'));
    $('#car').on('click',function (e) {
        // alert(31);
        e.stopPropagation();
        $('.zzmask').fadeIn(600);
        $('.z-data').fadeIn(600);
        zcarajax();
    });







            // 创建li
            function creatli(obj) {
                var zzsrc = obj.content;
                var zarr = zzsrc.split(',¥');
                var zli = $('<li></li>');
                var ohtml =
                    '<span class="zleft">' + zarr[0] + '</span>' +
                    '<span class="zleft">抢购价 ' + zarr[1] + ' 元</span>' +
                    '<span class="pre pay">付款</span>' +
                    '<span class="pre delete">删除</span>';
                zli.html(ohtml);
                $('.z-data > ul').prepend(zli);
                paymoney();
                del(zli, obj);
                return zli
            }

            // 删除

            function del(zli, obj) {
                zli.find('.delete').click(function () {

                    // console.log(obj.id);
                    $(this).parent('li').slideUp(500, function () {

                        $(this).remove();

                        $.ajax({
                            type: 'get',
                            url: 'shadow.php',
                            data: 'act=del&id=' + obj.id,
                            dataType: 'json',
                            success: function (res) {

                                console.log(res);
                                zcarajax();

                                // arrM = eval(res);
                                // console.log(arrM);
                                // console.log(arrM.length);
                                // $('#car').children().text(arrM.length);
                            }
                        });


                    });


                });
            }


            // 付款
            function paymoney() {

                $('.pay').click(function () {
                    $('.zpay').fadeIn(500);

                    var str = $(this).prev().text();
                    str = str.slice(3);
                    strz = parseInt(str);
                    $('.count').text('总价 ' + strz * opt + ' 元');

                    var str1 = $(this).siblings().first().text();
                    // console.log(str1);
                    // console.log($('.zpay > h3'));
                    $('.zpay > h3').text(str1);

                    selectChange();
                });
            }

            // 下拉框
            function selectChange() {
                $('#sel').change(function () {
                    opt = $('#sel').val();
                    // console.log(opt);
                    // console.log(strz * opt);
                    $('.count').text('总价 ' + strz * opt + ' 元');
                });
            }


            function zcarajax() {
                $.ajax({
                    type: 'get',
                    url: 'shadow.php',
                    data: 'act=get&page=1',
                    success: function (obj) {
                        // console.log(obj);
                        // console.log(obj.length);
                        // console.log(eval(obj));
                        $('.z-data > ul').empty();
                        arrM = eval(obj);
                        // console.log(arrM);
                        // console.log(arrM.length);
                        $('#car').children().text(arrM.length);
                        for (var i = 0; i < arrM.length; i++) {

                            var arrz = arrM[i];

                            $('.z-data > ul').append(creatli(arrz));
                        }

                    }
                });
            }

})
