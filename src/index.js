import GHIcon from './assets/images/github-mark-white.svg';
import ramen1 from './assets/images/ramen-1.jpg';
import ramen2 from './assets/images/ramen-2.jpg';
import createHome from './components/home';
import createMenu from './components/menu';
import createAbout from './components/about';

const main = (function() {
  createHome();

  const contentContainer = document.getElementById('content');
  const homeBtn = document.getElementById('home-btn');
  const menuBtn = document.getElementById('menu-btn');
  const aboutBtn = document.getElementById('about-btn');

  homeBtn.style = "background-color: salmon";

  homeBtn.addEventListener('click', (e) => {
    e.target.style = "background-color: salmon";
    menuBtn.style = "background-color: lightgray";
    aboutBtn.style = "background-color: lightgray";

    contentContainer.innerText = "";
    createHome();
  })

  menuBtn.addEventListener('click', (e) => {
    e.target.style = "background-color: salmon";
    homeBtn.style = "background-color: lightgray";
    aboutBtn.style = "background-color: lightgray";

    contentContainer.innerHTML = "";
    createMenu();
  })

  aboutBtn.addEventListener('click', (e) => {
    e.target.style = "background-color: salmon";
    homeBtn.style = "background-color: lightgray";
    menuBtn.style = "background-color: lightgray";

    contentContainer.innerHTML = "";
    createAbout();
  })
})();