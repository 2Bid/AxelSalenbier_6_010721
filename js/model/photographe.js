export default class Photographe {
  constructor({
    name, city, country, tags, tagline, price, portrait,
  }) {
    this.name = name;
    this.city = city;
    this.country = country;
    this.tags = tags;
    this.tagline = tagline;
    this.price = price;
    this.portrait = portrait;

    this.createPhotographe = () => new Photographe();

    // update photographe page details infos
    document.title = `Profil de ${this.name}`;
    document.getElementsByClassName('photographe-name')[0].innerText = this.name;
    document.getElementsByClassName(
      'photographe-city',
    )[0].innerText = `${this.city},${this.country}`;
    document.getElementsByClassName(
      'photographe-line',
    )[0].innerText = this.tagline;
    this.tags.forEach((tag) => {
      const span = document.createElement('span');
      span.className = 'tags';
      span.innerText = `#${tag}`;
      document.getElementsByClassName('photographe-tags-container')[0].appendChild(span);
    });
    document.getElementsByClassName(
      'photographe-img',
    )[0].src = `./images/PhotographersID/${this.portrait}`;
    document.getElementsByClassName('prix')[0].innerText = `${price}€/jour`;
    const formTitre = document.querySelector('.form-titre');
    formTitre.innerHTML = `Contactez-moi<br/>${this.name}`;
  }
}
