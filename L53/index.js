
function changeText(){
  let fpara = document.getElementById('fpara');
  fpara.textContent="Ayush";
}
fpara.addEventListener('click',changeText); // don't add paranthesis after the function name

fpara.removeEventListener('click',changeText);