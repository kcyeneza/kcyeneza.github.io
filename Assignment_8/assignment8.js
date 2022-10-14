const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let insertX = ["Columbus","Yolanda","the Minister of Spring"];
let insertY= ["Petco", "the Pueblo Penguin Exhibit", "a warehouse with lots of randos and super bright lights"];
let insertZ= ["morphed into a really pretty butterfly","realized it wasn't about the journey, but the friends they made along the way", "learned how to make a really, REALLY good souffle"];
let storyText= "It was 94 fahrenheit outside, so :insertx: waved themself with a popsicle stick. When they got to :inserty: they believed in themselves, then :insertz:. Bob saw the whole thing, but fell more in love — :insertx: weighs 300 pounds, and they went home and told their mom about it.";

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;
    var xItem= randomValueFromArray(insertX);
    var yItem= randomValueFromArray(insertY);
    var zItem= randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory= newStory.replace("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+ " stone";
    const temperature =  Math.round(94-32*(5/9))+" centrigade";
    newStory= newStory.replace("weighs 300 pounds", weight);
    newStory= newStory.replace("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
