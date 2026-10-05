const user={
    name : "Hadeel",
    email:"hadeel.abdelmajeed" ,
    age: 26,
    address:"Amman-Jordon",
    skills:["HTML","javaScript"]
}

let {name ,email , age ,address} = user;

console.log(`
    user name : ${name}
    Email : ${email}
    Age : ${age}
    Address : ${address}`);


let {name:uaserName} = user;    

console.log(uaserName)

let[firstSkills , secondSkills]=user.skills
console.log(`user Skills ${firstSkills} and ${secondSkills}`);

function newUser(name="Hadeel" , age=26){
    console.log(name +" " + age)
} 

newUser("Ali")

// If an optional parameter is omitted, its default value is used.