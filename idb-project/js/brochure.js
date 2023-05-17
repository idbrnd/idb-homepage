let userData = {
    email: "",
    name: "",
    company: "",
    tel: "",
};

let emailValue = "";
let nameValue = "";
let companyValue = "";
let telValue = "";
let mergedText = "";

const emailEl = document.querySelector("#email");
const email2El = document.querySelector("#email2");
const emailSelectEl = document.querySelector("#emailSelect");
const nameEl = document.querySelector("#name");
const companyEl = document.querySelector("#company");
const telEl = document.querySelector("#tel");

const emailPattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
// const emailPattern = /^[^\sㄱ-ㅎㅏ-ㅣ가-힣]+@[^\sㄱ-ㅎㅏ-ㅣ가-힣]+\.[a-zA-Z]+$/;
const namePattern = /^[a-zA-Z가-힣]{2,10}$/;
const companyPattern = /^[a-zA-Z가-힣]+$/;
const telPattern = /^\d{2,3}-\d{3,4}-\d{4}$/;

const noticeEmail = document.querySelector(".email-notice");
const noticeName = document.querySelector(".name-notice");
const noticeCompany = document.querySelector(".company-notice");
const noticeTel = document.querySelector(".tel-notice");

const app = () => {

    //^ email 검증
    emailEl.addEventListener("change", validateEmail);
    email2El.addEventListener("change", validateEmail2);
    emailSelectEl.addEventListener("change", validateSelect);


    function validateEmail(event) {
        emailValue = event.target.value;
        const targetText = "@";
        const removedText = removeTextAfter(emailValue, targetText);

        function removeTextAfter(emailValue, targetText) {
            // 특정 텍스트 이후의 부분을 제거
            const removedText = emailValue.split(targetText)[0];
            return removedText;
        }
        emailEl.value = removedText;

        // email2 input의 값이 공백이 아닌 경우 글자 합치기
        if (email2El.value !== "") {
            mergedText = emailEl.value + email2El.value;
            userData.email = mergedText;
        }

        // emailPatternValid();
    };
    

    function validateEmail2(event) {
        const email2Value = event.target.value;
        // console.log(email2Value);

        if (emailEl.value !== "") {
            // 앞 input과 뒤 input 합치기
            mergedText = emailEl.value + email2El.value;
            userData.email = mergedText;
        }

        emailPatternValid();
    };
    

    function validateSelect(event) {
        const selectValue = event.target.value;

        if (selectValue === "") {
            email2El.value = "@"; // 초기화
            email2El.disabled = false; // 활성화
            userData.email = emailEl.value + email2El.value;
            emailPatternValid();
        } else {
            email2El.value = selectValue;
            email2El.disabled = true; // 비활성화
            userData.email = emailEl.value + email2El.value;
            emailPatternValid();
        }
    }

    
    
    // 이메일 패턴 검증
    function emailPatternValid() {
        const isValidEmail = emailPattern.test(userData.email);

        if (isValidEmail) {
            // 유효한 이메일
            emailEl.classList.add("valid");
            emailEl.classList.remove("invalid");
            noticeEmail.style.display = "none";
            return true;
        } else {
            // 유효하지 않은 이메일
            emailEl.classList.remove("valid");
            emailEl.classList.add("invalid");
            noticeEmail.textContent = "이메일 형식이 올바르지 않습니다.";
            noticeEmail.style.display = "block";
            return false;
        }
    }

    //^ 이름 검증
    nameEl.addEventListener("change", validateName);

    function validateName(event) {
        nameValue = event.target.value;
        userData.name = nameValue;
        namePatternValid();
    };

    function namePatternValid() {
        const isValidName = namePattern.test(userData.name);

        if (isValidName) {
            // 유효한 이름
            nameEl.classList.add("valid");
            nameEl.classList.remove("invalid");
            noticeName.style.display = "none";
            return true
        } else {
            // 유효하지 않은 이름
            nameEl.classList.remove("valid");
            nameEl.classList.add("invalid");
            noticeName.textContent = "이름의 형식이 올바르지 않습니다.";
            noticeName.style.display = "block";
            return false
        }
    }
    

    //^ 회사명 검증
    companyEl.addEventListener("change", validateCompany);

    function validateCompany(event) {
        companyValue = event.target.value;
        userData.company = companyValue;
        companyPatternValid();
    };

    function companyPatternValid() {
        const isValidCompany = companyPattern.test(companyValue);

        if (isValidCompany) {
            // 유효한 회사명
            companyEl.classList.add("valid");
            companyEl.classList.remove("invalid");
            noticeCompany.style.display = "none";
            return true
        } else if (userData.company === "") {   // 공백인경우 텍스트 안나오도록
            noticeCompany.style.display = "none";
        } else {
            // 유효하지 않은 회사명
            companyEl.classList.remove("valid");
            companyEl.classList.add("invalid");
            noticeCompany.textContent = "회사명이 올바르지 않습니다.";
            noticeCompany.style.display = "block";
            return false
        }
    }


    //^ 전화번호 검증
    telEl.addEventListener("change", validateTel);

    function validateTel(event) {
        telValue = event.target.value;
        userData.tel = telValue;
        telPatternValid();
    };
    

    function telPatternValid() {
        const isValidTel = telPattern.test(telValue);

        if (isValidTel) {
            // 유효한 전화번호
            telEl.classList.add("valid");
            telEl.classList.remove("invalid");
            noticeTel.style.display = "none";
            return true
        } else if (userData.tel === "") {
            noticeTel.style.display = "none";
        } else {
            // 유효하지 않은 전화번호
            telEl.classList.remove("valid");
            telEl.classList.add("invalid");
            noticeTel.textContent = "연락처의 형식이 올바르지 않습니다.";
            noticeTel.style.display = "block";
            return false
        }
    }

    const autoHyphen = (event) => {
        event.target.value = event.target.value
            .replace(/[^0-9]/g, "")
            .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
            .replace(/(\-{1,2})$/g, "");
    };
    telEl.addEventListener("input", autoHyphen);




    //* 등록하기 버튼 클릭시
    const registerBtn = document.querySelector("#registerBtn");
    registerBtn.addEventListener("click", postInfo);

    function postInfo(event) {
        event.preventDefault();

        // console.log(userData);
        // console.log(emailPatternValid());
        // console.log(namePatternValid());
        // console.log(companyPatternValid());
        // console.log(telPatternValid());

        const URL = "https://idb.ai:3000/brochure";
        const emailNotice = document.querySelector(".email-notice");
        const nameNotice = document.querySelector(".name-notice");

        if (userData.email === "") {
            emailNotice.textContent = "이메일은 필수 입력사항입니다.";
            emailNotice.style.display = "block";
            return;
        } else if (userData.email !== mergedText) {
            emailNotice.textContent = "이메일 형식을 확인해주세요.";
            emailNotice.style.display = "block";
            return;
        } else if (userData.name === "") {
            nameNotice.textContent = "이름은 필수 입력사항입니다.";
            nameNotice.style.display = "block";
            return;
        } else if (userData.name !== nameValue) {
            nameNotice.textContent = "이름 형식을 확인해주세요.";
            nameNotice.style.display = "block";
        }
        
        // 이메일과 이름 검증 후 데이터 전송
        if (emailPatternValid() !== false && namePatternValid() !== false) {
            fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log("성공:", data);
                const modalEl = document.querySelector(".black-background");
                modalEl.classList.add("show");
            })
            .catch((error) => {
                console.error("실패:", error);
            });
        }

    }

    //* modal close
    const modalCloseBtn = document.querySelector("#modalCloseBtn");

    modalCloseBtn.addEventListener("click", () => {
        const modalEl = document.querySelector(".black-background");
        modalEl.classList.remove("show");
    });

};  // app() end

app();









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
