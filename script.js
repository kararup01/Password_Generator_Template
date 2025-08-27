let inputSlider = document.querySelector('#input-slider');
let sliderValue = document.querySelector('#slider-value');
let passBox = document.querySelector('.pass-Box');
let lowercase = document.querySelector('#lowercase');
let uppercase = document.querySelector('#uppercase');
let numbers = document.querySelector('#number');
let symbols = document.querySelector('#symbol');
let genBtn = document.querySelector('.gen-btn');
let copyIcon = document.querySelector('#copy-Icon');

sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener('input', ()=> {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener('click', ()=> {
  passBox.value = generatedPassword (); 
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "01223456789";
let allSymbols = "~!@#$%^&*";


function generatedPassword () {
  let genPassword = "";
 
  let allChars ="";

  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  if (allChars == "" || allChars.length == 0){
    return genPassword;
  };

  for(let i=1; i<=inputSlider.value; i++){
    genPassword += allChars.charAt(Math.floor(Math.random()* allChars.length));
  };

  return genPassword;  
}

copyIcon.addEventListener('click', ()=>{
  if(passBox.value != "" || passBox.value.length >= 1){
    navigator.clipboard.writeText(passBox.value);
  
    copyIcon.innerText = "check";
    copyIcon.title = "Password Copied";

    setTimeout( ()=> {
      copyIcon.innerHTML = "content_copy";
    },3000)
  }
})