class Name{
    
    get nameget(){
        return this._name
    }

    set nameset(h){
        this._name = h
    }

    display(){
        console.log(this._name);  
    }
}

let h=new Name()
h.nameset="murali"
console.log(h.nameget)
// h.display()