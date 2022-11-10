/*const button = document.querySelector('.button');
const output = document.querySelector('.output');
let phone_content = document.querySelector('.phone');

button.addEventListener('click', updateOutput);

button.addEventListener('click', updateOutput);

function updateOutput() {
    output.textContent = phone_content.value;
}*/


function check(){
    console.log('test');

}

function submit(){
    alert(output.textContent);

}

function reset(){
    
    
    outputInt=0;
    output.randomNumber.textConent =outputInt;

}


function randomstuff(){

    outputInt=randomNumber(0,999999999);
    output.textContent=outputInt;
}

function randomNumber(min,max){
    const num=  Math.floor(Math.random()* (max-mix +1))+min;
    return num;
    
}

const yesButton= document.querySelector('.yes-button').addEventListener('click', check);
const noButton= document.querySelector('.no-button').addEventListener('click', reset);

const output = document.querySelector('.output');
let outputInt= parseInt(output.textContent);
console.log(outputInt);