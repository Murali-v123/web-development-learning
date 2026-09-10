// 1. Asynchronous execution demonstration
// alert("hello")
// console.log("sentence 1");
// console.log("sentence 2");

// setTimeout(() => {
//     console.log("Under timeout function");
// }, 1);


const fn = () => { 
    console.log("hello world its me when the script loadds");
}
const callback = (arg) =>{
    console.log(arg);
    alert(arg)
    fn()
}

const loadscript = (src,callback) =>{
    // let sc=document.createElement("script")
    // sc.src=src
    // sc.onload=callback("hello",fn)//or
    // // sc.onload=()=>callback("sucessful",fn) 
    // console.log("The Script has been loading sucessfully");
    // alert("the script is : "+src)
    // document.head.append(sc)
    let sr=document.createElement("script")
    sr.src=src
    sr.onload=callback("hey boy")
    document.head.append(sc)
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)