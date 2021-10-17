/* eslint-disable eqeqeq */
import openLightbox from './lightbox';

export default class MediaPhoto {
  constructor(data, handleLikeChange) {
    this.content = this.photo(data, handleLikeChange);
  }

  // create photo article
  photo(data, handleLikeChange) {
    this.params = data;
    this.media = document.createElement('article');
    this.media.className = 'media';
    const imgcontainer = document.createElement('a');
    imgcontainer.className = 'img-container';
    imgcontainer.href = '#';
    const img = document.createElement('img');
    const name = document.getElementsByClassName('photographe-name')[0].outerText;
    // ELie-Rose -> enlever le tirer
    const namesplit = name.split(' ')[0];
    if (namesplit == 'Ellie-Rose') {
      const Ellie = namesplit.replace('-', '');
      img.src = `./images/${Ellie}/${this.params.image}`;
    } else {
      img.src = `./images/${namesplit}/${this.params.image}`;
    }
    img.setAttribute('alt', this.params.title);
    imgcontainer.addEventListener('click', () => { openLightbox(this.params); window.scrollTo(0, 0); });
    const mediaInfo = document.createElement('a');
    mediaInfo.href = '#';
    mediaInfo.className = 'media-infos';
    const titre = document.createElement('h4');
    titre.innerHTML = this.params.title;
    const like = document.createElement('span');
    const datalike = document.createElement('span');
    datalike.innerText = this.params.likes;
    const coeurcontainer = document.createElement('a');
    coeurcontainer.href = '#';
    const coeur = document.createElement('i');
    coeur.className = 'fas fa-heart';
    coeurcontainer.addEventListener('click', (e) => {
      e.preventDefault();
      this.params.likes += 1;
      datalike.innerText = this.params.likes;
      handleLikeChange();
    });
    coeurcontainer.appendChild(coeur);
    like.appendChild(datalike);
    like.appendChild(coeurcontainer);
    imgcontainer.appendChild(img);
    mediaInfo.appendChild(titre);
    mediaInfo.appendChild(like);
    this.media.appendChild(imgcontainer);
    this.media.appendChild(mediaInfo);
    return this.media;
  }

  getContent() {
    return this.content;
  }
}
