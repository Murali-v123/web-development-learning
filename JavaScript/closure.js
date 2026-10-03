// function rtst(){
//     const x=()=>{
//         a=1000
//         console.log(a);
//         const y=()=>{
//             // a=100
//             console.log(a);
//             const z=()=>{
//                 a=10
//                 console.log(a);
//             }
//             z()
//         }
//         a=1
//         y()
//     }
//     return x
// }
// let a =rtst()
// a()


function name(nam){
    // this.nam=nam
    function display(){
        console.log(nam)
    }
    return display
}

let a=new name("murali")
a()
// console.log(a.nam)
