
// let sum = 10;

// let gogo = function (num) { // 타입이 없으니까
//     console.log(sum + 4);
//     console.log("run gogo " + num);
//     return 10;
// }

// // let result = run(5);
// let result = gogo(5);  //  변수에 담는순간 이름이 바뀜 - 그리고 function run(num) 의 이름이 사라짐

// console.log(result);




// html 코드를 제어하는 자바스크립트 코드는 html 보다 아래에 있어야한다
// 인터프리터는 위에서부터 순서대로 실행하기 때문에
// 순서로 실행하지만 함수 호출을 하면 호출라인을 갔다가 돌아온다.
// 함수는 호출이 가능하지만 함수가 의존하는 변수는 호출되지 않는다 먼저 초기화 되어야한다

// 우리는 html 을 제어하는 스크립트를 만들거니까
// 스크립트를 나중에 작성하자


function m1(){}
function m2(){ return 2; }
let m3 = function (){};  // 익명함수, 함수를 변수에 저장하면 이름을 없앨 수 있다
let m4 = ()=>{};    // 람다식
let m5 = ()=>1;     // return 1과 동일
