let key = prompt("Enter any key")
let value = prompt("Enter any key")

localStorage.setItem(key,value)

console.log(`the key was ${key} and the value was ${value}`);

if(key=="red" || key=="blue"){
    localStorage.removeItem(key)
}

if(key=="0" || value=="0"){
    localStorage.clear()
}

let name=localStorage.getItem(key)
console.log(name)
