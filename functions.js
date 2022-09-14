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


  // function myFunction(num, num1) {
  //   console.log(num1)
  // }
  
  // let num = 10
  // let num1 = 2
  
  // console.log(myFunction(num))
  
// I know that this function will return undefined as there is no return. 
  //the function also expects two arguments but there is only being one passed through it

// function myFunction(num, num1) {
//   console.log(num1)
// }
  
// let num = 10
// let num1 = 2
  
// myFunction(num1, num)

// This function will log 10 to the console because we pass num(10) as the second argument in the function call. The function
// only logs the second argument 

// let counter = 1

// function myFunction() {
//   counter++
//   return counter
// }

// myFunction() // 2
// const num = myFunction() // 3
// console.log(num)

// The function adds 1 to the counter and then returns the value. We call it twice so we add 1 each time.

// function myFunction(num1, num2) {
//   return num1 + num2
// }

// const num1 = 10
// const num2 = 1
// const num3 = 4

// const result = myFunction(num3, num1)
// console.log(result)

// The function adds num1 and num2 together. We pass it 4 (num3) and 10 (num1), resulting in 14!

// function myFunction(num1, num2) {
//   console.log(num3)
// }

// const num1 = 10
// const num2 = 1
// const num3 = 20

// myFunction(num3, num1)

// Logs num3, which isn't one of the parameters. The function can access the global variable num3 (meaning it is declared outside a function block). 