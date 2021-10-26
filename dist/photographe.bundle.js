/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/lightbox.js":
/*!************************!*\
  !*** ./js/lightbox.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repository */ \"./js/repository.js\");\n/* eslint-disable eqeqeq */\n\n\nlet result = [];\nlet index = 0;\n\n// display position of media into medias Array\nasync function showSlides(media) {\n  index = result.findIndex((currentMedia) => currentMedia.id === media.id);\n  const nombreslide = document.querySelector('.numbertext');\n  nombreslide.innerText = `${index + 1}/${result.length}`;\n}\n\n// display media\nasync function showMedias(media) {\n  index = result.findIndex((currentMedia) => currentMedia.id === media.id);\n  const currentImage = document.querySelector('#currentSlideImg');\n  const currentVideo = document.querySelector('#currentSlideVideo');\n  const name = document.getElementsByClassName('photographe-name')[0].outerText;\n  const namesplit = name.split(' ')[0];\n  const containerVideo = document.querySelector('.lightbox-container-video');\n  const containerImage = document.querySelector('.lightbox-container-img');\n  const titreMedia = document.querySelector('.media-titre');\n  titreMedia.innerText = media.title;\n\n  if (media.video) {\n    currentVideo.alt = media.title;\n    currentImage.style.display = 'none';\n    currentVideo.style.display = 'block';\n    containerImage.style.display = 'none';\n    containerVideo.style.display = 'block';\n    if (namesplit == 'Ellie-Rose') {\n      const Ellie = namesplit.replace('-', '');\n      currentVideo.src = `./images/${Ellie}/${media.video}`;\n    } else {\n      currentVideo.src = `./images/${namesplit}/${media.video}`;\n    }\n  } else if (media.image) {\n    currentImage.alt = media.title;\n    currentVideo.style.display = 'none';\n    currentImage.style.display = 'block';\n    containerVideo.style.display = 'none';\n    containerImage.style.display = 'block';\n    if (namesplit == 'Ellie-Rose') {\n      const Ellie = namesplit.replace('-', '');\n      currentImage.src = `./images/${Ellie}/${media.image}`;\n    } else {\n      currentImage.src = `./images/${namesplit}/${media.image}`;\n    }\n  }\n}\n\nconst openLightbox = async (media) => {\n  result = await (0,_repository__WEBPACK_IMPORTED_MODULE_0__.getMediaByPhotographer)(media.photographerId);\n  const lightbox = document.querySelector('.lightbox');\n  const main = document.querySelector('.main');\n  const btn = document.querySelector('.close');\n  lightbox.setAttribute('aria-hidden', 'false');\n  lightbox.className = 'active lightbox';\n  if (lightbox.classList.contains('active')) {\n    main.classList.add('opacitydown');\n  } else {\n    main.classList.remove('opacitydown');\n  }\n  showSlides(media);\n  showMedias(media);\n  btn.focus();\n};\n\n/**\n *\n * @param {{\n  id:number,\n  photographerId: number,\n  title:string,\n  image:string,\n  tags:[],\n  likes:number,\n  price:number,\n  date:string\n  }} media\n */\n\n// close lightbox\nconst lightbox = document.querySelector('.lightbox');\nconst main = document.querySelector('.main');\nconst closebtn = document.querySelector('.close');\nclosebtn.addEventListener('click', () => {\n  lightbox.classList.remove('active');\n  lightbox.setAttribute('aria-hidden', 'true');\n  main.classList.remove('opacitydown');\n});\n\n/**\n * show media which is at position index2\n * @param {number} index2\n */\nfunction showMediaByIndex(index2) {\n  const media = result[index2];\n  showMedias(media);\n  showSlides(media);\n}\n\n// arrow previous media control\nconst prev = document.querySelector('.prev');\nprev.addEventListener('click', () => {\n  index -= 1;\n  if (index < 0) {\n    index = result.length - 1;\n  }\n  showMediaByIndex(index);\n});\n\n// arrow next media control\nconst next = document.querySelector('.next');\nnext.addEventListener('click', () => {\n  index += 1;\n  if (index == result.length) {\n    index = 0;\n  }\n  showMediaByIndex(index);\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openLightbox);\n\n\n//# sourceURL=webpack://fisheye/./js/lightbox.js?");

/***/ }),

/***/ "./js/mediaFactory.js":
/*!****************************!*\
  !*** ./js/mediaFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\n/* harmony import */ var _videoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoFactory */ \"./js/videoFactory.js\");\n/* harmony import */ var _photoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photoFactory */ \"./js/photoFactory.js\");\n\n\n\n// Create media according to his type\nclass MediaFactory {\n  constructor(type, data, handleLikeChange) {\n    switch (type) {\n      case 'photo':\n        return new _photoFactory__WEBPACK_IMPORTED_MODULE_1__.default(data, handleLikeChange);\n      case 'video':\n        return new _videoFactory__WEBPACK_IMPORTED_MODULE_0__.default(data, handleLikeChange);\n      default:\n        throw new Error('Entrez un parametre valide');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://fisheye/./js/mediaFactory.js?");

/***/ }),

/***/ "./js/model/photographe.js":
/*!*********************************!*\
  !*** ./js/model/photographe.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Photographe)\n/* harmony export */ });\nclass Photographe {\n  constructor({\n    name, city, country, tags, tagline, price, portrait,\n  }) {\n    this.name = name;\n    this.city = city;\n    this.country = country;\n    this.tags = tags;\n    this.tagline = tagline;\n    this.price = price;\n    this.portrait = portrait;\n\n    this.createPhotographe = () => new Photographe();\n\n    // update photographe page details infos\n    document.title = `Profil de ${this.name}`;\n    document.getElementsByClassName('photographe-name')[0].innerText = this.name;\n    document.getElementsByClassName(\n      'photographe-city',\n    )[0].innerText = `${this.city},${this.country}`;\n    document.getElementsByClassName(\n      'photographe-line',\n    )[0].innerText = this.tagline;\n    this.tags.forEach((tag) => {\n      const span = document.createElement('span');\n      span.className = 'tags';\n      span.innerText = `#${tag}`;\n      document.getElementsByClassName('photographe-tags-container')[0].appendChild(span);\n    });\n    document.getElementsByClassName(\n      'photographe-img',\n    )[0].src = `./images/PhotographersID/${this.portrait}`;\n    document.getElementsByClassName('prix')[0].innerText = `${price}€/jour`;\n    const formTitre = document.querySelector('.form-titre');\n    formTitre.innerHTML = `Contactez-moi<br/>${this.name}`;\n  }\n}\n\n\n//# sourceURL=webpack://fisheye/./js/model/photographe.js?");

/***/ }),

/***/ "./js/photoFactory.js":
/*!****************************!*\
  !*** ./js/photoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaPhoto)\n/* harmony export */ });\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox */ \"./js/lightbox.js\");\n/* eslint-disable eqeqeq */\r\n\r\n\r\nclass MediaPhoto {\r\n  constructor(data, handleLikeChange) {\r\n    this.content = this.photo(data, handleLikeChange);\r\n  }\r\n\r\n  // create photo article\r\n  photo(data, handleLikeChange) {\r\n    this.params = data;\r\n    this.media = document.createElement('article');\r\n    this.media.className = 'media';\r\n    const imgcontainer = document.createElement('a');\r\n    imgcontainer.className = 'img-container';\r\n    imgcontainer.href = '#';\r\n    const img = document.createElement('img');\r\n    const name = document.getElementsByClassName('photographe-name')[0].textContent;\r\n    console.log(document.getElementsByClassName('photographe-name'));\r\n    // ELie-Rose -> enlever le tirer\r\n    const namesplit = name.split(' ')[0];\r\n    if (namesplit == 'Ellie-Rose') {\r\n      const Ellie = namesplit.replace('-', '');\r\n      img.src = `./images/${Ellie}/${this.params.image}`;\r\n    } else {\r\n      img.src = `./images/${namesplit}/${this.params.image}`;\r\n    }\r\n    img.setAttribute('alt', this.params.title);\r\n    imgcontainer.addEventListener('click', () => { (0,_lightbox__WEBPACK_IMPORTED_MODULE_0__.default)(this.params); window.scrollTo(0, 0); });\r\n    const mediaInfo = document.createElement('a');\r\n    mediaInfo.href = '#';\r\n    mediaInfo.className = 'media-infos';\r\n    const titre = document.createElement('h4');\r\n    titre.innerHTML = this.params.title;\r\n    const like = document.createElement('span');\r\n    const datalike = document.createElement('span');\r\n    datalike.innerText = this.params.likes;\r\n    const coeurcontainer = document.createElement('a');\r\n    coeurcontainer.href = '#';\r\n    const coeur = document.createElement('i');\r\n    coeur.className = 'fas fa-heart';\r\n    coeurcontainer.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      this.params.likes += 1;\r\n      datalike.innerText = this.params.likes;\r\n      handleLikeChange();\r\n    });\r\n    coeurcontainer.appendChild(coeur);\r\n    like.appendChild(datalike);\r\n    like.appendChild(coeurcontainer);\r\n    imgcontainer.appendChild(img);\r\n    mediaInfo.appendChild(titre);\r\n    mediaInfo.appendChild(like);\r\n    this.media.appendChild(imgcontainer);\r\n    this.media.appendChild(mediaInfo);\r\n    return this.media;\r\n  }\r\n\r\n  getContent() {\r\n    return this.content;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/photoFactory.js?");

/***/ }),

/***/ "./js/photographe.js":
/*!***************************!*\
  !*** ./js/photographe.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mediaFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediaFactory */ \"./js/mediaFactory.js\");\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ \"./js/repository.js\");\n/* harmony import */ var _model_photographe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/photographe */ \"./js/model/photographe.js\");\n/* eslint-disable no-new */\r\n/* eslint-disable no-console */\r\n\r\n\r\n\r\n\r\nlet medias = [];\r\nlet totalLike = 0;\r\n\r\n// update totalLikes on click\r\nfunction handleLikeChange() {\r\n  totalLike += 1;\r\n  document.getElementsByClassName('total-like')[0].innerHTML = `${totalLike} <i class=\"fas fa-heart\"></i>`;\r\n}\r\n\r\n/**\r\n * @param {*} data;\r\n * @returns {HTMLElement}\r\n */\r\nfunction fabriqueMedia(data) {\r\n  const photo = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.default('photo', data, handleLikeChange);\r\n  return photo.getContent();\r\n}\r\n\r\nfunction fabriqueMediaVideo(data) {\r\n  const video = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.default('video', data, handleLikeChange);\r\n  return video.getContent();\r\n}\r\n\r\nfunction afficheMedias() {\r\n  const mediaSection = document.querySelector('.media-container');\r\n  mediaSection.innerHTML = '';\r\n  totalLike = medias.reduce((sommetotal, media) => sommetotal + media.likes, 0);\r\n  document.getElementsByClassName('total-like')[0].innerHTML = `${totalLike} <i class=\"fas fa-heart\"></i>`;\r\n  for (let i = 0; i < medias.length; i += 1) {\r\n    if ('image' in medias[i]) {\r\n      const article = fabriqueMedia(medias[i]);\r\n      fabriqueMedia(medias[i]);\r\n      mediaSection.appendChild(article);\r\n    } else if ('video' in medias[i]) {\r\n      const articleVideo = fabriqueMediaVideo(medias[i]);\r\n      fabriqueMediaVideo(medias[i]);\r\n      mediaSection.appendChild(articleVideo);\r\n    } else {\r\n      return;\r\n    }\r\n  }\r\n}\r\n\r\n// sort by like\r\nfunction triPopularite() {\r\n  const mediasGlobal = medias.sort((media1, media2) => media2.likes - media1.likes);\r\n  afficheMedias(mediasGlobal);\r\n}\r\n\r\nasync function affichage(id) {\r\n  const photographer = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getPhotographer)(id);\r\n  medias = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getMediaByPhotographer)(id);\r\n  new _model_photographe__WEBPACK_IMPORTED_MODULE_2__.default(photographer);\r\n  triPopularite();\r\n}\r\n\r\nfunction recupereId() {\r\n  const urlSearchParams = new URLSearchParams(window.location.search);\r\n  const params = Object.fromEntries(urlSearchParams.entries());\r\n  const { id } = params;\r\n  affichage(id);\r\n}\r\nrecupereId();\r\n\r\n/* filter medias */\r\nconst select = document.getElementById('select');\r\n\r\nfunction triDate() {\r\n  const mediasGlobal = medias.sort((media1, media2) => {\r\n    const date = new Date(media1.date);\r\n    const date2 = new Date(media2.date);\r\n    return date > date2 ? -1 : 1;\r\n  });\r\n  afficheMedias(mediasGlobal);\r\n}\r\n\r\n// sort by alphabetical\r\nfunction triTitre() {\r\n  const mediasGlobal = medias.sort((media1, media2) => media1.title.localeCompare(media2.title));\r\n  afficheMedias(mediasGlobal);\r\n}\r\n\r\nselect.addEventListener('change', (e) => {\r\n  switch (e.target.value) {\r\n    case 'Date':\r\n      triDate();\r\n      break;\r\n\r\n    case 'Popularité':\r\n      triPopularite();\r\n      break;\r\n\r\n    case 'Titre':\r\n      triTitre();\r\n      break;\r\n\r\n    default:\r\n      break;\r\n  }\r\n});\r\n\r\n/* Modal Contact */\r\n\r\nconst modal = document.getElementById('modal');\r\nconst btnOpenModal = document.getElementById('btn-openModal');\r\nconst croix = document.querySelector('.form-close');\r\nconst main = document.querySelector('.main');\r\nconst submitButton = document.getElementById('submit');\r\n\r\nbtnOpenModal.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  window.scrollTo(0, 0);\r\n  modal.style.display = 'block';\r\n  modal.setAttribute('aria-hidden', 'false');\r\n  main.classList.add('opacitydown');\r\n  croix.focus();\r\n});\r\n\r\nsubmitButton.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  modal.style.display = 'none';\r\n  modal.setAttribute('aria-hidden', 'true');\r\n  main.classList.remove('opacitydown');\r\n});\r\n\r\n// close modal\r\ncroix.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  modal.style.display = 'none';\r\n  modal.setAttribute('aria-hidden', 'true');\r\n  main.classList.remove('opacitydown');\r\n});\r\n\n\n//# sourceURL=webpack://fisheye/./js/photographe.js?");

/***/ }),

/***/ "./js/repository.js":
/*!**************************!*\
  !*** ./js/repository.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers),\n/* harmony export */   \"getMediaByPhotographer\": () => (/* binding */ getMediaByPhotographer),\n/* harmony export */   \"getPhotographer\": () => (/* binding */ getPhotographer)\n/* harmony export */ });\n/* harmony import */ var _model_photographe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/photographe */ \"./js/model/photographe.js\");\n/* eslint-disable no-console */\r\n/* eslint-disable eqeqeq */\r\n// eslint-disable-next-line import/named\r\n// eslint-disable-next-line no-unused-vars\r\n\r\n\r\n/**\r\n *\r\n * @returns {Promise|any}\r\n */\r\nasync function reader() {\r\n  try {\r\n    const response = await fetch('./js/data.json');\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    console.error(error);\r\n    return null;\r\n  }\r\n}\r\n\r\nconst getAll = async () => {\r\n  const data = await reader();\r\n  return data;\r\n};\r\nconst getPhotographers = async () => {\r\n  const data = await reader();\r\n  return data.photographers;\r\n};\r\nconst getMediaByPhotographer = async (id) => {\r\n  const data = await reader();\r\n  const medias = data.media.filter((item) => item.photographerId == id);\r\n  return medias;\r\n};\r\n\r\n/**\r\n * @param {number} id ,\r\n * @returns {Promise<Photographe>}\r\n */\r\nconst getPhotographer = async (id) => {\r\n  const data = await reader();\r\n  const photographe = data.photographers.find((user) => user.id == id);\r\n  return photographe;\r\n};\r\n\n\n//# sourceURL=webpack://fisheye/./js/repository.js?");

/***/ }),

/***/ "./js/videoFactory.js":
/*!****************************!*\
  !*** ./js/videoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaVideo)\n/* harmony export */ });\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox */ \"./js/lightbox.js\");\n/* eslint-disable eqeqeq */\n\n\nclass MediaVideo {\n  constructor(data, handleLikeChange) {\n    this.content = this.video(data, handleLikeChange);\n  }\n\n  // create video media\n  video(data, handleLikeChange) {\n    this.params = data;\n    const mediaVideo = document.createElement('article');\n    mediaVideo.className = 'media';\n    const videoContainer = document.createElement('div');\n    videoContainer.className = 'video-container';\n    const video = document.createElement('video');\n    const name = document.getElementsByClassName('photographe-name')[0].outerText;\n    // ELie-Rose -> enlever le tirer\n    const namesplit = name.split(' ')[0];\n    if (namesplit == 'Ellie-Rose') {\n      const Ellie = namesplit.replace('-', '');\n      video.src = `./images/${Ellie}/${this.params.video}`;\n    } else {\n      video.src = `./images/${namesplit}/${this.params.video}`;\n    }\n    video.setAttribute('alt', this.params.title);\n    const mediaInfo = document.createElement('div');\n    mediaInfo.className = 'media-infos';\n    const titre = document.createElement('h4');\n    titre.innerHTML = this.params.title;\n    const like = document.createElement('span');\n    const datalike = document.createElement('span');\n    datalike.innerText = this.params.likes;\n    const coeurcontainer = document.createElement('a');\n    coeurcontainer.href = '#';\n    const coeur = document.createElement('i');\n    coeur.className = 'fas fa-heart';\n    coeurcontainer.addEventListener('click', (e) => {\n      e.preventDefault();\n      this.params.likes += 1;\n      datalike.innerText = this.params.likes;\n      handleLikeChange();\n    });\n    coeurcontainer.appendChild(coeur);\n    like.appendChild(datalike);\n    like.appendChild(coeurcontainer);\n    video.addEventListener('click', () => { (0,_lightbox__WEBPACK_IMPORTED_MODULE_0__.default)(this.params); window.scrollTo(0, 0); });\n    video.setAttribute('controls', 'true');\n    videoContainer.appendChild(video);\n    mediaVideo.appendChild(videoContainer);\n    mediaInfo.appendChild(titre);\n    mediaInfo.appendChild(like);\n    mediaVideo.appendChild(mediaInfo);\n    return mediaVideo;\n  }\n\n  getContent() {\n    return this.content;\n  }\n}\n\n\n//# sourceURL=webpack://fisheye/./js/videoFactory.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/photographe.js");
/******/ 	
/******/ })()
;