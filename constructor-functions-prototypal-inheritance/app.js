

function  Person(name ,age){
    this.name = name;
    this.age=age;
}

Person.prototype.greet=function(){
    return `my name ${this.name} my age ${this.age} years old`
}

function  Employee(name , age , employeeId ,position){
    Person.call(this,name,age);
    this.employeeId=employeeId;
    this.position=position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


Employee.prototype.greet=function(){
    return`my name ${this.name} my age ${this.age} years old , My ID ${this.employeeId} , working as a ${this.position } `
}

let per1=new Person("Ali" ,25)
let emp1=new Employee("Hadeel" ,26 ,"120150" , "Developer")
console.log(per1.greet());
console.log(emp1.greet());