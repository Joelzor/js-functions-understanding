// function myFunction(num1, num2) {
//   return num1+num2
// }

// const result = myFunction(5,5)
// console.log(result)

// This function takes two parameters and returns the sum of both of them. 
// In the example, 10 will be stored in the result variable 


// function myFunction(num1, num2) {
//     num1+num2
//   }
  
//   const result = myFunction(5,5)
//   console.log(result)
  // this function will add num1 and num2 together. however there will be no stored value in result because there is no return. returns undefined

//   function myFunction(num) {
//     return num-1
//   }
  
//   let num = 10
//   num = myFunction(num)
//   num = myFunction(num) 
// console.log(num)
// this function will take a number and - 1 from the declared value 


// function myFunction(num) {
//     return num-1
//   }
  
//   let num = 10
//   let add = 3
//   add = myFunction(add)
//   add = myFunction(add)
// console.log(num)
// console.log(add)
  //because num is not called in the function call only the value of add will have changed through the function. so the resulting will be 1.


  function myFunction(num, num1) {
    console.log(num1)
  }
  
  let num = 10
  let num1 = 2
  
  console.log(myFunction(num))
  
// I know that this function will return undefined as there is no return. 
  //the function also expects two arguments but there is only being one passed through it
