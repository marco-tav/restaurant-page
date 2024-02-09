import GHIcon from './assets/images/github-mark-white.svg';
import ramen1 from './assets/images/ramen-1.jpg';
import ramen2 from './assets/images/ramen-2.jpg';
import createHome from './components/home';
import createMenu from './components/menu';
import createAbout from './components/about';

createHome();

const main = (function() {
  const contentContainer = document.getElementById('content');
  const homeBtn = document.getElementById('home-btn');
  const menuBtn = document.getElementById('menu-btn');
  const aboutBtn = document.getElementById('about-btn');

  homeBtn.addEventListener('click', (e) => {
    contentContainer.innerText = "";
    createHome();
  })

  menuBtn.addEventListener('click', (e) => {
    contentContainer.innerHTML = "";
    createMenu();
  })

  aboutBtn.addEventListener('click', (e) => {
    contentContainer.innerHTML = "";
    createAbout();
  })
})();