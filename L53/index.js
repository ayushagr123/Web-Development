
// function changeText(){
//   let fpara = document.getElementById('fpara');
//   fpara.textContent="Ayush";
// }
// fpara.addEventListener('click',changeText); // don't add paranthesis after the function name

// fpara.removeEventListener('click',changeText);
//Best practice create function first then pass it in addEventListener and same function must be passed in removeEventListener as well.


// fpara.addEventListener('click',function(){
//   let fpara = document.getElementById('fpara');
//   fpara.textContent="Ayush";
// }
// );                                                      // this is wrong as these methods are treated as two different objects.
// fpara.removeEventListener('click',function(){
//   let fpara = document.getElementById('fpara');
//   fpara.textContent="Ayush";
// });




// let fpara = document.getElementById('fpara');
// let paras = document.querySelectorAll('p'); 
function alertFunction(event){
      if(event.target.nodeName==='SPAN'){
        alert("You have clicked on "+ event.target.textContent);
      }
      
  
}
// for(let i=0;i<paras.length;i++){
//   let para = paras[i];
//   para.addEventListener('click',alertFunction);
// }
//Instead of iterating over all paras add event listener on div which contains all paras
let myDiv = document.getElementById('wrapper');
myDiv.addEventListener('click',alertFunction);
