// promise Object example
// Promise A Class / Object constructor.new Promise(...)
// randA custom Function.function rand() { ... }
// .then()A Promise Method (a function inside an object).orderFood.then(...)
function rand() {
    let x=Math.floor(Math.random()*2)
    if(x==0){
        return false
    }
    else{
        return true
    }
}
const orderFood = new Promise((resolve,reject)=>{
    let foodava=rand()
    setTimeout(() => {
        if(foodava){
            resolve("Hey bro your order is done")
        }
        else{
            reject("Hey Bro Iam sorry ")
        }
    }, 1);
})

orderFood.then((message)=>{
    console.log(message);
}).catch((err)=>{//catches error is promise gets rejected
    console.log(err);
})
.finally(()=>{
    console.log("Have Nice Day");//executed in both cases of resolve and reject
})