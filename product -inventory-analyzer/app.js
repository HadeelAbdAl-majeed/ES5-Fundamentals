
let inventory = [
  { id: 1, name: "Phone", price: 800, category: "Tech", quantity: 10 },
  { id: 2, name: "Laptop", price: 1500, category: "Tech", quantity: 5 },
  { id: 3, name: "Shirt", price: 40, category: "Apparel", quantity: 20 },
  { id: 4, name: "Shoes", price: 90, category: "Apparel", quantity: 15 },
  { id: 5, name: "Watch", price: 200, category: "Tech", quantity: 8 },
  { id: 6, name: "Headphones", price: 120, category: "Tech", quantity: 12 },
  { id: 7, name: "Desk", price: 300, category: "Furniture", quantity: 4 },
  { id: 8, name: "Chair", price: 150, category: "Furniture", quantity: 7 },
  { id: 9, name: "Book", price: 15, category: "Media", quantity: 50 },
  { id: 10, name: "Pen", price: 5, category: "Media", quantity: 100 }
];

inventory.sort((a, b) => a.price - b.price);
console.log(inventory);



function existCategory(category){
    for(item of inventory){
    if(item.category.includes(category)){
        console.log(`${item.category}  exist`);
       return;
    }    
}
  console.log(`${category} not  exist`);
}


existCategory("Media");
existCategory("Mediajjj");

inventory.splice(2,4);
console.log(inventory.length);

const sliceArray=inventory.slice(1,5)
console.log(sliceArray);

const array=inventory.concat(sliceArray);






