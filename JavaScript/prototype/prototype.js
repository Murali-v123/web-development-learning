// //  prototypes are the mechanism that allows objects to inherit features from one another.
// let a={
//     name1:"murali",
//     city:"bglore",
//     run:()=>{
//         alert("Heyy Bhaiii")
//     }
// }

// console.log(a);

// let r={
//     run:()=>{
//         alert("hellooo")
//     }
// }

// r.__proto__={
//     name:"murali.v"
// }

// a.__proto__=r
// // delete a.run to delete and run the run method and hello inside it 
// a.run()
// console.log(a.name);

let user_name={
    login(name){
        console.log("hey use "+name);
    }
    // login(){
    //     console.log("hey use "+this.name);
    // }
}

let user1=Object.create(user_name)
// user1.name="murali"
user1.login("murali")