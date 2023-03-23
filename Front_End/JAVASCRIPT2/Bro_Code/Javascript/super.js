
class Animal{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{

constructor(name, age, runspeed){
    super(name, age)
    this.runspeed = runspeed;
}
}
class Elephant extends Animal{

    constructor(name, age, walkspeed){
        super(name, age)
        this.walkspeed = walkspeed;
    }
}

const rab = new Rabbit("Rabbit", 3, 40);

const ele = new Elephant("Elephant",15, 7);

console.log(rab.name);
console.log(rab.age);
console.log(rab.runspeed);
console.log(rab.age);
console.log(ele.name);
console.log(ele.walkspeed);

