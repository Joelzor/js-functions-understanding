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

//Q4
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

//Q5
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

// function myFunction(num1, num2, num3) {
//   console.log(num3)
// }

// const num1 = 10
// const num2 = 1
// const num3 = 20

// console.log(myFunction(num3, num1, 100))

 //this function will has three parameters, however the third parameter when it is called is set at 100. 
 //so num3 becomes 100 
//Q10
//  function myFunction(num1, num2, num3) {
//   return num1 + num2 + num3
// }

// const num1 = 10
// const num2 = 1
// const num3 = 20

// const result = myFunction(1, 1, 1)
// console.log(result)
// the function has three parameters which have been set to '1' when the function is called. so the function shall return 3. 

// function getSomeValue() {
//   return 2
// }

// function myFunction(num1) {
//   const num2 = getSomeValue()
//   return num1 * num2
// }

// const result = myFunction(5)
// console.log(result)
// //getSomeValue will return '2' which is later called in the myFunction. 
// //myFunction will times getSomeValue by num1 paramenter. so this function will return 10.


// function getSomeValue() {
//   return 2
// }

// function myFunction(num1) {
//   const num2 = getSomeValue()
//   return num1 * getSomeValue()
// }

// const result = myFunction(5)
// console.log(result)
//num1 which has the value of 5 will be timesed by 2 ( value of getSomeValue) so the result call will equal 10.
//num2 is not called anywhere so it will not show until called. 

// function getSomeValue() {
//   return 2
// }

// function myFunction(num1) {
//   return getSomeValue() * getSomeValue()
// }

// const result = myFunction(5)
// console.log(result)
//the resulting value will be 4 as num1 parameter is not called upon. 

//Q15

function myFunction(num1) {
  if(true) {
    return -10
  }

  return num1 * 10
}

const result = myFunction(5)
console.log(result)
//the result should show -10. Because the second return statement will never be reached becuase the if condition will never fail in this exmaple. 