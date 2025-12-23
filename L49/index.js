let obj = {age:23,ht:180,wt:70};
console.log("Ayush");
obj.color="pink";
console.log(obj);
let obj2=obj;
console.log(obj2);
obj2.width=30;
console.log(obj);
// Object Cloning 

// Using Spread Operator
let obj3={...obj};
obj.run="fast";
console.log(obj3);
console.log(obj);