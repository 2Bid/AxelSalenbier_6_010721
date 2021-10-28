/* eslint-disable no-new */
/* eslint-disable no-console */
import MediaFactory from './mediaFactory';
import {
  getPhotographer,
  getMediaByPhotographer,
} from './repository';
import Photographe from './model/photographe';

let medias = [];
let totalLike = 0;

// update totalLikes on click
function handleLikeChange() {
  totalLike += 1;
  document.getElementsByClassName('total-like')[0].innerHTML = `${totalLike} <i class="fas fa-heart"></i>`;
}

/**
 * @param {*} data;
 * @returns {HTMLElement}
 */
function fabriqueMedia(data) {
  const photo = new MediaFactory('photo', data, handleLikeChange);
  return photo.getContent();
}

function fabriqueMediaVideo(data) {
  const video = new MediaFactory('video', data, handleLikeChange);
  return video.getContent();
}

function afficheMedias() {
  const mediaSection = document.querySelector('.media-container');
  mediaSection.innerHTML = '';
  totalLike = medias.reduce((sommetotal, media) => sommetotal + media.likes, 0);
  document.getElementsByClassName('total-like')[0].innerHTML = `${totalLike} <i class="fas fa-heart"></i>`;
  for (let i = 0; i < medias.length; i += 1) {
    if ('image' in medias[i]) {
      const article = fabriqueMedia(medias[i]);
      fabriqueMedia(medias[i]);
      mediaSection.appendChild(article);
    } else if ('video' in medias[i]) {
      const articleVideo = fabriqueMediaVideo(medias[i]);
      fabriqueMediaVideo(medias[i]);
      mediaSection.appendChild(articleVideo);
    } else {
      return;
    }
  }
}

// sort by like
function triPopularite() {
  const mediasGlobal = medias.sort((media1, media2) => media2.likes - media1.likes);
  afficheMedias(mediasGlobal);
  document.querySelector('.dropdown-item1').innerText = 'Popularité';
}

async function affichage(id) {
  const photographer = await getPhotographer(id);
  medias = await getMediaByPhotographer(id);
  new Photographe(photographer);
  afficheMedias(medias);
}

function recupereId() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const { id } = params;
  affichage(id);
}
recupereId();

/* Dropdown system */
const blocLinks = document.querySelector('.bloc-links');
const btnDrop = document.querySelector('.btn-dropdown');
const liItems = document.querySelectorAll('.dropdown li');

let toggleIndex;

function toggleDropDown() {
  if (!toggleIndex) {
    blocLinks.classList = 'bloc-links active';
    toggleIndex = true;
    return;
  }

  blocLinks.classList = 'bloc-links';
  toggleIndex = false;
}

btnDrop.addEventListener('click', toggleDropDown);

liItems.forEach((li) => li.addEventListener('click', toggleDropDown));

/* filter medias */
// const select = document.getElementById('select');

function triDate() {
  document.querySelector('.dropdown-item1').innerText = 'Date';
  const mediasGlobal = medias.sort((media1, media2) => {
    const date = new Date(media1.date);
    const date2 = new Date(media2.date);
    return date > date2 ? -1 : 1;
  });
  afficheMedias(mediasGlobal);
}

// sort by alphabetical
function triTitre() {
  const mediasGlobal = medias.sort((media1, media2) => media1.title.localeCompare(media2.title));
  afficheMedias(mediasGlobal);

  document.querySelector('.dropdown-item1').innerText = 'Titre';
}

// select.addEventListener('change', (e) => {
//   switch (e.target.value) {
//     case 'Date':
//       triDate();
//       break;

//     case 'Popularité':
//       triPopularite();
//       break;

//     case 'Titre':
//       triTitre();
//       break;

//     default:
//       break;
//   }
// });
/* Dropdown */
const ddItem = document.querySelectorAll('.dropdown-item');

ddItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'Date':
        e.preventDefault();
        triDate();
        e.target.innerText = document.querySelector('.dropdown-item1').innerText;
        break;

      case 'Popularité':
        e.preventDefault();
        triPopularite();
        e.target.innerText = document.querySelector('.dropdown-item1').innerText;
        document.querySelector('.dropdown-item1').innerText = e.target.innerText;
        break;

      case 'Titre':
        e.preventDefault();
        triTitre();
        e.target.innerText = document.querySelector('.dropdown-item1').innerText;
        document.querySelector('.dropdown-item1').innerText = e.target.innerText;
        break;

      default:
        break;
    }
  });
});

/* Modal Contact */

const modal = document.getElementById('modal');
const btnOpenModal = document.getElementById('btn-openModal');
const croix = document.querySelector('.form-close');
const main = document.querySelector('.main');
const submitButton = document.getElementById('submit');
const errors = document.getElementsByClassName('input-error');
const nom = document.getElementById('input-nom');
const mail = document.getElementById('input-mail');
const msg = document.getElementById('input-msg');
const errorName = document.getElementById('input-error-nom');
const errorMail = document.getElementById('input-error-mail');
const errorMsg = document.getElementById('input-error-msg');

btnOpenModal.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
  modal.style.display = 'block';
  modal.setAttribute('aria-hidden', 'false');
  main.classList.add('opacitydown');
  croix.focus();
});

function clearError() {
  // eslint-disable-next-line no-restricted-syntax
  for (const error of errors) {
    error.style.display = 'none';
  }
}

function validate() {
  const verifMail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let valide = true;

  if (!nom.value.trim()) {
    errorName.style.display = 'block';
    errorName.innerText = 'Veuillez entrez un nom !';
    valide = false;
    nom.value = '';
  }
  if (nom.value && nom.value.length <= 1) {
    errorName.style.display = 'block';
    errorName.innerText = 'Veuillez entrez un nom avec 2 caractères ou plus';
    valide = false;
  }
  if (!mail.value) {
    errorMail.style.display = 'block';
    errorMail.innerText = 'Veuillez entre une adresse mail !';
    valide = false;
  }
  if (mail.value && !verifMail.test(mail.value)) {
    errorMail.style.display = 'block';
    errorMail.innerText = 'Veuillez entre une adresse mail valide !';
    valide = false;
  }
  if (!msg.value.trim()) {
    errorMsg.style.display = 'block';
    errorMsg.innerText = 'Veuillez entrez un message !';
    valide = false;
    msg.value = '';
  }
  if (msg.value && msg.value.length <= 49) {
    errorMsg.style.display = 'block';
    errorMsg.innerText = "Veuillez entrez un message d'au moins 50 caractères";
    valide = false;
  }
  return valide;
}

function logInfos() {
  console.log(nom.value);
  console.log(mail.value);
  console.log(msg.value);
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  clearError();
  if (validate()) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    main.classList.remove('opacitydown');
    logInfos();
  }
});

// close modal
croix.addEventListener('click', (e) => {
  e.preventDefault();
  clearError();
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
  main.classList.remove('opacitydown');
});
