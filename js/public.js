//图片轮播
window.onload = function () {
  var oPicBox = document.getElementById('slide-pic'),
      oPicIns = document.getElementById('pic-instruction'),
      oNumBox = document.getElementById('pic-num'),
      oN = document.createElement('li'),
      aPic = oPicBox.getElementsByTagName('li'),
      aPicIns = oPicIns.getElementsByTagName('li');
      nowIndex = 0;
      aPicNum = null;
      timer = null;
      seconde = 3000;

      //获取图片数量
      num = aPic.length;

      //动态创建小数字
  for (var i = num - 1; i >= 0; i--) {
    oN = document.createElement('li');
    oN.innerHTML = i+1;
    oNumBox.appendChild(oN);
  }

  aPicNum  = oNumBox.getElementsByTagName('li');
  //状态初始
  init(nowIndex);
  for(var j = 0;j < num;j++){
    //索引值初始
    aPic[j].index = j;
    aPicIns[j].index = j;
    aPicNum[j].index = j;
  }
  //状态初始完毕

  timer = setInterval(function () {
    tab(1);
  },seconde);

  oPicBox.onmouseover = function () {
    if(timer){
      clearInterval(timer);
    }
  };
  oPicBox.onmouseout = function () {
    timer = setInterval(function () {
      tab(1);
    },seconde);
  };

  for (var i = aPicNum.length - 1; i >= 0; i--) {
    aPicNum[i].onclick = function () {
      // body...
      nowIndex = (2-this.index);
      tab(1);
    };
  }













  /*
  *方向(布尔),真值为右  
  */  
  function tab (target) {
    if(target){
      nowIndex++;
      if(nowIndex == num){
        nowIndex = 0;
      }
      init(nowIndex);
    }else{
      nowIndex--;
      if(nowIndex == -1){
        nowIndex = 3;
      }
      for(var k = 0;k < num;k++){
      //索引值初始
      init(nowIndex);
      }
    }  
  }

  function init (nowIndex) {
    for(var j = 0;j < num;j++){
      //索引值初始
      aPic[j].index = j;
      aPicIns[j].index = j;
      aPicNum[j].index = j;
      //样式重置
      aPic[j].className = "picNoActive";
      aPicIns[j].className = "insNoActive";
      aPicNum[j].className = "numNoActive";
      }
      //设置样式
      aPic[nowIndex].className = "picActive";
      aPicIns[nowIndex].className = "insActive";
      aPicNum[3-nowIndex].className = "numActive";
  }


// 导航特效
$(function  () {
  var timer1 = null,
      timer2 = null;
  $(".nav>ul>li").each(function () {
    //this 指向li
    var _this = this;
    $(this).bind('mouseover', function () {
      // $(_this).index()
      // if (($(".nav-att").eq($(_this).index())[0].innerHTML.length === 0)) {
      if (timer2) {
        clearTimeout(timer2);
      }  
      $(_this).find('.nav-att').show(100);

    });
    // this.bind();
  });
  $(".nav>ul>li").each(function () {
    var _this = this;
    $(this).bind('mouseleave', function () {
      // $(_this).index()
      // $(".nav-att").eq($(_this).index()).hide(300);
      timer1 = setTimeout ( function () {
        $(_this).find('.nav-att').hide(100);
      },300);

    });
    // this.bind();
  });
  $(".nav-att").each(function () {
    $(this).bind('mouseover', function  () {
      if (timer1) {
        clearTimeout(timer1);
      }
        $(this).show();
    });
  });
  $(".nav-att").each(function () {
    var _this = this;
      timer2 = setTimeout ( function () {
        $(_this).find('.nav-att').hide(100);

      },300);
  });
});
$(function () {
  var status = false;
  $(".link-in-school").bind('click', function () {
    if(status){
      $('.link-li1').hide();
    }else{
      $('.link-li1').show();
      status = true;
      return false;
    }
  }) ;
  $(".link-out-school").bind('click', function () {
    if(status){
      $('.link-li2').hide();
    }else{
      $('.link-li2').show();
      status = true;
      return false;
    }
  });
  $(".link-li1>li").each(function  () {
    var _this = this;
    $(this).bind('click', function  () {
      window.open($(_this).find('a').attr('href'));
    });
  });


  $(document).bind('click', function  () {
    $('.link-li1').hide();
    $('.link-li2').hide();
    if(status){
    status = false;
    }
  });
});
};