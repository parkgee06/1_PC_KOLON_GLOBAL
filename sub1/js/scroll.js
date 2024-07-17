$(document).ready(function () {
    $(".his_nav_tab li:eq(0)").find("a").addClass("spy"); //첫번째 서브메뉴 활성화
    $(".his_nav_tab").find(".his_fir").addClass("boxMove"); //첫번째 내용글 애니메이션 처리

    var smh = $(".his_nav_tab").offset().top;
    // var h1 = $(".his_fir").offset().top - 300;
    var h1 = $(".his_sec").offset().top - 300;
    var h2 = $(".his_thi").offset().top - 300;
    var h3 = $(".his_fou").offset().top - 300;

    //sticky
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
        // $(".text").text(scroll);

        //sticky menu 처리
        if (scroll > smh - 180) {
            // console.log("Adding active class");
            $(".his_nav_tab").addClass("active"); //아까의 가상클래스를 달아주기
            $("header").hide(); //헤더가 사라져라~
        } else {
            // console.log("Removing active class");
            //다시 올라가면
            $(".his_nav_tab").removeClass("active");
            $("header").show(); //헤더를 다시 보여주고
        }
        //여기까지가 스티키

        //spy
        $(".his_nav_tab li").find("a").removeClass("spy");
        //모든 서브메뉴 비활성화

        //스크롤의 거리의 범위를 처리
        if (scroll >= 0 && scroll < h1) {
            //첫번째 섭메뉴 어디서부터 활성화 시킬지 숫자를 적어줌
            $(".his_nav_tab li:eq(0)").find("a").addClass("spy"); //첫번째 서브메뉴 활성화
            $(".his_fir").addClass("boxMove"); //첫번째 내용 콘텐츠 애니메이션
        } else if (scroll >= h1 && scroll < h2) {
            $(".his_nav_tab li:eq(1)").find("a").addClass("spy"); //두번째 서브메뉴 활성화
            $(".his_sec").addClass("boxMove");
        } else if (scroll >= h2 && scroll < h3) {
            $(".his_nav_tab li:eq(2)").find("a").addClass("spy"); //세번째 서브메뉴 활성화
            $(".his_thi").addClass("boxMove");
        } else if (scroll >= h3) {
            $(".his_nav_tab li:eq(3)").find("a").addClass("spy"); //네번째 서브메뉴 활성화
            $(".his_fou").addClass("boxMove");
        }
    });

    $(".his_nav_tab li a").click(function (e) {
        //슬라이드메뉴에 있는 a를 클릭하면
        e.preventDefault(); //href="#" 속성을 막아주는 메소드

        var value = 0; //이동할 스크롤의 거리

        if ($(this).hasClass("tab1")) {
            //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
            value = $(".his_fir").offset().top - 90; // 해당 콘텐츠의 상단의 거리~~ //off변경 set 이 컨텐츠 위에 거리를 알아서 계산해주는게 .offset().top을 기억해두렴!
        } else if ($(this).hasClass("tab2")) {
            value = $(".his_sec").offset().top - 90;
        } else if ($(this).hasClass("tab3")) {
            value = $(".his_thi").offset().top - 90;
        } else if ($(this).hasClass("tab4")) {
            value = $(".his_fou").offset().top - 90;
        }

        // value-=100 바로 위 말고 조금 위로 보이게 하고 싶으면 value-=100 이렇게 앞에 -붙이면 됨

        $("html,body").stop().animate({"scrollTop": value }, 1000); //스크롤의 거리를 계산해서 알아서 움직여라잇 스크롤 탑에value넣어주면 이동한다~
    });
});
