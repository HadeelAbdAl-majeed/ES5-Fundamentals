
class Person{

    constructor(name,email){
        this.name=name;
        this.email=email;

    }

    getgetInfo(){
      
        return`Uaer Name :${this.name} , Email : ${this.email}`
    }
}


class Student extends Person{

    constructor(name , email, id  ,major){
        super(name , email);
        this.id=id;
        this.major=major;
    }

    getgetInfo(){
      return`Student Name :${this.name} , Email : ${this.email} , student ID: ${this.id} , University Major:${this.major}`  
    }

}


class  Instructor extends Person{
    constructor(name , email ,subject){
        super(name , email);
        this.subject=subject;
    }

    getgetInfo(){
      return`Student Name :${this.name} , Email : ${this.email} , The subject they learned: ${this.subject} `  
    }
}


const person1=new Person("Hadeel" , "hadeel@gamil.com");
const student1=new Student("Ali", "ali@gamil.com" , "13475AA"  , "computer science");
const instructor1=new Instructor("Fared" , "fared@gmil.com","C++")

console.log(person1);
console.log(student1);
console.log(instructor1);