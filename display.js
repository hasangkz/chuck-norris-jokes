class Display {
  constructor() {
    this.getJoke = document.querySelector('.btn-get-joke');
    this.getJoke.addEventListener('click', () => this.goJoke());
  }
  async goJoke() {
    const picture = await new UnsplashApi().getPicture();
    const joke = await new JokeApi().getJoke();

    const sonuclar = {
      picture,
      joke,
    };

    this.yazdir(sonuclar);
  }
  yazdir(sonuclar) {
    document.querySelector('.sonuc').innerHTML = `<div class="card">
    <div class="card-image">
      <figure class="image is-16by9">
        <img
          src="${sonuclar.picture}"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="subtitle is-6 pb-4">${sonuclar.joke}</p>
        </div>
      </div>
    </div>
  </div>`;
  }
}
