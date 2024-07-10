//네트워크 기능구현
$('#content .network ul li a').css('opacity','.6');
$('#content .network ul li a').mouseenter(function(){
    var ind = $(this).index('#content .network ul li a');  // 0~9
    //console.log(ind);
    $('#content .network img').attr('src','./mainimages/World_Map_'+(ind+1)+'.svg');
    $('#content .network ul li').removeClass('check');
    $(this).parent('li').addClass('check').hide().fadeIn('slow');
    $('#content .network ul li a').css('opacity','.3');
    $(this).css('opacity','1');
});

//사업분야 기능구현

var swiper = new Swiper('.swiper-container', {
    //autoHeight: true, //높이유동  ( .swiper-container에 height:auto)
    slidesPerView:2,  //단수
    spaceBetween:80,  //단사이 여백
    //initialSlide: 1, //처음 왼쪽 끝에 보여지는 초기 슬라이드 번호 0부터 시작
    loop: true,  //무한 loop
    //freeMode: true,  //터치 만큼 자유롭게 이동
    centeredSlides: true, //센터 슬라이드 위치(만약 단수가 2개이면 양쪽은 반반씩 보임)
    //effect: 'fade',   //페이드효과(단수가 1단이 된다)
    //effect: 'flip',  //3D 회전효과(단수가 1단이 된다)
    // effect: 'coverflow',
    // coverflowEffect: {
    //   rotate: 30,
    //   stretch: 0,
    //   depth: 100,
    //   modifier: 1,
    //   slideShadows : true,
    // },
    navigation: {    //이전/다음 버튼
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {   //페이지 네이션
      el: '.swiper-pagination',
      //dynamicBullets: true,
      //clickable: true,
      type: 'fraction'   //  현재/총개수 (페이지네이션블릿은 사라진다)
    },
    // autoplay: {  //자동
    //   delay: 3000,
    //   disableOnInteraction: false
    // },
  //   scrollbar: {  //하단 스크롤바
  //     el: '.swiper-scrollbar',
  //     hide: true
  //   }
  });

  $('.business').css({'background':'url(./mainimages/bus0.jpg)'});


  swiper.on('transitionEnd', function() {
    var ind = swiper.realIndex;
    $('.business').css({'background':'url(./mainimages/bus'+ind+'.jpg)'});
  
  });

//공지사항 슬라이드 기능구현

//이벤트 스와이퍼 기능구현