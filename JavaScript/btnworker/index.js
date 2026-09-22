let btn=document.querySelector(".btn")
const audio = new Audio("./Darling bgm.mp3")
audio.controls=true
btn.addEventListener("click",()=>{
        audio.play();
        const container=document.querySelector(".he")

        if (!document.body.contains(audio)) {
        container.appendChild(audio);
    }
})