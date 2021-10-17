import ArticleFactory from './articleFactory';
import { getPhotographers } from './repository';

// create article
function fabrique(data) {
  const article = document.createElement('article');
  article.className = 'article';
  article.id = data.id;
  const header = new ArticleFactory('header', data);
  const texte = new ArticleFactory('text', data);
  const link = new ArticleFactory('link', data);
  article.appendChild(header.getContent());
  article.appendChild(texte.getContent());
  article.appendChild(link.getContent());
  return article;
}

// display json
async function affichage() {
  const photographers = await getPhotographers();
  for (let i = 0; i < photographers.length; i += 1) {
    const article = fabrique(photographers[i]);
    const section = document.querySelector('.article-container');
    section.appendChild(article);
  }
}

affichage();

/* Filter by tag */

const tag = document.querySelectorAll('.tag');

async function affichagefiltre(tagActuel) {
  const photographers = await getPhotographers();
  const section = document.querySelector('.article-container');
  section.innerHTML = '';
  for (let i = 0; i < photographers.length; i += 1) {
    const { tags } = photographers[i];
    if (tags.includes(tagActuel)) {
      const article = fabrique(photographers[i]);
      section.appendChild(article);
    }
  }
}

tag.forEach((el) => {
  el.addEventListener('click', (event) => {
    const tagActuel = event.currentTarget.id;
    affichagefiltre(tagActuel);
  });
});

/* Discover element appear on scroll */
const discover = document.querySelector('.discover');

window.addEventListener('scroll', (e) => {
  e.preventDefault();
  if ((window.scrollY >= 10)) {
    discover.classList.add('visible');
  } else if ((window.scrollY <= 10)) {
    discover.classList.remove('visible');
  }
});
