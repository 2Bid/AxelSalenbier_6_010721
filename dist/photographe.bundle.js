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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repository */ \"./js/repository.js\");\n/* eslint-disable eqeqeq */\r\n\r\n\r\nlet result = [];\r\nlet index = 0;\r\n\r\n// display position of media into medias Array\r\nasync function showSlides(media) {\r\n  index = result.findIndex((currentMedia) => currentMedia.id === media.id);\r\n  const nombreslide = document.querySelector('.numbertext');\r\n  nombreslide.innerText = `${index + 1}/${result.length}`;\r\n}\r\n\r\n// display media\r\nasync function showMedias(media) {\r\n  index = result.findIndex((currentMedia) => currentMedia.id === media.id);\r\n  const currentImage = document.querySelector('#currentSlideImg');\r\n  const currentVideo = document.querySelector('#currentSlideVideo');\r\n  const name = document.getElementsByClassName('photographe-name')[0].outerText;\r\n  const namesplit = name.split(' ')[0];\r\n  const containerVideo = document.querySelector('.lightbox-container-video');\r\n  const containerImage = document.querySelector('.lightbox-container-img');\r\n  const titreMedia = document.querySelector('.media-titre');\r\n  titreMedia.innerText = media.title;\r\n\r\n  if (media.video) {\r\n    currentVideo.alt = media.title;\r\n    currentImage.style.display = 'none';\r\n    currentVideo.style.display = 'block';\r\n    containerImage.style.display = 'none';\r\n    containerVideo.style.display = 'block';\r\n    if (namesplit == 'Ellie-Rose') {\r\n      const Ellie = namesplit.replace('-', '');\r\n      currentVideo.src = `./images/${Ellie}/${media.video}`;\r\n    } else {\r\n      currentVideo.src = `./images/${namesplit}/${media.video}`;\r\n    }\r\n  } else if (media.image) {\r\n    currentImage.alt = media.title;\r\n    currentVideo.style.display = 'none';\r\n    currentImage.style.display = 'block';\r\n    containerVideo.style.display = 'none';\r\n    containerImage.style.display = 'block';\r\n    if (namesplit == 'Ellie-Rose') {\r\n      const Ellie = namesplit.replace('-', '');\r\n      currentImage.src = `./images/${Ellie}/${media.image}`;\r\n    } else {\r\n      currentImage.src = `./images/${namesplit}/${media.image}`;\r\n    }\r\n  }\r\n}\r\n\r\nconst openLightbox = async (media) => {\r\n  result = await (0,_repository__WEBPACK_IMPORTED_MODULE_0__.getMediaByPhotographer)(media.photographerId);\r\n  const lightbox = document.querySelector('.lightbox');\r\n  const main = document.querySelector('.main');\r\n  const btn = document.querySelector('.close');\r\n  lightbox.setAttribute('aria-hidden', 'false');\r\n  lightbox.className = 'active lightbox';\r\n  if (lightbox.classList.contains('active')) {\r\n    main.classList.add('opacitydown');\r\n  } else {\r\n    main.classList.remove('opacitydown');\r\n  }\r\n  showSlides(media);\r\n  showMedias(media);\r\n  btn.focus();\r\n};\r\n\r\n/**\r\n *\r\n * @param {{\r\n  id:number,\r\n  photographerId: number,\r\n  title:string,\r\n  image:string,\r\n  tags:[],\r\n  likes:number,\r\n  price:number,\r\n  date:string\r\n  }} media\r\n */\r\n\r\n// close lightbox\r\nconst lightbox = document.querySelector('.lightbox');\r\nconst main = document.querySelector('.main');\r\nconst closebtn = document.querySelector('.close');\r\nclosebtn.addEventListener('click', () => {\r\n  lightbox.classList.remove('active');\r\n  lightbox.setAttribute('aria-hidden', 'true');\r\n  main.classList.remove('opacitydown');\r\n});\r\n\r\n/**\r\n * show media which is at position index2\r\n * @param {number} index2\r\n */\r\nfunction showMediaByIndex(index2) {\r\n  const media = result[index2];\r\n  showMedias(media);\r\n  showSlides(media);\r\n}\r\n\r\n// arrow previous media control\r\nconst prev = document.querySelector('.prev');\r\nprev.addEventListener('click', () => {\r\n  index -= 1;\r\n  if (index < 0) {\r\n    index = result.length - 1;\r\n  }\r\n  showMediaByIndex(index);\r\n});\r\n\r\n// arrow next media control\r\nconst next = document.querySelector('.next');\r\nnext.addEventListener('click', () => {\r\n  index += 1;\r\n  if (index == result.length) {\r\n    index = 0;\r\n  }\r\n  showMediaByIndex(index);\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openLightbox);\r\n\n\n//# sourceURL=webpack://fisheye/./js/lightbox.js?");

/***/ }),

/***/ "./js/mediaFactory.js":
/*!****************************!*\
  !*** ./js/mediaFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaFactory)\n/* harmony export */ });\n/* harmony import */ var _videoFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./videoFactory */ \"./js/videoFactory.js\");\n/* harmony import */ var _photoFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./photoFactory */ \"./js/photoFactory.js\");\n\r\n\r\n\r\n// Create media according to his type\r\nclass MediaFactory {\r\n  constructor(type, data, handleLikeChange) {\r\n    switch (type) {\r\n      case 'photo':\r\n        return new _photoFactory__WEBPACK_IMPORTED_MODULE_1__.default(data, handleLikeChange);\r\n      case 'video':\r\n        return new _videoFactory__WEBPACK_IMPORTED_MODULE_0__.default(data, handleLikeChange);\r\n      default:\r\n        throw new Error('Entrez un parametre valide');\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/mediaFactory.js?");

/***/ }),

/***/ "./js/model/photographe.js":
/*!*********************************!*\
  !*** ./js/model/photographe.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Photographe)\n/* harmony export */ });\nclass Photographe {\r\n  constructor({\r\n    name, city, country, tags, tagline, price, portrait,\r\n  }) {\r\n    this.name = name;\r\n    this.city = city;\r\n    this.country = country;\r\n    this.tags = tags;\r\n    this.tagline = tagline;\r\n    this.price = price;\r\n    this.portrait = portrait;\r\n\r\n    this.createPhotographe = () => new Photographe();\r\n\r\n    // update photographe page details infos\r\n    document.title = `Profil de ${this.name}`;\r\n    document.getElementsByClassName('photographe-name')[0].innerText = this.name;\r\n    document.getElementsByClassName(\r\n      'photographe-city',\r\n    )[0].innerText = `${this.city},${this.country}`;\r\n    document.getElementsByClassName(\r\n      'photographe-line',\r\n    )[0].innerText = this.tagline;\r\n    this.tags.forEach((tag) => {\r\n      const span = document.createElement('span');\r\n      span.className = 'tags';\r\n      span.innerText = `#${tag}`;\r\n      document.getElementsByClassName('photographe-tags-container')[0].appendChild(span);\r\n    });\r\n    document.getElementsByClassName(\r\n      'photographe-img',\r\n    )[0].src = `./images/PhotographersID/${this.portrait}`;\r\n    document.getElementsByClassName('prix')[0].innerText = `${price}€/jour`;\r\n    const formTitre = document.querySelector('.form-titre');\r\n    formTitre.innerHTML = `Contactez-moi<br/>${this.name}`;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/model/photographe.js?");

/***/ }),

/***/ "./js/photoFactory.js":
/*!****************************!*\
  !*** ./js/photoFactory.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaPhoto)\n/* harmony export */ });\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox */ \"./js/lightbox.js\");\n/* eslint-disable eqeqeq */\r\n\r\n\r\nclass MediaPhoto {\r\n  constructor(data, handleLikeChange) {\r\n    this.content = this.photo(data, handleLikeChange);\r\n  }\r\n\r\n  // create photo article\r\n  photo(data, handleLikeChange) {\r\n    this.params = data;\r\n    this.media = document.createElement('article');\r\n    this.media.className = 'media';\r\n    const imgcontainer = document.createElement('a');\r\n    imgcontainer.className = 'img-container';\r\n    imgcontainer.href = '#';\r\n    const img = document.createElement('img');\r\n    const name = document.getElementsByClassName('photographe-name')[0].outerText;\r\n    // ELie-Rose -> enlever le tirer\r\n    const namesplit = name.split(' ')[0];\r\n    if (namesplit == 'Ellie-Rose') {\r\n      const Ellie = namesplit.replace('-', '');\r\n      img.src = `./images/${Ellie}/${this.params.image}`;\r\n    } else {\r\n      img.src = `./images/${namesplit}/${this.params.image}`;\r\n    }\r\n    img.setAttribute('alt', this.params.title);\r\n    imgcontainer.addEventListener('click', () => { (0,_lightbox__WEBPACK_IMPORTED_MODULE_0__.default)(this.params); window.scrollTo(0, 0); });\r\n    const mediaInfo = document.createElement('a');\r\n    mediaInfo.href = '#';\r\n    mediaInfo.className = 'media-infos';\r\n    const titre = document.createElement('h4');\r\n    titre.innerHTML = this.params.title;\r\n    const like = document.createElement('span');\r\n    const datalike = document.createElement('span');\r\n    datalike.innerText = this.params.likes;\r\n    const coeurcontainer = document.createElement('a');\r\n    coeurcontainer.href = '#';\r\n    const coeur = document.createElement('i');\r\n    coeur.className = 'fas fa-heart';\r\n    coeurcontainer.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      this.params.likes += 1;\r\n      datalike.innerText = this.params.likes;\r\n      handleLikeChange();\r\n    });\r\n    coeurcontainer.appendChild(coeur);\r\n    like.appendChild(datalike);\r\n    like.appendChild(coeurcontainer);\r\n    imgcontainer.appendChild(img);\r\n    mediaInfo.appendChild(titre);\r\n    mediaInfo.appendChild(like);\r\n    this.media.appendChild(imgcontainer);\r\n    this.media.appendChild(mediaInfo);\r\n    return this.media;\r\n  }\r\n\r\n  getContent() {\r\n    return this.content;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/photoFactory.js?");

/***/ }),

/***/ "./js/photographe.js":
/*!***************************!*\
  !*** ./js/photographe.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mediaFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediaFactory */ \"./js/mediaFactory.js\");\n/* harmony import */ var _repository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repository */ \"./js/repository.js\");\n/* harmony import */ var _model_photographe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/photographe */ \"./js/model/photographe.js\");\n/* eslint-disable no-new */\r\n/* eslint-disable no-console */\r\n\r\n\r\n\r\n\r\nlet medias = [];\r\nlet totalLike = 0;\r\n\r\n// update totalLikes on click\r\nfunction handleLikeChange() {\r\n  totalLike += 1;\r\n  document.getElementsByClassName('total-like')[0].innerHTML = `${totalLike} <i class=\"fas fa-heart\"></i>`;\r\n}\r\n\r\n/**\r\n * @param {*} data;\r\n * @returns {HTMLElement}\r\n */\r\nfunction fabriqueMedia(data) {\r\n  const photo = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.default('photo', data, handleLikeChange);\r\n  return photo.getContent();\r\n}\r\n\r\nfunction fabriqueMediaVideo(data) {\r\n  const video = new _mediaFactory__WEBPACK_IMPORTED_MODULE_0__.default('video', data, handleLikeChange);\r\n  return video.getContent();\r\n}\r\n\r\nfunction afficheMedias() {\r\n  const mediaSection = document.querySelector('.media-container');\r\n  mediaSection.innerHTML = '';\r\n  totalLike = medias.reduce((sommetotal, media) => sommetotal + media.likes, 0);\r\n  document.getElementsByClassName('total-like')[0].innerHTML = `${totalLike} <i class=\"fas fa-heart\"></i>`;\r\n  for (let i = 0; i < medias.length; i += 1) {\r\n    if ('image' in medias[i]) {\r\n      const article = fabriqueMedia(medias[i]);\r\n      fabriqueMedia(medias[i]);\r\n      mediaSection.appendChild(article);\r\n    } else if ('video' in medias[i]) {\r\n      const articleVideo = fabriqueMediaVideo(medias[i]);\r\n      fabriqueMediaVideo(medias[i]);\r\n      mediaSection.appendChild(articleVideo);\r\n    } else {\r\n      return;\r\n    }\r\n  }\r\n}\r\n\r\n// sort by like\r\nfunction triPopularite() {\r\n  const mediasGlobal = medias.sort((media1, media2) => media2.likes - media1.likes);\r\n  afficheMedias(mediasGlobal);\r\n  document.querySelector('.dropdown-item1').innerText = 'Popularité';\r\n}\r\n\r\nasync function affichage(id) {\r\n  const photographer = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getPhotographer)(id);\r\n  medias = await (0,_repository__WEBPACK_IMPORTED_MODULE_1__.getMediaByPhotographer)(id);\r\n  new _model_photographe__WEBPACK_IMPORTED_MODULE_2__.default(photographer);\r\n  afficheMedias(medias);\r\n}\r\n\r\nfunction recupereId() {\r\n  const urlSearchParams = new URLSearchParams(window.location.search);\r\n  const params = Object.fromEntries(urlSearchParams.entries());\r\n  const { id } = params;\r\n  affichage(id);\r\n}\r\nrecupereId();\r\n\r\n/* Dropdown system */\r\nconst blocLinks = document.querySelector('.bloc-links');\r\nconst btnDrop = document.querySelector('.btn-dropdown');\r\nconst liItems = document.querySelectorAll('.dropdown li');\r\n\r\nlet toggleIndex;\r\n\r\nfunction toggleDropDown() {\r\n  if (!toggleIndex) {\r\n    blocLinks.classList = 'bloc-links active';\r\n    toggleIndex = true;\r\n    return;\r\n  }\r\n\r\n  blocLinks.classList = 'bloc-links';\r\n  toggleIndex = false;\r\n}\r\n\r\nbtnDrop.addEventListener('click', toggleDropDown);\r\n\r\nliItems.forEach((li) => li.addEventListener('click', toggleDropDown));\r\n\r\n/* filter medias */\r\n// const select = document.getElementById('select');\r\n\r\nfunction triDate() {\r\n  document.querySelector('.dropdown-item1').innerText = 'Date';\r\n  const mediasGlobal = medias.sort((media1, media2) => {\r\n    const date = new Date(media1.date);\r\n    const date2 = new Date(media2.date);\r\n    return date > date2 ? -1 : 1;\r\n  });\r\n  afficheMedias(mediasGlobal);\r\n}\r\n\r\n// sort by alphabetical\r\nfunction triTitre() {\r\n  const mediasGlobal = medias.sort((media1, media2) => media1.title.localeCompare(media2.title));\r\n  afficheMedias(mediasGlobal);\r\n\r\n  document.querySelector('.dropdown-item1').innerText = 'Titre';\r\n}\r\n\r\n// select.addEventListener('change', (e) => {\r\n//   switch (e.target.value) {\r\n//     case 'Date':\r\n//       triDate();\r\n//       break;\r\n\r\n//     case 'Popularité':\r\n//       triPopularite();\r\n//       break;\r\n\r\n//     case 'Titre':\r\n//       triTitre();\r\n//       break;\r\n\r\n//     default:\r\n//       break;\r\n//   }\r\n// });\r\n/* Dropdown */\r\nconst ddItem = document.querySelectorAll('.dropdown-item');\r\n\r\nddItem.forEach((item) => {\r\n  item.addEventListener('click', (e) => {\r\n    switch (e.target.innerText) {\r\n      case 'Date':\r\n        e.preventDefault();\r\n        triDate();\r\n        e.target.innerText = document.querySelector('.dropdown-item1').innerText;\r\n        break;\r\n\r\n      case 'Popularité':\r\n        e.preventDefault();\r\n        triPopularite();\r\n        e.target.innerText = document.querySelector('.dropdown-item1').innerText;\r\n        document.querySelector('.dropdown-item1').innerText = e.target.innerText;\r\n        break;\r\n\r\n      case 'Titre':\r\n        e.preventDefault();\r\n        triTitre();\r\n        e.target.innerText = document.querySelector('.dropdown-item1').innerText;\r\n        document.querySelector('.dropdown-item1').innerText = e.target.innerText;\r\n        break;\r\n\r\n      default:\r\n        break;\r\n    }\r\n  });\r\n});\r\n\r\n/* Modal Contact */\r\n\r\nconst modal = document.getElementById('modal');\r\nconst btnOpenModal = document.getElementById('btn-openModal');\r\nconst croix = document.querySelector('.form-close');\r\nconst main = document.querySelector('.main');\r\nconst submitButton = document.getElementById('submit');\r\nconst errors = document.getElementsByClassName('input-error');\r\nconst nom = document.getElementById('input-nom');\r\nconst mail = document.getElementById('input-mail');\r\nconst msg = document.getElementById('input-msg');\r\nconst errorName = document.getElementById('input-error-nom');\r\nconst errorMail = document.getElementById('input-error-mail');\r\nconst errorMsg = document.getElementById('input-error-msg');\r\n\r\nbtnOpenModal.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  window.scrollTo(0, 0);\r\n  modal.style.display = 'block';\r\n  modal.setAttribute('aria-hidden', 'false');\r\n  main.classList.add('opacitydown');\r\n  croix.focus();\r\n});\r\n\r\nfunction clearError() {\r\n  // eslint-disable-next-line no-restricted-syntax\r\n  for (const error of errors) {\r\n    error.style.display = 'none';\r\n  }\r\n}\r\n\r\nfunction validate() {\r\n  const verifMail = /^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\r\n  let valide = true;\r\n\r\n  if (!nom.value.trim()) {\r\n    errorName.style.display = 'block';\r\n    errorName.innerText = 'Veuillez entrez un nom !';\r\n    valide = false;\r\n    nom.value = '';\r\n  }\r\n  if (nom.value && nom.value.length <= 1) {\r\n    errorName.style.display = 'block';\r\n    errorName.innerText = 'Veuillez entrez un nom avec 2 caractères ou plus';\r\n    valide = false;\r\n  }\r\n  if (!mail.value) {\r\n    errorMail.style.display = 'block';\r\n    errorMail.innerText = 'Veuillez entre une adresse mail !';\r\n    valide = false;\r\n  }\r\n  if (mail.value && !verifMail.test(mail.value)) {\r\n    errorMail.style.display = 'block';\r\n    errorMail.innerText = 'Veuillez entre une adresse mail valide !';\r\n    valide = false;\r\n  }\r\n  if (!msg.value.trim()) {\r\n    errorMsg.style.display = 'block';\r\n    errorMsg.innerText = 'Veuillez entrez un message !';\r\n    valide = false;\r\n    msg.value = '';\r\n  }\r\n  if (msg.value && msg.value.length <= 49) {\r\n    errorMsg.style.display = 'block';\r\n    errorMsg.innerText = \"Veuillez entrez un message d'au moins 50 caractères\";\r\n    valide = false;\r\n  }\r\n  return valide;\r\n}\r\n\r\nfunction logInfos() {\r\n  console.log(nom.value);\r\n  console.log(mail.value);\r\n  console.log(msg.value);\r\n}\r\n\r\nsubmitButton.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  clearError();\r\n  if (validate()) {\r\n    modal.style.display = 'none';\r\n    modal.setAttribute('aria-hidden', 'true');\r\n    main.classList.remove('opacitydown');\r\n    logInfos();\r\n  }\r\n});\r\n\r\n// close modal\r\ncroix.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n  clearError();\r\n  modal.style.display = 'none';\r\n  modal.setAttribute('aria-hidden', 'true');\r\n  main.classList.remove('opacitydown');\r\n});\r\n\n\n//# sourceURL=webpack://fisheye/./js/photographe.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MediaVideo)\n/* harmony export */ });\n/* harmony import */ var _lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightbox */ \"./js/lightbox.js\");\n/* eslint-disable eqeqeq */\r\n\r\n\r\nclass MediaVideo {\r\n  constructor(data, handleLikeChange) {\r\n    this.content = this.video(data, handleLikeChange);\r\n  }\r\n\r\n  // create video media\r\n  video(data, handleLikeChange) {\r\n    this.params = data;\r\n    const mediaVideo = document.createElement('article');\r\n    mediaVideo.className = 'media';\r\n    const videoContainer = document.createElement('div');\r\n    videoContainer.className = 'video-container';\r\n    const video = document.createElement('video');\r\n    const name = document.getElementsByClassName('photographe-name')[0].outerText;\r\n    // ELie-Rose -> enlever le tirer\r\n    const namesplit = name.split(' ')[0];\r\n    if (namesplit == 'Ellie-Rose') {\r\n      const Ellie = namesplit.replace('-', '');\r\n      video.src = `./images/${Ellie}/${this.params.video}`;\r\n    } else {\r\n      video.src = `./images/${namesplit}/${this.params.video}`;\r\n    }\r\n    video.setAttribute('alt', this.params.title);\r\n    const mediaInfo = document.createElement('div');\r\n    mediaInfo.className = 'media-infos';\r\n    const titre = document.createElement('h4');\r\n    titre.innerHTML = this.params.title;\r\n    const like = document.createElement('span');\r\n    const datalike = document.createElement('span');\r\n    datalike.innerText = this.params.likes;\r\n    const coeurcontainer = document.createElement('a');\r\n    coeurcontainer.href = '#';\r\n    const coeur = document.createElement('i');\r\n    coeur.className = 'fas fa-heart';\r\n    coeurcontainer.addEventListener('click', (e) => {\r\n      e.preventDefault();\r\n      this.params.likes += 1;\r\n      datalike.innerText = this.params.likes;\r\n      handleLikeChange();\r\n    });\r\n    coeurcontainer.appendChild(coeur);\r\n    like.appendChild(datalike);\r\n    like.appendChild(coeurcontainer);\r\n    video.addEventListener('click', () => { (0,_lightbox__WEBPACK_IMPORTED_MODULE_0__.default)(this.params); window.scrollTo(0, 0); });\r\n    videoContainer.appendChild(video);\r\n    mediaVideo.appendChild(videoContainer);\r\n    mediaInfo.appendChild(titre);\r\n    mediaInfo.appendChild(like);\r\n    mediaVideo.appendChild(mediaInfo);\r\n    return mediaVideo;\r\n  }\r\n\r\n  getContent() {\r\n    return this.content;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://fisheye/./js/videoFactory.js?");

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