class student{

    constructor(name, age, std, gpa){
        this.name = name;
        this.age = age;
        this.std = std;
        this.gpa = gpa;

    }
   play(){
        console.log(`${this.name} is playing`);
    }
}
let stu1 = new student("raj", 26, "VII", 3.5);
console.log(stu1.name);
console.log(stu1.age);
console.log(stu1.std);
console.log(stu1.gpa);

stu1.play();
