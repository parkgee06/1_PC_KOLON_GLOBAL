    $(document).ready(function () {
            
              //$('.topMove').hide();
           
             $(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
                  var scroll = $(window).scrollTop(); //스크롤의 거리
                 
                 
                  $('.text').text(scroll);

                  if(scroll>300){ //300이상의 거리가 발생되면
                      $('.topMove').fadeIn('slow');  //top보여라~~~~
                  }else{
                      $('.topMove').fadeOut('fast');//top안보여라~~~~
                  }
             });
           
              $('.topMove').click(function(e){
                 e.preventDefault();
                  //상단으로 스르륵 이동합니다.
                 $("html,body").stop().animate({"scrollTop":0},1000); //해당 위치로 스크롤 탑값을 부드럽게 이동시키는 코드
              });

              //슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
              $('.slideMenu a').click(function(e){
                 e.preventDefault(); //href="#" 속성을 막아주는..메소드
            
                  var value=0; //이동할 스크롤의 거리

                  if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
                     value= $('#content .con1').offset().top -180;  // 해당 콘테츠의 상단의 거리~~
                  }else if($(this).hasClass('link2')){
                     value= $('#content .con2').offset().top -180; 
                  }else if($(this).hasClass('link3')){
                     value= $('#content .con3').offset().top -180; 
                  }else if($(this).hasClass('link4')){
                     value= $('#content .con4').offset().top -180; 
                  }else if($(this).hasClass('link5')){
                     value= $('#content .con5').offset().top -180; 
                  }else if($(this).hasClass('link6')){
                     value= $('#content .con6').offset().top -180; 
                  }else if($(this).hasClass('link7')){
                     value= $('#content .con7').offset().top -180; 
                  }else if($(this).hasClass('link8')){
                     value= $('#content .con8').offset().top -180; 
                  }else if($(this).hasClass('link9')){
                     value= $('#content .con9').offset().top -180; 
                 }
                $("html,body").stop().animate({"scrollTop":value},1000);
              });
       });