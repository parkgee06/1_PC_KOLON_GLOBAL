let scalevalue = 0.5;
let leftvalue = 50;
const finalLeftValue = 32; // 최종적으로 고정될 왼쪽 위치 (%)
const scrollDistance = 500; // 스크롤해야 할 거리

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    let esgtop = $('#content .esg').offset().top;

    if (scroll > esgtop - 500) {
        // 배경 이미지 스케일 계산
        scalevalue = 0.5 + ((scroll - (esgtop - 500)) / 1000);
        if (scalevalue < 1.1) {
            $('#content .esg .wrap .bg').css('transform', 'scale(' + scalevalue + ')');
        }

        // 제목 위치 계산
        let scrollProgress = Math.min((scroll - (esgtop - 500)) / scrollDistance, 1);
        leftvalue = 50 - (50 - finalLeftValue) * scrollProgress;

        // 제목 위치 적용
        $('#content .esg .wrap .title').css('left', leftvalue + '%');
    }
});