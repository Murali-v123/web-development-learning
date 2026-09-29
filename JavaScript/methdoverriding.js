class Hello {
    sayhello() {
        console.log("Hello from the parent class!");
    }
}

class Greet extends Hello {
    // Overriding the sayhello method
    // sayhello() {
    //     console.log("Hey there, This is the child class overriding the parent.");
    // }
    sayhello() {
        super.sayhello();//calling parentclass method before overriding the method
        console.log("Hey there, This is the child class overriding the parent.");
    }
}

let h = new Greet();
h.sayhello(); 
