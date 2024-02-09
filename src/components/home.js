
function createHome() {
  const contentDiv = document.getElementById('content');

  const textDiv = createTextDiv();
  contentDiv.appendChild(textDiv);
  
  const slides = createSlideContainer();
  contentDiv.appendChild(slides);
}


function createTextDiv() {
  const textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'text');

  const h2 = document.createElement('h2');
  h2.innerText = "Welcome!";
  textDiv.appendChild(h2);

  const firstPara = document.createElement('p');
  firstPara.innerText = "At Marco's Ramen we'll make sure you have the best ramen experience you can have by choosing the best and most authentic ingredients and with the help of the best ramen chefs.";
  textDiv.appendChild(firstPara);

  const secondPara = document.createElement('p');
  secondPara.innerText = "Use one of our contact methods to make a reservation and have a nice evening with a hot plate of your preferred ramen!";
  textDiv.appendChild(secondPara);

  return textDiv;
}

function createSlideContainer() {
  const slidesContainer = document.createElement('div');
  slidesContainer.setAttribute('class', 'slides-container');

  const firstSlide = createSlide('The best ramen specialists');
  slidesContainer.appendChild(firstSlide);

  const secondSlide = createSlide('Authentic, high quality ingredients');
  slidesContainer.appendChild(secondSlide);

  const thirdSlide = createSlide('An inviting atmosphere');
  slidesContainer.appendChild(thirdSlide);

  return slidesContainer;
}

function createSlide(textContent) {
  const slide = document.createElement('div');
  slide.setAttribute('class', 'slide');

  const img = document.createElement('div');
  img.setAttribute('class', 'img-placeholder');

  const placeholderPara = document.createElement('p');
  placeholderPara.innerText = 'placeholder';
  img.appendChild(placeholderPara);

  slide.appendChild(img);

  const text = document.createElement('p');
  text.innerText = textContent;
  slide.appendChild(text);

  return slide;
}

export default createHome;