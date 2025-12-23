// let obj = {
//   name: "Ayush",
//   weight:70,
//   height:"5ft 7in",
//   age:21,
//   greet:function(){
//     console.log("Hello World!!");
//   }
// };
//   // name can be inside  double inverted comma as well

// obj.greet();
// console.log(typeof(obj));

// let arr=[1,2,3,4,5];
// console.log(arr);

// 
let arr=[2 ,3, 4, 5, 6, 7, 8];
let ansarr = arr.map((number)=>{
  if(number%2===0){
    return number;
  }
})
console.log(ansarr);
