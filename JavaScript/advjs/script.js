// // alert("Heyy boiii")
// // iife-immediate invoke function expression
// async function sleep() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(45)
//         }, 1000);
//     })
// }


// (async function main(params) {
//     let a=await sleep()
//     console.log(a);
// })()

//destructuring
// let [a,b,...rest]=[1,2,3,4,5]
// console.log(a,b,rest);

// let obj={
//     a:3,
//     b:2,
//     c:3
// }

// let {a ,b}=obj
// console.log(a,b);


// spread syntax

// function sum(a,b,c) {
//     return a+b+c
// }

// let arr=[2,3,5]
// let b={...arr}
// console.log(b);
// console.log(sum(...arr));


// global,local or block level scope
// var a=1
// let c=3//global scope
// function hel(params) {
//     let b=4//local scope or block scope
//     console.log(b);
//     console.log(a);
//     console.log(c);
// }
// hel()

// hosting

hel("murali")

function hel(params) {
    console.log(params)
}

console.log(a);//gives an error
console.log(c);//gives o/p as undefined
let a=6
var c=7