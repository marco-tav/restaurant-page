/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAbout);


/***/ }),

/***/ "./src/components/home.js":
/*!********************************!*\
  !*** ./src/components/home.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenu() {
  const contentDiv = document.getElementById('content');
  
  const menuContainer = document.createElement('div');
  menuContainer.setAttribute('class', 'menu-container');

  const description = 'This is a great description of a great ramen than contains some great ingredients which is very descriptive and makes you want to eat ramen.';

  const nameArray = [
    'Tonkotsu', 
    'Tonkotsu Shoyu', 
    'Miso', 
    'Spicy Miso', 
    'Vegan', 
    'Spicy Vegan'
  ];

  for(let i=0; i<6; i++) {
    let menuItem = createMenuItem(nameArray[i], description);
    menuContainer.appendChild(menuItem);
  }

  contentDiv.appendChild(menuContainer);
}

function createMenuItem(name, description) {
  const menuItem = document.createElement('div');
  menuItem.setAttribute('class', 'menu-item');

  const imgPHolder = createImgPlaceholder();
  menuItem.appendChild(imgPHolder);

  const dishDescription = createDescription(name, description);
  menuItem.appendChild(dishDescription);

  return menuItem;
}

function createImgPlaceholder() {
  const imgPlaceholder = document.createElement('div');
  imgPlaceholder.setAttribute('class', 'img-placeholder');
  
  const placeholderPara = document.createElement('p');
  placeholderPara.innerText = 'placeholder';

  imgPlaceholder.appendChild(placeholderPara);

  return imgPlaceholder;
}

function createDescription(name, description) {
  const container = document.createElement('div');
  container.setAttribute('class', 'item-description');

  const dishName = document.createElement('h3');
  dishName.innerText = name;
  container.appendChild(dishName);

  const itemDescription = document.createElement('p');
  itemDescription.innerText = description;
  container.appendChild(itemDescription);

  return container;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

/***/ }),

/***/ "./src/assets/images/github-mark-white.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/github-mark-white.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97ed8e7eef60d61ca469.svg";

/***/ }),

/***/ "./src/assets/images/ramen-1.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/ramen-1.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a5b9fe6adcaf81f47aa.jpg";

/***/ }),

/***/ "./src/assets/images/ramen-2.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/ramen-2.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ab4ccbcbb49d1ca8bbb1.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_images_github_mark_white_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/github-mark-white.svg */ "./src/assets/images/github-mark-white.svg");
/* harmony import */ var _assets_images_ramen_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/ramen-1.jpg */ "./src/assets/images/ramen-1.jpg");
/* harmony import */ var _assets_images_ramen_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/ramen-2.jpg */ "./src/assets/images/ramen-2.jpg");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/menu */ "./src/components/menu.js");
/* harmony import */ var _components_about__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/about */ "./src/components/about.js");







(0,_components_home__WEBPACK_IMPORTED_MODULE_3__["default"])();

const main = (function() {
  const contentContainer = document.getElementById('content');
  const homeBtn = document.getElementById('home-btn');
  const menuBtn = document.getElementById('menu-btn');
  const aboutBtn = document.getElementById('about-btn');

  homeBtn.addEventListener('click', (e) => {
    contentContainer.innerText = "";
    (0,_components_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
  })

  menuBtn.addEventListener('click', (e) => {
    contentContainer.innerHTML = "";
    (0,_components_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
  })

  aboutBtn.addEventListener('click', (e) => {
    contentContainer.innerHTML = "";
    (0,_components_about__WEBPACK_IMPORTED_MODULE_5__["default"])();
  })
})();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ25FekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWUsS0FBSztBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqRXpCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCMkQ7QUFDVjtBQUNBO0FBQ047QUFDQTtBQUNFOztBQUU3Qyw0REFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDREQUFVO0FBQ2QsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSw0REFBVTtBQUNkLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksNkRBQVc7QUFDZixHQUFHO0FBQ0gsQ0FBQyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQWJvdXQoKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IGFib3V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGFib3V0Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWJvdXQtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgYWJvdXRIZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRIZWFkZXIpO1xuXG4gIGNvbnN0IGZpcnN0UGFyYVRleHQgPSBcIkEgbWFkZS11cCBzdG9yeSBhYm91dCB0aGUgcmFtZW4gb2YgYSBncm91cCBvZiBwZW9wbGUgdGhhdCBnZW51aW5lbHkgZG9lc24ndCBjYXJlIGFib3V0IGFueXRoaW5nIGVsc2Ugb3RoZXIgdGhlbiBtYWtpbmcgdGhlIHBlcmZlY3QgcmFtZW4gdG8gbWFrZSByYW1lbiBmYW5zIGhhcHB5LiBBIHN0b3J5IGFib3V0IGVmZm9ydCBhbmQgYWJvdXQgc3RyaXZpbmcgZm9yIHBlcmZlY3Rpb24gdGhyb3VnaCBleHBlcmltZW50YXRpb24gYW5kIGl0ZXJhdGlvbi5cIjtcblxuICBjb25zdCBzZWNvbmRQYXJhVGV4dCA9IFwiSSBkaWRuJ3Qga25vdyB3aGF0IHRvIHdyaXRlIGhlcmUgc28gbG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEhhcnVtIGVvcyBpdGFxdWUgbWludXMgbWluaW1hIG9tbmlzIGV0IGZ1Z2l0IG5pc2kgbWFnbmkgdmVybyB2aXRhZSwgcmVwcmVoZW5kZXJpdCBzYWVwZSB2ZXJpdGF0aXMgY29ycG9yaXMgbmVtbyBpbGxvIGZhY2VyZSBhbWV0IG51bXF1YW0gbW9kaS5cIjtcblxuICBjb25zdCB0aGlyZFBhcmFUZXh0ID0gXCJBbHNvLCB0aGlzIGlzIGEgcHJvamVjdCBmcm9tIFRoZSBPZGluIFByb2plY3QncyBjb3JyaWN1bHVtLCBzcGVjaWZpY2FsbHkgb25lIGFib3V0IEVTNiBNb2R1bGVzIGFuZCB3ZWJwYWNrLiBJIHJlYWxseSBkbyBsb3ZlIHJhbWVuLCB0aG91Z2gsIGFuZCB3b3VsZCBsb3ZlIHRvIHJ1biBhIHJhbWVuIHNob3Agb25lIGRheS5cIjtcblxuICBjb25zdCBmaXJzdFBhcmEgPSBtYWtlUGFyYShmaXJzdFBhcmFUZXh0KTtcbiAgY29uc3Qgc2Vjb25kUGFyYSA9IG1ha2VQYXJhKHNlY29uZFBhcmFUZXh0KTtcbiAgY29uc3QgdGhpcmRQYXJhID0gbWFrZVBhcmEodGhpcmRQYXJhVGV4dCk7XG5cbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZmlyc3RQYXJhKTtcbiAgYWJvdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kUGFyYSk7XG4gIGFib3V0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXJkUGFyYSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dENvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQtaGVhZGVyJyk7XG4gIGhlYWRlci5pbm5lclRleHQgPSAnT3VyIFN0b3J5JztcblxuICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBtYWtlUGFyYSh0ZXh0KSB7XG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBhcmEuaW5uZXJUZXh0ID0gdGV4dDtcblxuICByZXR1cm4gcGFyYTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXQ7XG4iLCJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGNvbnN0IHRleHREaXYgPSBjcmVhdGVUZXh0RGl2KCk7XG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQodGV4dERpdik7XG4gIFxuICBjb25zdCBzbGlkZXMgPSBjcmVhdGVTbGlkZUNvbnRhaW5lcigpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHNsaWRlcyk7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlVGV4dERpdigpIHtcbiAgY29uc3QgdGV4dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0ZXh0RGl2LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGV4dCcpO1xuXG4gIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgaDIuaW5uZXJUZXh0ID0gXCJXZWxjb21lIVwiO1xuICB0ZXh0RGl2LmFwcGVuZENoaWxkKGgyKTtcblxuICBjb25zdCBmaXJzdFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGZpcnN0UGFyYS5pbm5lclRleHQgPSBcIkF0IE1hcmNvJ3MgUmFtZW4gd2UnbGwgbWFrZSBzdXJlIHlvdSBoYXZlIHRoZSBiZXN0IHJhbWVuIGV4cGVyaWVuY2UgeW91IGNhbiBoYXZlIGJ5IGNob29zaW5nIHRoZSBiZXN0IGFuZCBtb3N0IGF1dGhlbnRpYyBpbmdyZWRpZW50cyBhbmQgd2l0aCB0aGUgaGVscCBvZiB0aGUgYmVzdCByYW1lbiBjaGVmcy5cIjtcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChmaXJzdFBhcmEpO1xuXG4gIGNvbnN0IHNlY29uZFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHNlY29uZFBhcmEuaW5uZXJUZXh0ID0gXCJVc2Ugb25lIG9mIG91ciBjb250YWN0IG1ldGhvZHMgdG8gbWFrZSBhIHJlc2VydmF0aW9uIGFuZCBoYXZlIGEgbmljZSBldmVuaW5nIHdpdGggYSBob3QgcGxhdGUgb2YgeW91ciBwcmVmZXJyZWQgcmFtZW4hXCI7XG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoc2Vjb25kUGFyYSk7XG5cbiAgcmV0dXJuIHRleHREaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlQ29udGFpbmVyKCkge1xuICBjb25zdCBzbGlkZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2xpZGVzQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2xpZGVzLWNvbnRhaW5lcicpO1xuXG4gIGNvbnN0IGZpcnN0U2xpZGUgPSBjcmVhdGVTbGlkZSgnVGhlIGJlc3QgcmFtZW4gc3BlY2lhbGlzdHMnKTtcbiAgc2xpZGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGZpcnN0U2xpZGUpO1xuXG4gIGNvbnN0IHNlY29uZFNsaWRlID0gY3JlYXRlU2xpZGUoJ0F1dGhlbnRpYywgaGlnaCBxdWFsaXR5IGluZ3JlZGllbnRzJyk7XG4gIHNsaWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRTbGlkZSk7XG5cbiAgY29uc3QgdGhpcmRTbGlkZSA9IGNyZWF0ZVNsaWRlKCdBbiBpbnZpdGluZyBhdG1vc3BoZXJlJyk7XG4gIHNsaWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlyZFNsaWRlKTtcblxuICByZXR1cm4gc2xpZGVzQ29udGFpbmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZSh0ZXh0Q29udGVudCkge1xuICBjb25zdCBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzbGlkZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlJyk7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ltZy1wbGFjZWhvbGRlcicpO1xuXG4gIGNvbnN0IHBsYWNlaG9sZGVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGxhY2Vob2xkZXJQYXJhLmlubmVyVGV4dCA9ICdwbGFjZWhvbGRlcic7XG4gIGltZy5hcHBlbmRDaGlsZChwbGFjZWhvbGRlclBhcmEpO1xuXG4gIHNsaWRlLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGV4dC5pbm5lclRleHQgPSB0ZXh0Q29udGVudDtcbiAgc2xpZGUuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgcmV0dXJuIHNsaWRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1jb250YWluZXInKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9ICdUaGlzIGlzIGEgZ3JlYXQgZGVzY3JpcHRpb24gb2YgYSBncmVhdCByYW1lbiB0aGFuIGNvbnRhaW5zIHNvbWUgZ3JlYXQgaW5ncmVkaWVudHMgd2hpY2ggaXMgdmVyeSBkZXNjcmlwdGl2ZSBhbmQgbWFrZXMgeW91IHdhbnQgdG8gZWF0IHJhbWVuLic7XG5cbiAgY29uc3QgbmFtZUFycmF5ID0gW1xuICAgICdUb25rb3RzdScsIFxuICAgICdUb25rb3RzdSBTaG95dScsIFxuICAgICdNaXNvJywgXG4gICAgJ1NwaWN5IE1pc28nLCBcbiAgICAnVmVnYW4nLCBcbiAgICAnU3BpY3kgVmVnYW4nXG4gIF07XG5cbiAgZm9yKGxldCBpPTA7IGk8NjsgaSsrKSB7XG4gICAgbGV0IG1lbnVJdGVtID0gY3JlYXRlTWVudUl0ZW0obmFtZUFycmF5W2ldLCBkZXNjcmlwdGlvbik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSk7XG4gIH1cblxuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51SXRlbShuYW1lLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtZW51SXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtaXRlbScpO1xuXG4gIGNvbnN0IGltZ1BIb2xkZXIgPSBjcmVhdGVJbWdQbGFjZWhvbGRlcigpO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChpbWdQSG9sZGVyKTtcblxuICBjb25zdCBkaXNoRGVzY3JpcHRpb24gPSBjcmVhdGVEZXNjcmlwdGlvbihuYW1lLCBkZXNjcmlwdGlvbik7XG4gIG1lbnVJdGVtLmFwcGVuZENoaWxkKGRpc2hEZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVJbWdQbGFjZWhvbGRlcigpIHtcbiAgY29uc3QgaW1nUGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW1nUGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbWctcGxhY2Vob2xkZXInKTtcbiAgXG4gIGNvbnN0IHBsYWNlaG9sZGVyUGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcGxhY2Vob2xkZXJQYXJhLmlubmVyVGV4dCA9ICdwbGFjZWhvbGRlcic7XG5cbiAgaW1nUGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJQYXJhKTtcblxuICByZXR1cm4gaW1nUGxhY2Vob2xkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKG5hbWUsIGRlc2NyaXB0aW9uKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpdGVtLWRlc2NyaXB0aW9uJyk7XG5cbiAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBkaXNoTmFtZS5pbm5lclRleHQgPSBuYW1lO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGlzaE5hbWUpO1xuXG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgaXRlbURlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRlc2NyaXB0aW9uO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbURlc2NyaXB0aW9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgR0hJY29uIGZyb20gJy4vYXNzZXRzL2ltYWdlcy9naXRodWItbWFyay13aGl0ZS5zdmcnO1xuaW1wb3J0IHJhbWVuMSBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvcmFtZW4tMS5qcGcnO1xuaW1wb3J0IHJhbWVuMiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvcmFtZW4tMi5qcGcnO1xuaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9jb21wb25lbnRzL2hvbWUnO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSAnLi9jb21wb25lbnRzL21lbnUnO1xuaW1wb3J0IGNyZWF0ZUFib3V0IGZyb20gJy4vY29tcG9uZW50cy9hYm91dCc7XG5cbmNyZWF0ZUhvbWUoKTtcblxuY29uc3QgbWFpbiA9IChmdW5jdGlvbigpIHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZS1idG4nKTtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LWJ0bicpO1xuICBjb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dC1idG4nKTtcblxuICBob21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb250ZW50Q29udGFpbmVyLmlubmVyVGV4dCA9IFwiXCI7XG4gICAgY3JlYXRlSG9tZSgpO1xuICB9KVxuXG4gIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjcmVhdGVNZW51KCk7XG4gIH0pXG5cbiAgYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBjcmVhdGVBYm91dCgpO1xuICB9KVxufSkoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=