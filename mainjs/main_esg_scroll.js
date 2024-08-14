//esg 스크롤박스
window.addEventListener('scroll', function () {
    let bgScale = 7 / 15000 * window.scrollY + 0.3;
    let titleScale = -1/25 * window.scrollY + 100;
    let titleTop = -7/250 * window.scrollY + 50;
    let titleLeft = -19/750 * window.scrollY + 50;

    document.querySelector('.bg').style.transform = `translate(-50%, -50%) scale(${bgScale})`;
    if(titleScale >= 30){
        document.querySelector('.title').style.fontSize = `${titleScale}px`
    }

    if(titleTop >= 8){
        document.querySelector('.title').style.top = `${titleTop}%`
    }

    if(titleLeft >= 12){
        document.querySelector('.title').style.left = `${titleLeft}%`
    }
    })