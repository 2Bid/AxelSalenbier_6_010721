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

function triPopularite() {
  const mediasGlobal = medias.sort((media1, media2) => media1.likes > media2.likes);
  afficheMedias(mediasGlobal);
}

async function affichage(id) {
  const photographer = await getPhotographer(id);
  medias = await getMediaByPhotographer(id);
  new Photographe(photographer);
  triPopularite();
}

function recupereId() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  const { id } = params;
  affichage(id);
}
recupereId();

/* filtre medias */
const select = document.getElementById('select');

function triDate() {
  const mediasGlobal = medias.sort((media1, media2) => {
    const date = new Date(media1.date);
    const date2 = new Date(media2.date);
    return date > date2 ? -1 : 1;
  });
  afficheMedias(mediasGlobal);
}

function triTitre() {
  const mediasGlobal = medias.sort((media1, media2) => media1.title.localeCompare(media2.title));
  afficheMedias(mediasGlobal);
}

select.addEventListener('change', (e) => {
  switch (e.target.value) {
    case 'Date':
      triDate();
      break;

    case 'Popularité':
      triPopularite();
      break;

    case 'Titre':
      triTitre();
      break;

    default:
      break;
  }
});

/* Modal Contact */

const modal = document.getElementById('modal');
const btnOpenModal = document.getElementById('btn-openModal');
const croix = document.querySelector('.form-close');
const body = document.querySelector('.body');

btnOpenModal.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'block';
  body.classList.add('overflowhide');
});

croix.addEventListener('click', (e) => {
  e.preventDefault();
  modal.style.display = 'none';
  body.classList.remove('overflowhide');
});
