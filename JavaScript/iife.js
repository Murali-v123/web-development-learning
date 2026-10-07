// let a = () =>{
//     return new Promise((resolve,reject) =>{
//          setTimeout(() => {
//             console.log("hello bhai");
//          }, 3000);
//     })
// }

// (async()=>{
//     let b=await a()
//     console.log(b);
//     let c=await a()
//     console.log(c);
//     let d=await a()
//     console.log(d);
// })()

// destructring

// let arr=[1,2,3,4,5]
// let [ab, ,bc,cd,...rest]=arr
// console.log(ab,bc,cd,rest);


// spread operator
function sum(a,b){
    return a+b
}
let arr=[1,2,3,44]
let obj={...arr}
console.log(obj);
console.log(sum(...arr));
