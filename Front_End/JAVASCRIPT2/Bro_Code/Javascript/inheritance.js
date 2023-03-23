class Animal{
    alive = "true";

    eat(){
        console.log(`This ${this.name} is eating`);
    }
  
}


class rabbit extends Animal{
    
    name = "rabbit";

    run(){
        console.log(`This ${this.name} is running`);
    }

}

class elephant extends Animal{
   
    name = "Elephant";

   
    run(){
        console.log(`This ${this.name} is running`);
    }
    
}

const rab = new rabbit();

console.log(rab.alive);
rab.eat();
