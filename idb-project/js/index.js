
// 스크롤시 NAVBAR 배경
$(window).scroll(function() {
  const scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $("header").addClass("navbg");
  } else {
      $("header").removeClass("navbg");
    }
});

// 반응형 일때 사이드 메뉴
$('.show-btn').click(function(){
  $('.nav-m').fadeIn()
})
$('.hide-btn').click(function(){
  $('.nav-m').fadeOut()
})

// AOS JS
AOS.init();

// POPUP 버튼
$('.pop-show').click(function(){
  $('.modal-bg').fadeIn()
  $('.body-container').addClass("bg-blur");
})
$('.pop-hide').click(function(){
  $('.modal-bg').fadeOut()
  $('.body-container').removeClass("bg-blur");
})



// 문의하기 -> 제출버튼 클릭시
const companyName = document.getElementById('company_name');
const customerRole = document.getElementById('customer_role');
const customerName = document.getElementById('customer_name');
const tel = document.getElementById('tel');
const userMail = document.getElementById('user_mail');
const typeSelect = document.getElementById('types');
const contactUs = document.getElementById('user_text');
const checkBox1 = document.getElementById('check1');
const checkBox2 = document.getElementById('check2');
const checkBox3 = document.getElementById('check3');
const checkBox4 = document.getElementById('check4');
const submitBtn = document.getElementById('submitBtn');


const verification = (e) => { 
  e.preventDefault();
  
  // input 공백 감지
  if (companyName.value == "") {
    alert('회사 이름을 입력해주세요.')
  } else if (customerRole.value == "") {
    alert('직함을 입력해주세요.')
  }
  else if (customerName.value == "") {
    alert('이름을 입력해주세요.')
  }
  else if (tel.value == "") {
    alert('연락처를 입력해주세요.')
  }
  else if (userMail.value == "") {
    alert('이메일을 입력해주세요.')
  }
  else if (contactUs.value == "") {
    alert('문의내용을 입력해주세요.')
  }
  else if (checkBox1.checked == false) {
    alert('아이디비 이용약관에 동의해주세요')
  }
  else if (checkBox2.checked == false) {
    alert('개인정보 수집이용에 동의해주세요.')
  }
  else if (checkBox3.checked == false) {
    alert('만 14세 이상에 동의해주세요.')
  }
  else {

    const url = 'http://183.111.79.81:8007/docs';
    const data = {
      "company": companyName.value,
      "name": customerName.value,
      "emp_title": customerRole.value,
      "phone": tel.value,
      "email": userMail.value,
      "inquiry_category": typeSelect.value,
      "inquiry_content": contactUs.value
    }

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: 'include',
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        // if (data.status == 200) {
        //   console.log(data)
        // } else {
        //   console.log("400")
        // }
      })
      .catch((error) => {
        console.log(error)
      });
    
    // 제출완료 알림창 띄우기(임의로 alert 이용)
    alert('제출 완료');
    $('.modal-bg').fadeOut();
    $('.body-container').removeClass("bg-blur");
  }
}
  
submitBtn.addEventListener('click', verification )




