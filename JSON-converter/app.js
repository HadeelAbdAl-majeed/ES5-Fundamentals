
const product={
    id : "12345" ,
    name:"Bread",
    price:35.5,
    category:"food",
    available:true,
}

// const jsonString =JSON.stringify(product);
// console.log(jsonString);


// const parseObject=JSON.parse(jsonString);
// console.log(parseObject);

// If the JSON contains an error or is not valid, the program may throw an error. We use try...catch to handle the error and prevent the program from stopping unexpectedly.

// try → Attempts to parse the JSON.
// catch → Handles the error if the JSON is invalid.


try{

    const jsonString =JSON.stringify(product);
    console.log(jsonString);


    const parseObject=JSON.parse(jsonString);
    console.log(parseObject);

}catch(error){
   
    console.log(error);

}



