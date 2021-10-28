export default class ArticleHeader {
  constructor(data) {
    this.content = this.header(data.portrait, data.name, data.id);
  }

  // create header ( image clickable ) of home article
  header(nameImg, tag, id) {
    this.articleHeader = document.createElement('div');
    this.articleHeader.className = 'article-header';
    const linkImg = document.createElement('a');
    linkImg.className = 'img-container';
    linkImg.href = `./photographe.html?id=${id}`;
    const img = document.createElement('img');
    img.src = `./images/PhotographersID/${nameImg}`;
    img.alt = `Profil de ${tag}`;
    linkImg.appendChild(img);
    const titre = document.createElement('h4');
    titre.innerText = tag;
    this.articleHeader.appendChild(linkImg);
    this.articleHeader.appendChild(titre);
    return this.articleHeader;
  }

  getContent() {
    return this.content;
  }
}
