

function submit1() {
    alert(output.textContent+" YOU'VE CORRECTLY INPUT YOUR AREA CODE!");
}

function submit2() {
    alert(output2.textContent+" NOW YOU HAVE YOUR SECOND SET OF DIGITS.");
}

function submit3() {
    alert(output3.textContent+" ALMOST THERE!");
}
function submit4() {
    alert(output4.textContent+"CONGRATS, THE GOVERNMENT HAS YOUR PHONE NUMBER!");
}

function random1() {
    outputInt1 = randomNumber(100, 999);
    output.textContent = outputInt1;
}

function random2() {
    outputInt2 = randomNumber(100, 999);
    output2.textContent = outputInt2;
}

function random3() {
    outputInt3 = randomNumber(1000, 9999);
    output3.textContent = outputInt3;
}


function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }


function complete(){
    outputInt4= output.textContent+output2.textContent+output3.textContent;
    output4.textContent = outputInt4;
}

const output = document.querySelector('.output');
let outputInt1 = parseInt(output.textContent);

const output2=document.querySelector('.output2');
let outputInt2=parseInt(output2.textContent);

const output3=document.querySelector('.output3');
let outputInt3= parseInt(output3.textContent);

const output4=document.querySelector('.output4');
let outputInt4= parseInt(output4.textContent);



const noButton = document.querySelector('.no1-button').addEventListener('click', random1);
const no2Button = document.querySelector('.no2-button').addEventListener('click', random2);
const no3Button = document.querySelector('.no3-button').addEventListener('click', random3);
const yes4Button=document.querySelector('.yes4-button').addEventListener('click', complete);
const submitButton1 = document.querySelector('.yes1-button').addEventListener('click', submit1);
const submitButton2 = document.querySelector('.yes2-button').addEventListener('click', submit2);
const submitButton3 = document.querySelector('.yes3-button').addEventListener('click', submit3);
const submitButton4 = document.querySelector('.yes4-button').addEventListener('click', submit4);