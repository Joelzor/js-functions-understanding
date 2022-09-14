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

// function myFunction(num1) {
//   if(true) {
//     return -10
//   }

//   return num1 * 10
// }

// const result = myFunction(5)
// console.log(result)
//the result should show -10. Because the second return statement will never be reached becuase the if condition will never fail in this exmaple. 

// Q16
// function myFunction(num1) {
//   if(false) {
//     return -100
//   }

//   return num1 * 10
// }

// const result = myFunction(5)
// console.log(result)

// The first return cannot be reached due to the if condition (false). Therefore we multiply num by 10 and store it in result.

// Q17
// function myFunction(num1) {
//   return -100

//   return num1 * 10
// }

// const result = myFunction(5)
// console.log(result)

// The second return is unreachable due to the previous return. Therefore -100 will be stored in result. 

// Q18
// function myFunction(num1) {

//   return num1 * 10

//   return -100
// }

// const result = myFunction(5)
// console.log(result)

// Again, the second return is unreachable because first return exits the function. Therefore, num1 * 10 is is stored in result, thus resulting in 50.

// Q19
// function myFunction(num1, num2, num3) {
//   return num2
// }

// const result = myFunction(5, 10, 15)
// console.log(result)

// This function will return 10 because num2 is the only thing being returned. The other arguments are basically discarded until called

// Q20
// function myFunction(num1, num2, num3) {
//   return num1 + num3
// }

// const num1 = 20
// const num2 = 200
// const num3 = 1000

// const result = myFunction(5, 10, num3, 15)
// console.log(result)

// Only two of the three parameters are called in the function body. The first paramter is set to 5 and the third is defined as a variable (num3) equaling 1000. Therefore, the result will be 1005.

//Q21

// function myFunction(num1, num2) {
//   const result = num1+num2
//   return result
// }

// const result = myFunction(10, 20)
// myFunction(100, 2)
// console.log(result)
//result will output 30. the second myFunction will not be shown as it is not called upon(until it is used it will just be there)

//Q22
// function myFunction(num1, num2) {
//   let result = num1+num2
//   return result
// }

// let result = 0
// myFunction(100, 2)
// console.log(result)
//the result will return '0' as that is the value it is assigned. the second myFunction will not return anything unless it is called upon.

//Q23
// function myFunction(num1, num2) {
//   result = num1+num2
// }

// let result = 0
// myFunction(100, 2)
// console.log(result)

//regardless of the fact that there is no return. result will still show the value of '0' as that is what it is assigned to.

//we were wrong. 

//the function reassigns the variable on line 277. 
//this time we dont declare a new variable or a new result variable in the function, therefore the answer will result in 102.

//Q24
// function myFunction(num1, num2) {
//   const result = num1+num2
//   return 100
// }

// const result = myFunction(5, 2)
// console.log(result)
// this function has a set return of 100, therefore that will be the only output when the function is called. 
//
//Q25

function myFunction(a) {
  let b = 20
  
  console.log("a:", a) //100
  console.log("b:", b) // 20 
  console.log("c:", c) //3
}

let a = 1
let b = 2
let c = 3

myFunction(100) 
//the function will log 3 values.
// a will give 100 
//b is being accessed from the function block, therefore = 20 
//c is only given the value of 3. 