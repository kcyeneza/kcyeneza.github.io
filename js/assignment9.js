const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const img = ['genderrevealbird.jpg', `sideways_hat.jpg`, `squirrels.jpg`, `thneedsgiving.jpg`, `uglyshoes.jpg`];
const alts = {
  'genderrevealbird.jpg' : 'Gender Reveal Bird',
  'sideways_hat.jpg' : 'What cool kids wear nowadays',
  'squirrels.jpg' : 'Fifth Base',
  'thneedsgiving.jpg' : 'Wash your hands for 20 seconds',
  'uglyshoes.jpg' : "Shoes don't look like this."
}

/* Looping through images */

for (const image of img) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `/img/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});