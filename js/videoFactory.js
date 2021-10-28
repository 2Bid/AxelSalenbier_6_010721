/* eslint-disable eqeqeq */
import openLightbox from './lightbox';

export default class MediaVideo {
  constructor(data, handleLikeChange) {
    this.content = this.video(data, handleLikeChange);
  }

  // create video media
  video(data, handleLikeChange) {
    this.params = data;
    const mediaVideo = document.createElement('article');
    mediaVideo.className = 'media';
    const videoContainer = document.createElement('div');
    videoContainer.className = 'video-container';
    const video = document.createElement('video');
    const name = document.getElementsByClassName('photographe-name')[0].outerText;
    // ELie-Rose -> enlever le tirer
    const namesplit = name.split(' ')[0];
    if (namesplit == 'Ellie-Rose') {
      const Ellie = namesplit.replace('-', '');
      video.src = `./images/${Ellie}/${this.params.video}`;
    } else {
      video.src = `./images/${namesplit}/${this.params.video}`;
    }
    video.setAttribute('alt', this.params.title);
    const mediaInfo = document.createElement('div');
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
    video.addEventListener('click', () => { openLightbox(this.params); window.scrollTo(0, 0); });
    videoContainer.appendChild(video);
    mediaVideo.appendChild(videoContainer);
    mediaInfo.appendChild(titre);
    mediaInfo.appendChild(like);
    mediaVideo.appendChild(mediaInfo);
    return mediaVideo;
  }

  getContent() {
    return this.content;
  }
}
