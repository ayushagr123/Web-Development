// const t1= performance.now();
// for(let i=1;i<100;i++){
//   let myPara = document.createElement('p');
//   myPara.textContent = 'This is para '+i;
//   document.body.appendChild(myPara);
// }
// const t2=performance.now();
// console.log(t2-t1);

// Another way to add paragraph
const t3= performance.now();
let myDiv = document.createElement('div');
for(let i =1;i<100;i++){
  let myPara = document.createElement('p');
  myPara.textContent = 'This is also para '+i;
  myDiv.appendChild(myPara);
}
document.body.appendChild(myDiv);
const t4= performance.now();
console.log(t4-t3);

//BEST PRACTICE
// const t5=performance.now();
// let fragment = document.createDocumentFragment();
// for(let i=0;i<100;i++){
//   let para=document.createElement('para');
//   para.textContent = 'This is a paragraph';
//   console.log();
//   fragment.appendChild(para);
// }
// document.body.appendChild(fragment);
// const t6=performance.now();
// console.log(t6-t5);
