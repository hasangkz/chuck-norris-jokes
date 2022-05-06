class JokeApi {
  constructor() {
    this.baseURL = 'https://api.chucknorris.io';
    this.axiosObjectJoke = axios.create({
      baseURL: this.baseURL,
    });
  }
  async getJoke() {
    const jokeResponse = await this.axiosObjectJoke.get('/jokes/random');
    console.log(jokeResponse.data.value);
    return jokeResponse.data.value;
  }
}
