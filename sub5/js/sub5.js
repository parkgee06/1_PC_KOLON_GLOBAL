let tabContent = document.querySelectorAll('.tab_content'); // 모든 탭 컨텐트를 리스트로 가져온다.
        let tabBtn = document.querySelectorAll('.tab'); // 모든 탭 버튼을 리스트로 가져온다.

        // forEach문은 매개변수로 반복문으로 풀어놓은 (각각의 아이템, 인덱스)를 사용할 수 있음
        tabBtn.forEach((eachBtn, btnIdx) => {
            eachBtn.addEventListener('click', e => { // 탭버튼에 동작을 심어주기 위해 클릭이벤트 부여
                e.preventDefault();  //<a href="#"> 태그 링크 처리
                
                // 클릭이 일어났을 때
                if(btnIdx == 0) { // 클릭된 버튼 인덱스가 0이면(첫번째 탭이면) 전체보기
                    tabContent[0].style.display = 'block'; // 첫번째 탭 보여줌
                    tabContent[1].style.display = 'block'; // 두번째 탭 보여줌
                } else if(btnIdx == 1) { // 두번째 탭이면 일반 보여주기
                    tabContent[0].style.display = 'block';
                    tabContent[1].style.display = 'none';
                } else if(btnIdx == 2) { // 세번째 탭이면 입사지원 보여주기
                    tabContent[0].style.display = 'none';
                    tabContent[1].style.display = 'block';
                }
            });
        });


        // 도메인 직접 입력 or domain option 선택
const domainListEl = document.querySelector('#email2_list')
const domainInputEl = document.querySelector('#email2')
// select 옵션 변경 시
domainListEl.addEventListener('change', (event) => {
  // option에 있는 도메인 선택 시
  if(event.target.value !== "type") {
    // 선택한 도메인을 input에 입력하고 disabled
    domainInputEl.value = event.target.value
    domainInputEl.disabled = true
  } else { // 직접 입력 시
    // input 내용 초기화 & 입력 가능하도록 변경
    domainInputEl.value = ""
    domainInputEl.disabled = false
  }
})