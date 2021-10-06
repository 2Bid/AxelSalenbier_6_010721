/* eslint-disable eqeqeq */
import { getMediaByPhotographer } from './repository';

let result = [];
let index = 0;

// display position of media into medias Array
async function showSlides(media) {
  index = result.findIndex((currentMedia) => currentMedia.id === media.id);
  const nombreslide = document.querySelector('.numbertext');
  nombreslide.innerText = `${index + 1}/${result.length}`;
}

// display media
async function showMedias(media) {
  index = result.findIndex((currentMedia) => currentMedia.id === media.id);
  const currentImage = document.querySelector('#currentSlideImg');
  const currentVideo = document.querySelector('#currentSlideVideo');
  const name = document.getElementsByClassName('photographe-name')[0].outerText;
  const namesplit = name.split(' ')[0];
  const containerVideo = document.querySelector('.lightbox-container-video');
  const containerImage = document.querySelector('.lightbox-container-img');
  const titreMedia = document.querySelector('.media-titre');
  titreMedia.innerText = media.title;

  if (media.video) {
    currentVideo.alt = media.title;
    currentImage.style.display = 'none';
    currentVideo.style.display = 'block';
    containerImage.style.display = 'none';
    containerVideo.style.display = 'block';
    if (namesplit == 'Ellie-Rose') {
      const Ellie = namesplit.replace('-', '');
      currentVideo.src = `./images/${Ellie}/${media.video}`;
    } else {
      currentVideo.src = `./images/${namesplit}/${media.video}`;
    }
  } else if (media.image) {
    currentImage.alt = media.title;
    currentVideo.style.display = 'none';
    currentImage.style.display = 'block';
    containerVideo.style.display = 'none';
    containerImage.style.display = 'block';
    if (namesplit == 'Ellie-Rose') {
      const Ellie = namesplit.replace('-', '');
      currentImage.src = `./images/${Ellie}/${media.image}`;
    } else {
      currentImage.src = `./images/${namesplit}/${media.image}`;
    }
  }
}

const openLightbox = async (media) => {
  result = await getMediaByPhotographer(media.photographerId);
  const lightbox = document.querySelector('.lightbox');
  const main = document.querySelector('.main');
  lightbox.className = 'active lightbox';
  if (lightbox.classList.contains('active')) {
    main.classList.add('opacitydown');
  } else {
    main.classList.remove('opacitydown');
  }
  showSlides(media);
  showMedias(media);
};

/**
 *
 * @param {{
  id:number,
  photographerId: number,
  title:string,
  image:string,
  tags:[],
  likes:number,
  price:number,
  date:string
  }} media
 */

// close lightbox
const lightbox = document.querySelector('.lightbox');
const closebtn = document.querySelector('.close');
const main = document.querySelector('.main');
closebtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
  main.classList.remove('opacitydown');
});

/**
 * show media which is at position index2
 * @param {number} index2
 */
function showMediaByIndex(index2) {
  const media = result[index2];
  showMedias(media);
  showSlides(media);
}

// arrow previous media control
const prev = document.querySelector('.prev');
prev.addEventListener('click', () => {
  index -= 1;
  if (index < 0) {
    index = result.length - 1;
  }
  showMediaByIndex(index);
});

// arrow next media control
const next = document.querySelector('.next');
next.addEventListener('click', () => {
  index += 1;
  if (index == result.length) {
    index = 0;
  }
  showMediaByIndex(index);
});

export default openLightbox;
