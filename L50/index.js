// // COMPILE TIME ERROR 
// console.log(1;  // Syntax error

// // RUN TIME ERROR
// console.log(x);  // Reference error
 // HANDLING 

//  try{
//   console.log('I AM INSIDE TRY BLOCK')
//   console.log(x);
  //a
  //b
  //c
// }
// catch(e){
//   console.log("i am inside catch block");
//   console.log("Errors are  ")
// }

// try{
//   // Reference error 
//   console.log(x);
// }
// catch(err){
//   throw new Error("Declare before printing");
// }      // creation of error object

let errcode=100;
if(errcode==100){
  throw new Error("Invalid json");
}