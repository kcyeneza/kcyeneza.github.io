const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);
const emojiButton= document.querySelector('.emoji');
emojiButton.addEventListener('click', emojiDoer);



const endpoint = 'https://v2.jokeapi.dev/joke/Any?safe-mode';

function emojiDoer(){

        let pic = <img src="https://i.guim.co.uk/img/media/a1b7129c950433c9919f5670c92ef83aa1c682d9/55_344_1971_1183/master/1971.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=88ba2531f114b9b58b9cb2d8e723abe1" alt="HAHAHA"/>
                
    }

async function getQuote() {
    console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();


    let json_response = JSON.parse(response);
    // console.log(json_response);
    console.log(json_response["joke"]);

    // .then(text => text.text());
    // console.log(text('message'));
    displayQuote(json_response['joke']);
}

function displayQuote(x) {
    const quoteBox = document.querySelector('#js-quote-text');
    // console.log('display quote working');
    //const textMessage = document.createTextNode(x);

    //quoteBox.appendChild(textMessage);
    document.getElementById('js-quote-text').textContent = x;
}



//gets Quote on screen
getQuote();



