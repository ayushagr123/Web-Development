// let firstPromise = new Promise((resolve,reject)=> {
//   console.log("Ayush");
//   reject(new Error("Internal Server Error"));
// });

let firstPromise = new Promise((resolve,reject)=>{
  let success = false;
  if(success){
    resolve("Promise Fulfilled");
  }
  else{
    reject("Promise Rejected");
  }
});

firstPromise.then((message) => {
  console.log("Then message is: "+message);
}).catch((error) => {
  console.log("Error :"+error);
})

