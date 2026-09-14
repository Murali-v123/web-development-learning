let p1=new Promise((resolve, reject) => { 
    setTimeout(() => {
        resolve(5)
        console.log("hey bhiii ye mai huuu")
    }, 1000);
 })

 p1.then(()=>{
    console.log("Mai Log hu")
    setInterval(() => {
        console.log("inside the .then() to demo the promise chaining");
    }, 2000);
 })
