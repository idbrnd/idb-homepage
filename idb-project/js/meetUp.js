// 스크롤 맨위로 올리기

const toTopEl = document.querySelector("#to-top");

toTopEl.addEventListener("click", () => {
  gsap.to(window, 0.7, { scrollTo: 0 }); // 0.7초동안 스크롤의 위치를 0px 위치로 옮김
});

window.addEventListener("scroll", _.throttle(function () {
    // console.log(window.scrollY);  //# winow.scrollY => 화면 스크롤시 높이값을 출력해줌

    if (window.scrollY > 500) {
        // 스크롤 위로 올려주는 버튼 보이기
        gsap.to(toTopEl, 0.2, {
            x: 0,
        });
    } else {
        // 스크롤 위로 올려주는 버튼 숨기기
        // gsap 라이브러리는 요소를 지정해줘도 되지만, 아이디나 클래스 선택자만 적어줘도 동작한다.
        gsap.to("#to-top", 0.2, {
            x: 100,
        });
    }
}, 300));
