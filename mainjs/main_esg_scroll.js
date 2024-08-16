function adjustElements() {
    let scrollY = window.scrollY || window.pageYOffset;
    let bgScale = 7 / 15000 * scrollY + 0.5;  // 초기 크기를 0.5로 설정
    let titleScale = -1/25 * scrollY + 100;
    let titleTop = -7/250 * scrollY + 50;
    let titleLeft = -19/750 * scrollY + 50;

    document.querySelector('.bg').style.transform = `translate(-50%, -50%) scale(${bgScale})`;

    if (titleScale >= 50) { // 폰트 크기 최소값을 50%로 설정
        document.querySelector('.title').style.fontSize = `${titleScale}%`;
    }

    if (titleTop >= 8) {
        document.querySelector('.title').style.top = `${titleTop}%`;
    }

    if (titleLeft >= 12) {
        document.querySelector('.title').style.left = `${titleLeft}%`;
    }
}

window.addEventListener('scroll', adjustElements);

// 페이지 로드 시에도 adjustElements 함수를 호출하여 초기 상태를 설정
window.addEventListener('load', adjustElements);