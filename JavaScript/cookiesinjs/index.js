// console.log(document.cookie)

let name=prompt("Enter Your Name:")
let age=prompt("Enter Your age:")
document.cookie=`username=${encodeURIComponent(name)}`
document.cookie=`age=${encodeURIComponent(age)}`
console.log(document.cookie);
console.log(decodeURIComponent(name));
console.log(decodeURIComponent(age));
