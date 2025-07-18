class Animal{
    constructor(name){
        this.name=name;
        console.log("Object is created....");
    }
    eats(){
        console.log("Eating food");
    }
    jumps(){
        console.log("Jumping");
    }

}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("Object is created and he is a lion....");
    }
    eats(){
        console.log("Eating food Roar");
    }
}

let a = new Animal("Bunny");
let b = new Lion("Shera")
console.log(a);
console.log(b);
console.log(b instanceof Animal);
console.log(b instanceof Lion);
console.log(a instanceof Lion);
console.log(a instanceof Animal);