// ndms 콘솔에 복붙해서 사용, console의 tab context 확인 필수

// 사용자 주소를 집주소로 설정, 관외지역일 경우 수동으로 확인후 입력할 것
const userAdress = document.querySelector("#sferAddrUse_input_0");
userAdress.checked = true;
addrUse();

// 피해 원인 = 침수
const cause = document.querySelector("#cpnt_dmgDmgCauseCd_label");
cause.click();
const water = document.querySelector("#cpnt_dmgDmgCauseCd_itemTable_11");
water.click();

// 보험 여부 = 무보험
const insurance = document.querySelector("#cpnt_dmgInsrSbscbAt_label");
insurance.click();
const noInsurance = document.querySelector("#cpnt_dmgInsrSbscbAt_itemTable_1");
noInsurance.click();

// 부서 = 농식품부
const facility = document.querySelector("#cpnt_dmgMiryfc_label");
facility.click();
const goverment = document.querySelector("#cpnt_dmgMiryfc_itemTable_1");
goverment.click();

// 농기계 선택
const type = document.querySelector("#cpnt_dmgJobSe_label");
type.click();
const typeMachine = document.querySelector("#cpnt_dmgJobSe_itemTable_1");
typeMachine.click();

// 기계는 기타로 설정
const machine = document.querySelector("#cpnt_dmgFclty_label");
machine.click();
const unknown = document.querySelector("#cpnt_dmgFclty_itemTable_62");
unknown.click();

// 세부 분야 설정
const currentType = document.querySelector("#cpnt_dmgFcltyGrad_label");
currentType.click();
const etcType = document.querySelector("#cpnt_dmgFcltyGrad_itemTable_1");
etcType.click();

// 기계 피해 대수
const num = document.querySelector("#cpnt_dmgVolm");
num.value = 1;
scwin.cpnt_dmgVolm_onkeyup();

// 등록 버튼
const insert = document.querySelector("#dmgInsertBtn");
insert.click();

// 안내창 확인 -> 등록 경고 확인 -> 등록 완료창 확인
const checkBtn = document.querySelector("#cloz_btn");
checkBtn.click();
const okBtn = document.querySelector("#confirm_true_btn");
okBtn.click();
const closeBtn = document.querySelector("#cloz_btn");
closeBtn.click();

console.clear();
