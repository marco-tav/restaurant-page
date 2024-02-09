function createAbout() {
  const content = document.getElementById('content');

  const aboutContainer = document.createElement('div');
  aboutContainer.setAttribute('class', 'about-container');

  const aboutHeader = createHeader();
  aboutContainer.appendChild(aboutHeader);

  const firstParaText = "A made-up story about the ramen of a group of people that genuinely doesn't care about anything else other then making the perfect ramen to make ramen fans happy. A story about effort and about striving for perfection through experimentation and iteration.";

  const secondParaText = "I didn't know what to write here so lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum eos itaque minus minima omnis et fugit nisi magni vero vitae, reprehenderit saepe veritatis corporis nemo illo facere amet numquam modi.";

  const thirdParaText = "Also, this is a project from The Odin Project's corriculum, specifically one about ES6 Modules and webpack. I really do love ramen, though, and would love to run a ramen shop one day.";

  const firstPara = makePara(firstParaText);
  const secondPara = makePara(secondParaText);
  const thirdPara = makePara(thirdParaText);

  aboutContainer.appendChild(firstPara);
  aboutContainer.appendChild(secondPara);
  aboutContainer.appendChild(thirdPara);

  content.appendChild(aboutContainer);
}

function createHeader() {
  const header = document.createElement('h2');
  header.setAttribute('id', 'about-header');
  header.innerText = 'Our Story';

  return header;
}

function makePara(text) {
  const para = document.createElement('p');
  para.innerText = text;

  return para;
}

export default createAbout;
