$(document).ready(function(){


    var characters = [
        {
            name:'코오롱글로벌 스마트 건설기술 공모전 및 MOU', 
            information:'2022년 10월 17일', 
        },
        {
            name:'코오롱글로벌 62주년 창립기념일', 
            information:'2022년 10월 13일', 
        },
        {
            name:'‘안전보건 통합관제센터’ 개소식', 
            information:'2022년 7월 28일', 
        },
        {
            name:'‘OSC 활성화를 위한 국제 세미나’ 개최', 
            information:'2022년 6월 28일', 
        },
        {
            name:'김정일 대표이사 주관 안전보건 결의대회 개최', 
            information:'2022년 4월 28일', 
        },
        {
            name:'유색 태양광패널 Solar Skin® 사업협약 체결', 
            information:'2020년 4월 24일', 
        },
        {
            name:'토스카나밸리 그룹과 전략적 파트너십 구축', 
            information:'2019년 9월 30일', 
        },
        {
            name:'자동차 플랫폼 비즈니스 활성화를 위한 업무협약 체결', 
            information:'2017년 5월 21일', 
        },
        {
            name:'중동지역 LED Glass 독점 판매 합작법인 설립 MOU 체결', 
            information:'2017년 3월 06일', 
        },
        {
            name:'LH ‘2016년도 고객품질대상’ 최우수상 수상', 
            information:'2016년 12월 7일', 
        },
        {
            name:'2016년 최고경영자 현장 경영 (완도 장보고대교)', 
            information:'2016년 3월 17일', 
        },
        {
            name:'코오롱글로벌, 영등포경찰서와 업무협약 체결', 
            information:'2012년 6월 15일', 
        }

      ];
  
  
    $('.characters .charbox img').attr('src','./images/content5/gallery_icon_1.jpg');
    $('.gallery-thumbs .title').html(characters[0].name);
    $('.gallery-thumbs .main_t').html(characters[0].information);
    $('.characters .gallery-thumbs ul li:eq(0) a').css('filter','grayscale(0)');
      
    $('.characters .gallery-thumbs a').click(function(e){
        e.preventDefault();
      
        var ind = $(this).index('.characters .gallery-thumbs a');
  
        $('.characters .charbox img').attr('src','./images/content5/gallery_icon_'+(ind+1)+'.jpg');
  
        $('.gallery-thumbs .title').html(characters[ind].name);
        $('.gallery-thumbs .main_t').html(characters[ind].information);

        $('.characters .gallery-thumbs ul li a').css('filter','grayscale(100%)');
        $('.characters .gallery-thumbs ul li:eq('+ind+') a').css('filter','grayscale(0)');
    });
  });
  
  