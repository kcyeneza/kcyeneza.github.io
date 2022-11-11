function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}


function random1() {
    outputInt = randomNumber(000, 999);
    output.textContent = outputInt;
}

function random2() {
    outputInt = randomNumber(000, 999);
    output.textContent = outputInt2;
}

function random3() {
    outputInt = randomNumber(0000, 9999);
    output.textContent = outputInt3;
}


function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }



const output = document.querySelector('.output');
let outputInt1 = parseInt(output.textContent);
let outputInt2 = parseInt(output.textContent);
let outputInt3 = parseInt(output.textContent);
console.log(outputInt);



const noButton = document.querySelector('.no1-button').addEventListener('click', random1);
const submitButton = document.querySelector('.yes1-button').addEventListener('click', submit);
const no2Button = document.querySelector('.no2-button').addEventListener('click', random2);
const no3Button = document.querySelector('.no3-button').addEventListener('click', random3);