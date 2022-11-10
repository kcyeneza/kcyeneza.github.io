function check() {
    console.log('test');
}

function submit1() {
    alert("Move onto step two.");
}

function random1() {
    outputInt = randomNumber(0, 999);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);



const noButton = document.querySelector('.no-button').addEventListener('click', random1);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit1);
