// let p = fetch("https://jsonplaceholder.typicode.com/users/1")
// // let p = fetch("https://jsonplaceholder.typicode.com/todos/1")

// p.then((value) => {
//     console.log(value.status); 
//     console.log(value.ok);     
//     // console.log(value.headers);     
//     return value.json()
// }).then((value2) => {
//     console.log("User Name:", value2.name);
//     console.log("User City:", value2.address.city);
//     // console.log("Full JSON Object:", value2); 
// })

let op = {
    method: "POST",
    headers:{
        "Content-type":"application/json; charset=UTF-8"
    },
    body : JSON.stringify({
        title: "Murali",
        body: "Heyyy bHaii",
        userId: 1100, 
    }),
}

fetch("https://typicode.com", op)
    .then((response) => response.json())
    .then((json) => console.log(json))
