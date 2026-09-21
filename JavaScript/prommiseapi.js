let p1= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(5)
    }, 1000);
})

let p2= new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(55)
    }, 1000);
})

let p3= new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(53)
    }, 3000);
})

// p1.then((value)=>{
//     console.log(value);
// })

// let pro = Promise.all([p1,p2,p3])
// let pro = Promise.any([p1,p2,p3])
let pro = Promise.allSettled([p1,p2,p3])
// let pro = Promise.resolve(6)
pro.then((value)=>{
    console.log(value);
})