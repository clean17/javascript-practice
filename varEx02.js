let n1 = 1;
let b1 = true;
let arr = [1, 2, "나"]; // let arr = []; 초기화만 할경우
let user = {  // json 이 자바스크립트를 본따 만들었으니 비슷함
    id: 1,
    username: "ssar",
    email: "ssar@nate.com",
    hobby: ["농구", "축구"],
    account: {
        id: 1122,
        password: 8087,
        balance: 50000
    }
};

console.log("n1 : ", n1);
console.log(`n1 의 값은 ${n1} 입니다.`);
console.log(`b1은 ${b1}`);
console.log(arr[2]);
console.log(user.account);
console.log(user.account.password);