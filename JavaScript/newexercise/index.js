setInterval(async function() {
    document.querySelector("#bb").classList.toggle("bb")
}, 100);

document.querySelector(".ggg").addEventListener("click",function(){
    let win=window.open("https://www.google.com","_blank")
    // window.location("https://www.google.com")
    win.focus()
})

