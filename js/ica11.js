const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://v2.jokeapi.dev/joke/Any?safe-mode';

async function getQuote() {
    console.log('test click worked');
    let text = await fetch(endpoint);
    let response = await text.text();


    let json_response = JSON.parse(response);
    // console.log(json_response);
    console.log(json_response['joke']);

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

