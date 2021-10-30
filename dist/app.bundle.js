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

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _articleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleFactory */ \"./js/articleFactory.js\");\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ \"./js/repository.js\");\n\r\n\r\n\r\n// create article\r\nfunction fabrique(data) {\r\n  const article = document.createElement('article');\r\n  article.className = 'article';\r\n  article.id = data.id;\r\n  const header = new _articleFactory__WEBPACK_IMPORTED_MODULE_0__.default('header', data);\r\n  const texte = new _articleFactory__WEBPACK_IMPORTED_MODULE_0__.default('text', data);\r\n  const link = new _articleFactory__WEBPACK_IMPORTED_MODULE_0__.default('link', data);\r\n  article.appendChild(header.getContent());\r\n  article.appendChild(texte.getContent());\r\n  article.appendChild(link.getContent());\r\n  return article;\r\n}\r\n\r\n// display json\r\nasync function affichage() {\r\n  const photographers = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getPhotographers)();\r\n  for (let i = 0; i < photographers.length; i += 1) {\r\n    const article = fabrique(photographers[i]);\r\n    const section = document.querySelector('.article-container');\r\n    section.appendChild(article);\r\n  }\r\n}\r\n\r\naffichage();\r\n\r\n/* Filter by tag */\r\n\r\nconst tag = document.querySelectorAll('.tag');\r\n\r\nasync function affichagefiltre(tagActuel) {\r\n  const photographers = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getPhotographers)();\r\n  const section = document.querySelector('.article-container');\r\n  section.innerHTML = '';\r\n  for (let i = 0; i < photographers.length; i += 1) {\r\n    const { tags } = photographers[i];\r\n    if (tags.includes(tagActuel)) {\r\n      const article = fabrique(photographers[i]);\r\n      section.appendChild(article);\r\n    }\r\n  }\r\n}\r\n\r\ntag.forEach((el) => {\r\n  el.addEventListener('click', (event) => {\r\n    const tagActuel = event.currentTarget.id;\r\n    affichagefiltre(tagActuel);\r\n  });\r\n});\r\n\r\n/* Discover element appear on scroll */\r\nconst discover = document.querySelector('.discover');\r\n\r\nwindow.addEventListener('scroll', (e) => {\r\n  e.preventDefault();\r\n  if ((window.scrollY >= 10)) {\r\n    discover.classList.add('visible');\r\n  } else if ((window.scrollY <= 10)) {\r\n    discover.classList.remove('visible');\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://fisheye/./js/app.js?");

/***/ }),

/***/ "./js/articleFactory.js":
/*!******************************!*\
  !*** ./js/articleFactory.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticleFactory)\n/* harmony export */ });\n/* harmony import */ var _articleHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleHeader */ \"./js/articleHeader.js\");\n/* harmony import */ var _articleText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleText */ \"./js/articleText.js\");\n/* harmony import */ var _articleLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleLink */ \"./js/articleLink.js\");\n\r\n\r\n\r\n\r\n// Create article factory with differents sub-article parts\r\nclass ArticleFactory {\r\n  constructor(type, data) {\r\n    switch (type) {\r\n      case 'header':\r\n        return new _articleHeader__WEBPACK_IMPORTED_MODULE_0__.default(data);\r\n      case 'text':\r\n        return new _articleText__WEBPACK_IMPORTED_MODULE_1__.default(data);\r\n      case 'link':\r\n        return new _articleLink__WEBPACK_IMPORTED_MODULE_2__.default(data);\r\n      default:\r\n        throw new Error('Entrez un parametre valide');\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/articleFactory.js?");

/***/ }),

/***/ "./js/articleHeader.js":
/*!*****************************!*\
  !*** ./js/articleHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticleHeader)\n/* harmony export */ });\nclass ArticleHeader {\r\n  constructor(data) {\r\n    this.content = this.header(data.portrait, data.name, data.id);\r\n  }\r\n\r\n  // create header ( image clickable ) of home article\r\n  header(nameImg, tag, id) {\r\n    this.articleHeader = document.createElement('div');\r\n    this.articleHeader.className = 'article-header';\r\n    const linkImg = document.createElement('a');\r\n    linkImg.className = 'img-container';\r\n    linkImg.href = `./photographe.html?id=${id}`;\r\n    const img = document.createElement('img');\r\n    img.src = `./images/PhotographersID/${nameImg}`;\r\n    img.alt = `Profil de ${tag}`;\r\n    linkImg.appendChild(img);\r\n    const titre = document.createElement('h4');\r\n    titre.innerText = tag;\r\n    this.articleHeader.appendChild(linkImg);\r\n    this.articleHeader.appendChild(titre);\r\n    return this.articleHeader;\r\n  }\r\n\r\n  getContent() {\r\n    return this.content;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/articleHeader.js?");

/***/ }),

/***/ "./js/articleLink.js":
/*!***************************!*\
  !*** ./js/articleLink.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticleLink)\n/* harmony export */ });\n// creation des tags d'un article photographe\r\nclass ArticleLink {\r\n  constructor(data) {\r\n    this.content = this.link(data.tags);\r\n  }\r\n\r\n  // create links of home article\r\n  link(tags) {\r\n    this.articleLink = document.createElement('div');\r\n    this.articleLink.className = 'article-link';\r\n    for (let i = 0; i < tags.length; i += 1) {\r\n      const link = document.createElement('span');\r\n      link.className = 'tags';\r\n      const href = document.createElement('a');\r\n      href.href = '#';\r\n      href.innerText = `#${tags[i]}`;\r\n      link.appendChild(href);\r\n      this.articleLink.appendChild(link);\r\n    }\r\n    return this.articleLink;\r\n  }\r\n\r\n  getContent() {\r\n    return this.content;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/articleLink.js?");

/***/ }),

/***/ "./js/articleText.js":
/*!***************************!*\
  !*** ./js/articleText.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticleText)\n/* harmony export */ });\n// creation des infos texte d'un article photographe\r\nclass ArticleText {\r\n  constructor(data) {\r\n    this.content = this.texte(data.city, data.country, data.tagline, data.price);\r\n  }\r\n\r\n  // create text of home article\r\n  texte(city, country, tagline, price) {\r\n    this.articleText = document.createElement('div');\r\n    this.articleText.className = 'article-texte';\r\n    const ville = document.createElement('p');\r\n    ville.innerText = `${city} , ${country}`;\r\n    const description = document.createElement('p');\r\n    description.innerText = tagline;\r\n    const prix = document.createElement('p');\r\n    prix.innerText = `${price}€/jour`;\r\n    this.articleText.appendChild(ville);\r\n    this.articleText.appendChild(description);\r\n    this.articleText.appendChild(prix);\r\n    return this.articleText;\r\n  }\r\n\r\n  getContent() {\r\n    return this.content;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/articleText.js?");

/***/ }),

/***/ "./js/model/photographe.js":
/*!*********************************!*\
  !*** ./js/model/photographe.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Photographe)\n/* harmony export */ });\nclass Photographe {\r\n  constructor({\r\n    name, city, country, tags, tagline, price, portrait,\r\n  }) {\r\n    this.name = name;\r\n    this.city = city;\r\n    this.country = country;\r\n    this.tags = tags;\r\n    this.tagline = tagline;\r\n    this.price = price;\r\n    this.portrait = portrait;\r\n\r\n    this.createPhotographe = () => new Photographe();\r\n\r\n    // update photographe page details infos\r\n    document.title = `Profil de ${this.name}`;\r\n    document.getElementsByClassName('photographe-name')[0].innerText = this.name;\r\n    document.getElementsByClassName(\r\n      'photographe-city',\r\n    )[0].innerText = `${this.city},${this.country}`;\r\n    document.getElementsByClassName(\r\n      'photographe-line',\r\n    )[0].innerText = this.tagline;\r\n    this.tags.forEach((tag) => {\r\n      const span = document.createElement('span');\r\n      span.className = 'tags';\r\n      span.innerText = `#${tag}`;\r\n      document.getElementsByClassName('photographe-tags-container')[0].appendChild(span);\r\n    });\r\n    document.getElementsByClassName(\r\n      'photographe-img',\r\n    )[0].src = `./images/PhotographersID/${this.portrait}`;\r\n    document.getElementsByClassName('prix')[0].innerText = `${price}€/jour`;\r\n    const formTitre = document.querySelector('.form-titre');\r\n    formTitre.innerHTML = `Contactez-moi<br/>${this.name}`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/model/photographe.js?");

/***/ }),

/***/ "./js/repository.js":
/*!**************************!*\
  !*** ./js/repository.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAll\": () => (/* binding */ getAll),\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers),\n/* harmony export */   \"getMediaByPhotographer\": () => (/* binding */ getMediaByPhotographer),\n/* harmony export */   \"getPhotographer\": () => (/* binding */ getPhotographer)\n/* harmony export */ });\n/* harmony import */ var _model_photographe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/photographe */ \"./js/model/photographe.js\");\n/* eslint-disable no-console */\r\n/* eslint-disable eqeqeq */\r\n// eslint-disable-next-line import/named\r\n// eslint-disable-next-line no-unused-vars\r\n\r\n\r\n/**\r\n *\r\n * @returns {Promise|any}\r\n */\r\nasync function reader() {\r\n  try {\r\n    const response = await fetch('./js/data.json');\r\n    const data = await response.json();\r\n    return data;\r\n  } catch (error) {\r\n    console.error(error);\r\n    return null;\r\n  }\r\n}\r\n\r\nconst getAll = async () => {\r\n  const data = await reader();\r\n  return data;\r\n};\r\nconst getPhotographers = async () => {\r\n  const data = await reader();\r\n  return data.photographers;\r\n};\r\nconst getMediaByPhotographer = async (id) => {\r\n  const data = await reader();\r\n  const medias = data.media.filter((item) => item.photographerId == id);\r\n  return medias;\r\n};\r\n\r\n/**\r\n * @param {number} id ,\r\n * @returns {Promise<Photographe>}\r\n */\r\nconst getPhotographer = async (id) => {\r\n  const data = await reader();\r\n  const photographe = data.photographers.find((user) => user.id == id);\r\n  return photographe;\r\n};\r\n\n\n//# sourceURL=webpack://fisheye/./js/repository.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/app.js");
/******/ 	
/******/ })()
;