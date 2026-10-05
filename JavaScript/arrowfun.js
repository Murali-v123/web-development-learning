const name = nam => console.log(nam,des);
// const name =(nam,des)=>console.log(nam,des);

// name(x.name,x.desc)


const x={
    name:"murali",
    desc:"stud",
    lang:["telugu","tamil"],
    show:function(){
        setTimeout(() => {
            console.log(`${this.name},${this.desc}\n${this.lang}`)
        }, 2000);
    }
}
x.show()
