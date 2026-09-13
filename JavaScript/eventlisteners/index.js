
let c=prompt("Enter a number")
let a=Math.floor(Math.random()*100)
let x=function(e){
    alert("this is function a :"+a)
}
let b=Math.floor(Math.random()*100)
let y=function(e){
    alert("this is function b :"+b)
}


btn.addEventListener("click",x)
btn.addEventListener("click",y)

if(c==1){
    btn.removeEventListener("click",x)
}
else if(c==2){
    btn.removeEventListener("click",y)
}