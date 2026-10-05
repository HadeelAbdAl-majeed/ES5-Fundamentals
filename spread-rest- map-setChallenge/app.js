

const arr1 = ["Ahmad", "Ali", "yousef"];

const arr2 = ["Yazan", "Mohammad", "Fared"];

const allArray = [...arr1, ...arr2];

console.log(allArray);


function calculateAvrqage(...grades) {

    let total = grades.reduce((sum, grade) => {
        return sum + grade;
    }, 0);

    return total / grades.length;
}

console.log(calculateAvrqage(67, 80, 83, 58));


const studentIds = [101, 102, 103, 101, 104, 102, 105];

const uniqueIds = [...new Set(studentIds)];

console.log(uniqueIds);

