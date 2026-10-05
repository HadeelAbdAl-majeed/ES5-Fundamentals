const numbers=[1,2,3,4,5,6,7,8,9,10]

const square=(num)=>{
   return num*num
}

const evenNum=(num)=>{
   return num % 2 ===0
}

// const calculatesPrice=

const squareNumber=numbers.map(num=>square(num));
const evenNumbers=numbers.filter(num=>evenNum(num));
const calculatesPrice=numbers.reduce((prevValue , currentValue)=>{
    return prevValue+=currentValue;
})

console.log(squareNumber);
console.log(evenNumbers);
console.log(calculatesPrice);
