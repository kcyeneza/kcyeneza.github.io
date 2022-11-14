function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);
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
    outputInt4= outputInt+outputInt2+outputInt3;
    output4.textContent = outputInt4;
}

const output = document.querySelector('.output');
let outputInt1 = parseInt(output.textContent);

const output2=document.querySelector('.output2');
let outputInt2=parseInt(output2.textContent);

const output3=document.querySelector('.output3');
let outputInt3= parseInt(output3.textContent);

const output4=document.querySelector('.output4');
let outputInt4= parseInt(output.textContent+output2.textContent+output3.textContent);



const noButton = document.querySelector('.no1-button').addEventListener('click', random1);
const submitButton = document.querySelector('.yes1-button').addEventListener('click', submit);
const no2Button = document.querySelector('.no2-button').addEventListener('click', random2);
const no3Button = document.querySelector('.no3-button').addEventListener('click', random3);
const yes4Button=document.querySelector('.yes4-button').addEventListener('click', complete);