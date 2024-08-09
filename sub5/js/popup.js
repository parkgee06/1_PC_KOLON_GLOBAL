$(document).ready(function(){
    $('.openBtn').on('click', function(e){
        e.preventDefault();
        // console.log('열기 버튼이 클릭되었습니다');
        $('.popup, .box').fadeIn('slow');
    });
  
    $('.closeBtn, .box').on('click', function(e){
        e.preventDefault();
        $('.popup, .box').fadeOut('fast');
    });
});