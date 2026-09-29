class Hello{
    sayhello(){
        console.log("Hello")
    }
}

class Greet extends Hello{
    // constructor(){
    //     super()
    // }
    greet(name){
        super.sayhello(name)
        console.log(`Happy greeting mr/mrs:${this.name}`);
    }
}

let h=new Greet()
h.greet()