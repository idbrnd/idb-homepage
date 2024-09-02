// 일본어 버전
let userData = {
  email: "",
  firstName: "",
  lastName: "",
  company: "",
  tel: "",
};

let emailValue = "";
let firstNameValue = "";
let lastNameValue = "";
let companyValue = "";
let telValue = "";
let mergedText = "";

const emailEl = document.querySelector("#email");
const email2El = document.querySelector("#email2");
const emailSelectEl = document.querySelector("#emailSelect");
const firstNameEl = document.querySelector("#firstName");
const lastNameEl = document.querySelector("#lastName");
const companyEl = document.querySelector("#company");
// const telEl = document.querySelector("#tel");

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@\"\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF]+(\.[^<>()[\]\\.,;:\s@\"\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
const namePattern =
  /^[a-zA-Z가-힣\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]{2,30}$/;
const companyPattern =
  /^(?=.*[a-zA-Z가-힣\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF-])[a-zA-Z가-힣\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF-0-9]+$/;
// const telPattern = /^\d{1,3}-\d{1,4}-\d{1,4}$/;

const noticeEmail = document.querySelector(".email-notice");
const noticeFirstName = document.querySelector(".firstName-notice");
const noticeLastName = document.querySelector(".lastName-notice");
const noticeCompany = document.querySelector(".company-notice");
const noticeTel = document.querySelector(".tel-notice");

const app = () => {
  //^ email 검증
  emailEl.addEventListener("change", validateEmail);
  email2El.addEventListener("change", validateEmail2);
  emailSelectEl.addEventListener("change", validateSelect);

  function validateEmail(event) {
    emailValue = event.target.value;
    console.log(emailValue);

    // email2 input의 값이 공백이 아닌 경우 글자 합치기
    if (email2El.value !== "") {
      mergedText = emailEl.value + "@" + email2El.value;
      console.log(mergedText);
      userData.email = mergedText;
      emailPatternValid();
    }
  }

  function validateEmail2(event) {
    const email2Value = event.target.value;
    console.log(email2Value);

    if (emailEl.value !== "") {
      // 앞 input과 뒤 input 합치기
      mergedText = emailEl.value + "@" + email2El.value;
      console.log(mergedText);
      userData.email = mergedText;
    }

    emailPatternValid();
  }

  function validateSelect(event) {
    const selectValue = event.target.value;

    if (selectValue === "") {
      email2El.value = ""; // 초기화
      email2El.disabled = false; // 활성화
      mergedText = emailEl.value + "@" + email2El.value;
      userData.email = emailEl.value + "@" + email2El.value;
      emailPatternValid();
    } else {
      email2El.value = selectValue;
      email2El.disabled = true; // 비활성화
      mergedText = emailEl.value + "@" + email2El.value;
      userData.email = emailEl.value + "@" + email2El.value;
      emailPatternValid();
    }
  }

  //* 이메일 패턴 검증
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
      noticeEmail.textContent = "電子メールの形式が正しくありません。";
      noticeEmail.style.display = "block";
      return false;
    }
  }

  //* 이름 검증 (이름, 성)
  firstNameEl.addEventListener("change", validateFirstName);
  lastNameEl.addEventListener("change", validateLastName);

  function validateFirstName(event) {
    firstNameValue = event.target.value;
    userData.firstName = firstNameValue;
    firstNamePatternValid();
  }
  function validateLastName(event) {
    lastNameValue = event.target.value;
    userData.lastName = lastNameValue;
    lastNamePatternValid();
  }

  //# 이름 검증
  function firstNamePatternValid() {
    const isValidName = namePattern.test(userData.firstName);

    if (isValidName) {
      // 유효한 이름
      firstNameEl.classList.add("valid");
      firstNameEl.classList.remove("invalid");
      noticeFirstName.style.display = "none";
      return true;
    } else {
      // 유효하지 않은 이름
      firstNameEl.classList.remove("valid");
      lastNameEl.classList.add("invalid");
      noticeFirstName.textContent = "名前の形式が正しくありません。";
      noticeFirstName.style.display = "block";
      return false;
    }
  }

  //# 성 검증
  function lastNamePatternValid() {
    const isValidName = namePattern.test(userData.lastName);

    if (isValidName) {
      // 유효한 이름
      lastNameEl.classList.add("valid");
      lastNameEl.classList.remove("invalid");
      noticeLastName.style.display = "none";
      return true;
    } else {
      // 유효하지 않은 이름
      lastNameEl.classList.remove("valid");
      lastNameEl.classList.add("invalid");
      noticeLastName.textContent = "名前の形式が正しくありません。";
      noticeLastName.style.display = "block";
      return false;
    }
  }

  //* 회사명 검증
  companyEl.addEventListener("change", validateCompany);

  function validateCompany(event) {
    companyValue = event.target.value;
    userData.company = companyValue;
    companyPatternValid();
  }

  function companyPatternValid() {
    const isValidCompany = companyPattern.test(companyValue);

    if (isValidCompany) {
      // 유효한 회사명
      companyEl.classList.add("valid");
      companyEl.classList.remove("invalid");
      noticeCompany.style.display = "none";
      return true;
    } else if (userData.company === "") {
      // 공백인경우 텍스트 안나오도록
      noticeCompany.style.display = "none";
    } else {
      // 유효하지 않은 회사명
      companyEl.classList.remove("valid");
      companyEl.classList.add("invalid");
      noticeCompany.textContent = "正しい会社名を入力してください。";
      noticeCompany.style.display = "block";
      return false;
    }
  }

  //* 등록하기 버튼 클릭시
  const registerBtn = document.querySelector("#registerBtn");
  registerBtn.addEventListener("click", postInfo);

  function postInfo(event) {
    event.preventDefault();

    console.log(userData);
    // console.log(emailPatternValid());
    // console.log(namePatternValid());
    // console.log(companyPatternValid());
    // console.log(telPatternValid());

    const URL = "https://idb.ai:3000/brochure";
    const emailNotice = document.querySelector(".email-notice");
    const firstNameNotice = document.querySelector(".firstName-notice");
    const lastNameNotice = document.querySelector(".lastName-notice");

    if (userData.email === "") {
      emailNotice.textContent = "メールアドレスは必須です。";
      emailNotice.style.display = "block";
      return;
    }
    if (userData.email !== mergedText) {
      emailNotice.textContent = "メールアドレスの形式を確認してください。";
      emailNotice.style.display = "block";
      return;
    }
    if (userData.firstName === "") {
      firstNameNotice.textContent = "名は必須です。";
      firstNameNotice.style.display = "block";
      return;
    }
    if (userData.lastName === "") {
      lastNameNotice.textContent = "姓は必須です。";
      lastNameNotice.style.display = "block";
      return;
    }

    if (userData.firstName !== firstNameValue) {
      firstNameNotice.textContent = "名の形式を確認してください。";
      firstNameNotice.style.display = "block";
      return;
    }
    if (userData.lastName !== lastNameValue) {
      lastNameNotice.textContent = "姓の形式を確認してください。";
      lastNameNotice.style.display = "block";
      return;
    }

    //! 서버로 보낼 데이터
    const USER_DATA = {
      email: userData.email,
      name: userData.firstName + " " + userData.lastName,
      company: userData.company,
      tel: "",
    };
    console.log(USER_DATA);

    // 이메일과 이름 검증 후 데이터 전송
    const completeValidate =
      emailPatternValid() !== false &&
      firstNamePatternValid() !== false &&
      lastNamePatternValid() !== false;
    if (completeValidate) {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(USER_DATA),
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

  const closeModal = () => {
    const modalEl = document.querySelector(".black-background");
    modalEl.classList.remove("show");
  };
  modalCloseBtn.addEventListener("click", closeModal);
}; // app() end

app();
