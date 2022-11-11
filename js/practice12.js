function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);
}


function random1() {
    outputInt1 = randomNumber(000, 999);
    output.textContent = outputInt1;
}

function random2() {
    outputInt2 = randomNumber(000, 999);
    output.textContent = outputInt2;
}

function random3() {
    outputInt3 = randomNumber(0000, 9999);
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



const noButton = document.querySelector('.no1-button').addEventListener('click', random1);
const submitButton = document.querySelector('.yes1-button').addEventListener('click', submit);
const no2Button = document.querySelector('.no2-button').addEventListener('click', random2);
const no3Button = document.querySelector('.no3-button').addEventListener('click', random3);