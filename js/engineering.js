$(function(){
// 头部
  // 鼠标移动切换
    $('#headOul li:not(.modRight,#tourist)').hover(function() {
      $(this).addClass('index').siblings().removeClass('index')
      },
      function(){
        $('#index').siblings().removeClass('index');
      }
    );

  //滚动后吸顶
    var top = $('#nav').offset().top;
    $(window).on('scroll',function(){
      var scroll_top = $(window).scrollTop();
      if(scroll_top >= top){
        $('#nav').css({
          position: 'fixed',
          top: 0
        });
        $('#fixNav').css({
          display: 'block'
        });
      }else{
        $('#nav').css({
          position: 'absolute',
          top: 130
        });
        $('#fixNav').css({
          display: 'none'
        });
      }
    })

  //宽度变化
    window.onresize = wSize;
    function wSize(){
      var clientX = client().width;
      if(clientX <= 810){
        $('#headOul').css({width: 25+'%',});
        $('#headOul li:not(.modRight,#tourist)').css({width:100+'%',display:'none'});
        $('.menuNav').css({display:'inline-block'});
        $('.modRight').css({
          top: 0,
          width: 12+'%',
          position: 'absolute',
        });
        $('.modRight:eq(0)').css({
          right: 24+'%'
        });
        $('.modRight:eq(1)').css({
          right: 12+'%'
        });
        $('.foot-up').css({
          padding: 30+'px'
        });
        $('.foot-up div').css({
          width: 100+'%'
        });
        $('.foot-up img').css({
          top: 300+'px',
          left: 80+'px'
        });
      }else{
        $('#headOul').css({width: 80+'%',});
        $('#headOul li:not(.modRight,#tourist)').css({width:12+'%',display:'block'});
        $('.menuNav').css({display:'none'});
        $('.modRight').css({
          top: 0,
          width: 12+'%',
          right: 0,
          position: 'relative',
        });
        $('.foot-up').css({
          padding: 30+'px '+80+'px'
        });
        $('.foot-up div').css({
          width: 550 +'px'
        });
        $('.foot-up img').css({
          top: 40+'px',
          left: 650+'px'
        });
      }

    //侧边广告
      var Sheight = $('.Shaft').height();
      var Theight = $('.bottomShaft').height();
      $('.Shaft,.bottomShaft').css({
        top: -Sheight-Theight/2
      });
      $('.adverti').hover(function () {
          $(this).children('.Shaft,.bottomShaft').stop().animate({
              top: -5
          }, 500);
        },function () {
          $(this).children('.Shaft,.bottomShaft').stop().animate({
              top: -Sheight-Theight/2
          }, 500);
        }
      );

    }
    wSize();

  //目录隐藏、显示
    $('#menuBtn').click(function(){
      $('#headOul>li:not(.modRight,#tourist)').stop().slideToggle();
    })

  // 登录-注册
    $('.login').click(function() {
      $('#inter .login').addClass('content').siblings().removeClass('content');
      $('#mengPlate').css({
        display: 'block'
      });
      $('#login').parent().css({
        display: 'block'
      }).siblings().css({
        display: 'none'
      });
    });

    $('.registered').click(function() {
      $('#inter .registered').addClass('content').siblings().removeClass('content');
      $('#mengPlate').css({
        display: 'block'
      });
      $('#registered').parent().css({
        display: 'block'
      }).siblings().css({
        display: 'none'
      });
    });

  //输入

    // 刷新
    function renderinguser(){
      if(sessionStorage.getItem("name") == [] || sessionStorage.getItem("name") == undefined){
        return;
      }
      var name = sessionStorage.getItem("name");
      var password = sessionStorage.getItem("password");
      $('.modRight').css({
        display: 'none'
      });
      $('#tourist').css({
        display: 'block'
      }).text(name);
      $('#car').css({
        display: 'block'
      });
    }
    renderinguser();

  // 点击确认
    $('#interface input[type="submit"]').eq(0).click(function() {
      var name = $(this).parent().find('[name="id"]').val();
      var password = $(this).parent().find('[name="password"]').val();
      if(name == "" || password == ""){
        alert('账号、密码不能为空');
        return false;
      }else{
        // 保存用户名
        sessionStorage.setItem("name",name);
        sessionStorage.setItem("password",password);
        renderinguser();
      }
    });
    $('#interface input[type="submit"]').eq(1).click(function() {
      var name = $(this).parent().find('[name="id"]').val();
      var password = $(this).parent().find('[name="password"]').val();
      var rightPassword = $(this).parent().find('[name="rightPassword"]').val();
      if(name == "" || password == ""){
        alert('账号、密码不能为空');
        return false;
      }else{
        if(password != rightPassword){
          alert('请输入正确的密码')
          return false;
        }else{
          // 保存用户名
          sessionStorage.setItem("name",name);
          sessionStorage.setItem("password",password);
          sessionStorage.setItem("rightPassword",rightPassword);
          renderinguser();
        }
      }
    });

  // 点击取消
    $('#hide').click(function() {
      $('#mengPlate').css({
        display: 'none'
      });
    });
    $('#hide').hover(function() {
      $(this).addClass('Red');
    }, function() {
      $(this).removeClass('Red');
    });

  //退出登录
  $('#tourist').click(function(){
    $('#out').css({
      display: 'block'
    });
  });
  $('#out span').click(function(){
    $('#out').css({
      display: 'none'
    });
  });
  $('#out button').eq(0).click(function(){
    sessionStorage.clear();
    $('#out').css({
      display: 'none'
    });
    window.location.reload();
  });
  $('#out button').eq(1).click(function(){
    $('#out').css({
      display: 'none'
    });
  });

//主体
  // 轮播图
    var timer = null;
    var sId = 0;
    var num = 0;

  // 自动
    function autoPlay(){
      timer = setInterval(next,2500);
    }
    autoPlay();

  //移入停止，移出继续
    $('#carousel').hover(function(){
      clearInterval(timer)
    },autoPlay)

  // 左右按钮
    $('.sLeft').click(prve);
    $('.sRight').click(next);

  // 上一张
    function prve(){
      sId--;
      num--;
      if(sId < 0){
        sId = 3;
        num = 3;
        $('#cul').css({left:-((sId + 1)* 100)+'%'});
      }
      $('#cul').animate({left:-(sId * 100)+'%'},500);
      slideBtn();
    }

  // 下一张
    function next(){
      sId++;
      num++;
      if(num > 3){
        num = 0;
      }
      if(sId > 4){
        sId = 1;
        $('#cul').css({left:0});
      }
      $('#cul').animate({left:-(sId * 100)+'%'},500);
      slideBtn();
    }

  // 底部按钮
    $('#btn span').click(function(){
      sId = $(this).index();
      num = sId;
      $('#cul').animate({left:-(sId * 100)+'%'},500);
      slideBtn();
    });

    function slideBtn(){
      $('#btn span').eq(num).addClass('slide').siblings().removeClass('slide');
    }


//尾部


  //返回顶部
    $(window).on("scroll",function () {
        if($(window).scrollTop() > 100){
            $(".back-top").stop().animate({"opacity":1},500);
        }else{
            $(".back-top").stop().animate({"opacity":0},500);
        }
    })

//弹窗广告
  $('.windowAdverti').slideDown();
  $('.down').click(function() {
    $(this).parent().slideUp();
  });


});
