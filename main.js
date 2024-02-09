/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDbkV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSxLQUFLO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFekI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQjJEO0FBQ1Y7QUFDQTtBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBjb25zdCB0ZXh0RGl2ID0gY3JlYXRlVGV4dERpdigpO1xuICBjb250ZW50RGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuICBcbiAgY29uc3Qgc2xpZGVzID0gY3JlYXRlU2xpZGVDb250YWluZXIoKTtcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChzbGlkZXMpO1xufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHREaXYoKSB7XG4gIGNvbnN0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGV4dERpdi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RleHQnKTtcblxuICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGgyLmlubmVyVGV4dCA9IFwiV2VsY29tZSFcIjtcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChoMik7XG5cbiAgY29uc3QgZmlyc3RQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBmaXJzdFBhcmEuaW5uZXJUZXh0ID0gXCJBdCBNYXJjbydzIFJhbWVuIHdlJ2xsIG1ha2Ugc3VyZSB5b3UgaGF2ZSB0aGUgYmVzdCByYW1lbiBleHBlcmllbmNlIHlvdSBjYW4gaGF2ZSBieSBjaG9vc2luZyB0aGUgYmVzdCBhbmQgbW9zdCBhdXRoZW50aWMgaW5ncmVkaWVudHMgYW5kIHdpdGggdGhlIGhlbHAgb2YgdGhlIGJlc3QgcmFtZW4gY2hlZnMuXCI7XG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoZmlyc3RQYXJhKTtcblxuICBjb25zdCBzZWNvbmRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzZWNvbmRQYXJhLmlubmVyVGV4dCA9IFwiVXNlIG9uZSBvZiBvdXIgY29udGFjdCBtZXRob2RzIHRvIG1ha2UgYSByZXNlcnZhdGlvbiBhbmQgaGF2ZSBhIG5pY2UgZXZlbmluZyB3aXRoIGEgaG90IHBsYXRlIG9mIHlvdXIgcHJlZmVycmVkIHJhbWVuIVwiO1xuICB0ZXh0RGl2LmFwcGVuZENoaWxkKHNlY29uZFBhcmEpO1xuXG4gIHJldHVybiB0ZXh0RGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZUNvbnRhaW5lcigpIHtcbiAgY29uc3Qgc2xpZGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNsaWRlc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlcy1jb250YWluZXInKTtcblxuICBjb25zdCBmaXJzdFNsaWRlID0gY3JlYXRlU2xpZGUoJ1RoZSBiZXN0IHJhbWVuIHNwZWNpYWxpc3RzJyk7XG4gIHNsaWRlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmaXJzdFNsaWRlKTtcblxuICBjb25zdCBzZWNvbmRTbGlkZSA9IGNyZWF0ZVNsaWRlKCdBdXRoZW50aWMsIGhpZ2ggcXVhbGl0eSBpbmdyZWRpZW50cycpO1xuICBzbGlkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kU2xpZGUpO1xuXG4gIGNvbnN0IHRoaXJkU2xpZGUgPSBjcmVhdGVTbGlkZSgnQW4gaW52aXRpbmcgYXRtb3NwaGVyZScpO1xuICBzbGlkZXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcmRTbGlkZSk7XG5cbiAgcmV0dXJuIHNsaWRlc0NvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU2xpZGUodGV4dENvbnRlbnQpIHtcbiAgY29uc3Qgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2xpZGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzbGlkZScpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbWcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdpbWctcGxhY2Vob2xkZXInKTtcblxuICBjb25zdCBwbGFjZWhvbGRlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBsYWNlaG9sZGVyUGFyYS5pbm5lclRleHQgPSAncGxhY2Vob2xkZXInO1xuICBpbWcuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJQYXJhKTtcblxuICBzbGlkZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRleHQuaW5uZXJUZXh0ID0gdGV4dENvbnRlbnQ7XG4gIHNsaWRlLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIHJldHVybiBzbGlkZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTsiLCJmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSAnVGhpcyBpcyBhIGdyZWF0IGRlc2NyaXB0aW9uIG9mIGEgZ3JlYXQgcmFtZW4gdGhhbiBjb250YWlucyBzb21lIGdyZWF0IGluZ3JlZGllbnRzIHdoaWNoIGlzIHZlcnkgZGVzY3JpcHRpdmUgYW5kIG1ha2VzIHlvdSB3YW50IHRvIGVhdCByYW1lbi4nO1xuXG4gIGNvbnN0IG5hbWVBcnJheSA9IFtcbiAgICAnVG9ua290c3UnLCBcbiAgICAnVG9ua290c3UgU2hveXUnLCBcbiAgICAnTWlzbycsIFxuICAgICdTcGljeSBNaXNvJywgXG4gICAgJ1ZlZ2FuJywgXG4gICAgJ1NwaWN5IFZlZ2FuJ1xuICBdO1xuXG4gIGZvcihsZXQgaT0wOyBpPDY7IGkrKykge1xuICAgIGxldCBtZW51SXRlbSA9IGNyZWF0ZU1lbnVJdGVtKG5hbWVBcnJheVtpXSwgZGVzY3JpcHRpb24pO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB9XG5cbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51Q29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbWVudUl0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdtZW51LWl0ZW0nKTtcblxuICBjb25zdCBpbWdQSG9sZGVyID0gY3JlYXRlSW1nUGxhY2Vob2xkZXIoKTtcbiAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaW1nUEhvbGRlcik7XG5cbiAgY29uc3QgZGlzaERlc2NyaXB0aW9uID0gY3JlYXRlRGVzY3JpcHRpb24obmFtZSwgZGVzY3JpcHRpb24pO1xuICBtZW51SXRlbS5hcHBlbmRDaGlsZChkaXNoRGVzY3JpcHRpb24pO1xuXG4gIHJldHVybiBtZW51SXRlbTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlSW1nUGxhY2Vob2xkZXIoKSB7XG4gIGNvbnN0IGltZ1BsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGltZ1BsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaW1nLXBsYWNlaG9sZGVyJyk7XG4gIFxuICBjb25zdCBwbGFjZWhvbGRlclBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHBsYWNlaG9sZGVyUGFyYS5pbm5lclRleHQgPSAncGxhY2Vob2xkZXInO1xuXG4gIGltZ1BsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyUGFyYSk7XG5cbiAgcmV0dXJuIGltZ1BsYWNlaG9sZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEZXNjcmlwdGlvbihuYW1lLCBkZXNjcmlwdGlvbikge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS1kZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IGRpc2hOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgZGlzaE5hbWUuaW5uZXJUZXh0ID0gbmFtZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpc2hOYW1lKTtcblxuICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGl0ZW1EZXNjcmlwdGlvbi5pbm5lclRleHQgPSBkZXNjcmlwdGlvbjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IEdISWNvbiBmcm9tICcuL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLW1hcmstd2hpdGUuc3ZnJztcbmltcG9ydCByYW1lbjEgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3JhbWVuLTEuanBnJztcbmltcG9ydCByYW1lbjIgZnJvbSAnLi9hc3NldHMvaW1hZ2VzL3JhbWVuLTIuanBnJztcbmltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vY29tcG9uZW50cy9ob21lJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vY29tcG9uZW50cy9tZW51JzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=