// class Human{
//   // PROPERTIES
//   age;
//   #ht=180;
//   wt=70;

//   constructor(newAge,newHeight,newWeight){
//     this.age=newAge;
//     this.wt=newWeight;
//     this.#ht=newHeight;
//   }

//   // BEHAVIOUR

//   walking(){
//     console.log("I am walking:",this.#ht);
//   }
//   running(){
//     console.log("I am running");
//   }
//   get fetchHeight(){
//     return this.#ht;
//   }
//   set modifyHeight(val){
//     this.#ht=val;
//   }
// }
// let obj = new Human(26,200,85)
// console.log(obj.age);
// obj.walking();
// console.log(obj.fetchHeight);

function sayName(myName = "XYZ"){ //XYZ is default name
  console.log("My name is ",myName);
}
sayName();
