let students = [];

for (let i = 1; i <= 50; i++) {
    let student = {
        id: i,
        name: `Student_${i}`,
        grade: Math.floor(Math.random() * 50) + 50
    };

    students.push(student);
}

console.log(students)


students.splice(2,1);
students.splice(5,1, {id:51 , name:'Student_51' , grade: 90});
students.splice(10,0,{id: 52, name: 'Student_52', grade: 75});

let arrSlice=students.slice(0,15);
console.log(arrSlice);

students.sort((a, b) => a.grade - b.grade);

students.forEach((std)=>{
    console.log(`
        id :${std.id}
        Name: ${std.name}
        grade:${std.grade}`)
})
