/**
 *  const,letなどの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書きが可能
// val1 = "上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // // constは上書き不可能
// // val3 = "上書き";
// // console.log(val3);

// // constは再宣言不可能
// let val3 = "再宣言";
// console.log(val3);

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 31
// };
// console.log(val4)

// val4.name = "jak";
// val4.address = "Hiroshima"
// console.log(val4)

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "じゃけぇ";
// const age = 31;

// // 「私の名前はじゃけぇです。年齢は31歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

//従来の関数
// function func1(str){
//     return str;
// }

// const func1 = function(str){
//     return str;
// };
// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => {
//     return str;
// }
// console.log(func2("func2です"));

// // 引数二つを足す関数
// const func3 = (numA,numB) => {
//     let sum;
//     sum = numA + numB;    
//     return sum;
// }

// const A = 10;
// const B = 20;

// console.log(`${A}+${B}=` + func3(A,B));

/**
 * 分割代入
 */
// const myProfile = {
//     name : "じゃけぇ",
//     age : 31
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

const myProfile = ["じゃけぇ", 31];
const message3= `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`
console.log(message3);

const [name , age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳です。`
console.log(message4);