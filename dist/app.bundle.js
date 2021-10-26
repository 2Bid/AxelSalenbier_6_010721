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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticleFactory)\n/* harmony export */ });\n/* harmony import */ var _articleHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleHeader */ \"./js/articleHeader.js\");\n/* harmony import */ var _articleText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articleText */ \"./js/articleText.js\");\n/* harmony import */ var _articleLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleLink */ \"./js/articleLink.js\");\n\n\n\n\n// Create article factory with differents sub-article parts\nclass ArticleFactory {\n  constructor(type, data) {\n    switch (type) {\n      case 'header':\n        return new _articleHeader__WEBPACK_IMPORTED_MODULE_0__.default(data);\n      case 'text':\n        return new _articleText__WEBPACK_IMPORTED_MODULE_1__.default(data);\n      case 'link':\n        return new _articleLink__WEBPACK_IMPORTED_MODULE_2__.default(data);\n      default:\n        throw new Error('Entrez un parametre valide');\n    }\n  }\n}\n\n\n//# sourceURL=webpack://fisheye/./js/articleFactory.js?");

/***/ }),

/***/ "./js/articleHeader.js":
/*!*****************************!*\
  !*** ./js/articleHeader.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticleHeader)\n/* harmony export */ });\nclass ArticleHeader {\n  constructor(data) {\n    this.content = this.header(data.portrait, data.name, data.id);\n  }\n\n  // create header ( image clickable ) of home article\n  header(nameImg, tag, id) {\n    this.articleHeader = document.createElement('div');\n    this.articleHeader.className = 'article-header';\n    const linkImg = document.createElement('a');\n    linkImg.className = 'img-container';\n    linkImg.href = `./photographe.html?id=${id}`;\n    const img = document.createElement('img');\n    img.src = `./images/PhotographersID/${nameImg}`;\n    img.alt = tag;\n    linkImg.appendChild(img);\n    const titre = document.createElement('h4');\n    titre.innerText = tag;\n    this.articleHeader.appendChild(linkImg);\n    this.articleHeader.appendChild(titre);\n    return this.articleHeader;\n  }\n\n  getContent() {\n    return this.content;\n  }\n}\n\n\n//# sourceURL=webpack://fisheye/./js/articleHeader.js?");

/***/ }),

/***/ "./js/articleLink.js":
/*!***************************!*\
  !*** ./js/articleLink.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticleLink)\n/* harmony export */ });\n// creation des tags d'un article photographe\nclass ArticleLink {\n  constructor(data) {\n    this.content = this.link(data.tags);\n  }\n\n  // create links of home article\n  link(tags) {\n    this.articleLink = document.createElement('div');\n    this.articleLink.className = 'article-link';\n    for (let i = 0; i < tags.length; i += 1) {\n      const link = document.createElement('span');\n      link.className = 'tags';\n      const href = document.createElement('a');\n      href.href = '#';\n      href.innerText = `#${tags[i]}`;\n      link.appendChild(href);\n      this.articleLink.appendChild(link);\n    }\n    return this.articleLink;\n  }\n\n  getContent() {\n    return this.content;\n  }\n}\n\n\n//# sourceURL=webpack://fisheye/./js/articleLink.js?");

/***/ }),

/***/ "./js/articleText.js":
/*!***************************!*\
  !*** ./js/articleText.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArticleText)\n/* harmony export */ });\n// creation des infos texte d'un article photographe\nclass ArticleText {\n  constructor(data) {\n    this.content = this.texte(data.city, data.country, data.tagline, data.price);\n  }\n\n  // create text of home article\n  texte(city, country, tagline, price) {\n    this.articleText = document.createElement('div');\n    this.articleText.className = 'article-texte';\n    const ville = document.createElement('p');\n    ville.innerText = `${city} , ${country}`;\n    const description = document.createElement('p');\n    description.innerText = tagline;\n    const prix = document.createElement('p');\n    prix.innerText = `${price}€/jour`;\n    this.articleText.appendChild(ville);\n    this.articleText.appendChild(description);\n    this.articleText.appendChild(prix);\n    return this.articleText;\n  }\n\n  getContent() {\n    return this.content;\n  }\n}\n\n\n//# sourceURL=webpack://fisheye/./js/articleText.js?");

/***/ }),

/***/ "./js/model/photographe.js":
/*!*********************************!*\
  !*** ./js/model/photographe.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Photographe)\n/* harmony export */ });\nclass Photographe {\n  constructor({\n    name, city, country, tags, tagline, price, portrait,\n  }) {\n    this.name = name;\n    this.city = city;\n    this.country = country;\n    this.tags = tags;\n    this.tagline = tagline;\n    this.price = price;\n    this.portrait = portrait;\n\n    this.createPhotographe = () => new Photographe();\n\n    // update photographe page details infos\n    document.title = `Profil de ${this.name}`;\n    document.getElementsByClassName('photographe-name')[0].innerText = this.name;\n    document.getElementsByClassName(\n      'photographe-city',\n    )[0].innerText = `${this.city},${this.country}`;\n    document.getElementsByClassName(\n      'photographe-line',\n    )[0].innerText = this.tagline;\n    this.tags.forEach((tag) => {\n      const span = document.createElement('span');\n      span.className = 'tags';\n      span.innerText = `#${tag}`;\n      document.getElementsByClassName('photographe-tags-container')[0].appendChild(span);\n    });\n    document.getElementsByClassName(\n      'photographe-img',\n    )[0].src = `./images/PhotographersID/${this.portrait}`;\n    document.getElementsByClassName('prix')[0].innerText = `${price}€/jour`;\n    const formTitre = document.querySelector('.form-titre');\n    formTitre.innerHTML = `Contactez-moi<br/>${this.name}`;\n  }\n}\n\n\n//# sourceURL=webpack://fisheye/./js/model/photographe.js?");

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