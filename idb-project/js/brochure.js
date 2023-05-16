// window.onload = (() => {
//     const downLoadEl = document.querySelector('a');
//     // downLoadEl.click();
// })
let userData = {
    email: '',
    name: '',
    company: '',
    tel: ''
}


//^ email 검증
const emailEl = document.querySelector("#email");

const validateEmail = (event) => {
    // 이메일 정규식 패턴
    const pattern =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const emailValue = event.target.value;
    userData.email = emailValue
    const isValidEmail = pattern.test(emailValue);

    const noticeEmail = document.querySelector(".email-notice");
    if (isValidEmail) {
        // 유효한 이메일
        emailEl.classList.add("valid");
        emailEl.classList.remove("invalid");
        noticeEmail.style.display = "none";
    } else {
        // 유효하지 않은 이메일
        emailEl.classList.remove("valid");
        emailEl.classList.add("invalid");
        noticeEmail.style.display = "block";
    }
};
emailEl.addEventListener("blur", validateEmail);


//^ 이름 검증
const nameEl = document.querySelector("#name");

const validateName = event => {
    // 이름 정규식 패턴
    const pattern = /^[a-zA-Z가-힣]{2,5}$/;
    const nameValue = event.target.value;
    userData.name = nameValue;
    // 이름과 패턴을 비교하여 유효성을 검사
    const isValidName = pattern.test(nameValue);

    const noticeName = document.querySelector(".name-notice");
    if (isValidName) {
        // 유효한 이름
        nameEl.classList.add("valid");
        nameEl.classList.remove("invalid");
        noticeName.style.display = "none";
    } else {
        // 유효하지 않은 이름
        nameEl.classList.remove("valid");
        nameEl.classList.add("invalid");
        noticeName.style.display = "block";
    }

};
nameEl.addEventListener("blur", validateName);


//^ 회사명 검증
const companyEl = document.querySelector("#company");

const validateCompany = event => {
    // 회사명 정규식 패턴
    const pattern = /^[a-zA-Z가-힣]+$/;
    const companyValue = event.target.value;
    userData.company = companyValue;
    // 회사명과 패턴을 비교하여 유효성을 검사
    const isValidCompany = pattern.test(companyValue);

    const noticeCompany = document.querySelector(".company-notice");
    if (isValidCompany) {
        // 유효한 회사명
        companyEl.classList.add("valid");
        companyEl.classList.remove("invalid");
        noticeCompany.style.display = "none";
    } else {
        // 유효하지 않은 회사명
        companyEl.classList.remove("valid");
        companyEl.classList.add("invalid");
        noticeCompany.style.display = "block";
    }

};
companyEl.addEventListener("blur", validateCompany);


//^ 전화번호 검증
const telEl = document.querySelector("#tel");

const validateTel = event => {
    // 전화번호 정규식 패턴
    const pattern = /^\d{2,3}\d{3,4}\d{4}$/;
    const telValue = event.target.value;
    userData.tel = telValue;
    // 전화번호와 패턴을 비교하여 유효성을 검사
    const isValidTel = pattern.test(telValue);

    const noticeTel = document.querySelector(".tel-notice");
    if (isValidTel) {
        // 유효한 전화번호
        telEl.classList.add("valid");
        telEl.classList.remove("invalid");
        noticeTel.style.display = "none";
    } else {
        // 유효하지 않은 전화번호
        telEl.classList.remove("valid");
        telEl.classList.add("invalid");
        noticeTel.style.display = "block";
    }

};
telEl.addEventListener("blur", validateTel);

// $(document).on("keyup", ".phoneNumber", function() { 
// 	$(this).val( $(this).val().replace(/[^0-9]/g, "").replace(/(^02|^0505|^1[0-9]{3}|^0[0-9]{2})([0-9]+)?([0-9]{4})$/,"$1-$2-$3").replace("--", "-") );
// });


//* 등록버튼 클릭시
const downLoadBtn = document.querySelector("#downLoadBtn");
downLoadBtn.addEventListener("click", postInfo);

function postInfo(event) {
    event.preventDefault();
    console.log(userData)

    // post 요청하고 응답받을때 status 200이면 모달창 띄우기 및 input 초기화
    
    const modalEl = document.querySelector('.black-background');
    modalEl.classList.add('show');
}



//* modal close
const modalCloseBtn = document.querySelector('#modalCloseBtn');

modalCloseBtn.addEventListener('click', () => {
    const modalEl = document.querySelector('.black-background');
    modalEl.classList.remove('show');
})




// const iosInfoEl = document.querySelector('#iosDownLoadInfo');
// const infoEl = document.querySelector('#info');
// const upDownArrow = document.querySelector('#upDownArrow');
// let isClicked = false;

// iosInfoEl.addEventListener('click', () => {
//     isClicked = !isClicked;
//     if(isClicked) {
//         // true면 숨김처리
//         infoEl.classList.add('show');
//         upDownArrow.textContent = '👆';
//         iosInfoEl.style.cssText = 'border-radius: 10px 10px 0 0';
//     } else {
//         // false면 보임처리
//         infoEl.classList.remove('show');
//         upDownArrow.textContent = '👇';
//         setTimeout(() => {
//             iosInfoEl.style.cssText = 'border-radius: 10px';
//         }, 250);
//     }

// })
