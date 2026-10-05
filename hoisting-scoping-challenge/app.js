// console.log(name);
// var name = "Jone";

// function test() {
//   var x = 10;
//   if (true) {
//     var y = 20;
//   }
//   console.log(y);
// }

// test();
// console.log(x);
// ========================================

// Output console.log(name);: undefined

// Explanation: Variables declared with var are function-scoped, not block-scoped. Therefore,
//  the variable y declared inside the if (true) block is accessible anywhere within
//  the test() function.

// console.log(x); (outside test()) ---> Output: ReferenceError: x is not defined


// Function Scope vs. Block Scope:

// Function Scope (var): Variables are contained within the function they are declared
//  in and ignore code blocks like if, for, or while.

// Block Scope (let / const): Variables are restricted strictly to the block {} in which they are
//  declared.


function test() {
  let x = 10;
  if (true) {
    let y = 20;
    console.log(y);
  }
  
  console.log(x);
}

test();

