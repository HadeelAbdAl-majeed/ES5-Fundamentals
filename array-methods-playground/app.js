
let arr1=[];
let arr2=[];

for(let i=1 ; i<=25 ; i++){
    arr1.push("stdName"+i)
}

for(let j=26 ; j<=50 ; j++){
    arr2.push("stdNme"+j)
}

let allStd=arr1.concat(arr2);

allStd.sort();
console.log(allStd);

allStd.reverse();
console.log(allStd);

function exists(std){
    if(allStd.includes(std)){
      console.log("exists")
    }
    else{
       console.log("Not exists") 
    }
}

exists("stdName17")

allStd.forEach((std ,index)=>{
    console.log(`student index ${index} : student name ${std}`)
})


