// console.log("All About Class And Objects");

// class Animal{
//     constructor(name){
//         this.name =  name
//     }

//     eat(){
//         console.log("Abe mai tho kar rah hu aur mai veg hu");
//     }

//     jump(){
//         console.log("Abe mai tho khud ra hu");
//     }
// }

// class Lion extends Animal{
//     roar(){
//         console.log("Mai thor roar Kar tha hu");
//     }
//     eat(){
//         super.eat()
//         console.log("Mai tho non-veg hu");
        
//     }
// }

// class Bird extends Animal{
//     // constructor(name,flytype){
//     //     this.flytype=flytype
//     // }
//     fly(){
//         super.jump()
//         console.log("Mai thor bagg ja tha hu");
//     }
// }


// const l=new Lion("sher")
// const b=new Bird("pigeon","fly")
// // b.eat()
// b.fly()
// // l.roar()
// l.eat()


class heyBhai{
    constructor(name){
        this.name=name
    }

    get name(){
        return this._name
    }

    set name(name){
        this._name=name
    }
}

const h=new heyBhai("murali")
console.log(h.name)
h.name="madhu"
console.log(h.name)