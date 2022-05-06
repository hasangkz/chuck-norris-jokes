class UnsplashApi {
  constructor() {
    this.baseURL = 'https://api.unsplash.com';
    this.clientID = 'Client-ID niewvoPZd7OknVcJaihRLviMHrYehae_gZMrd97QbnQ';
    this.axiosObjectPicture = axios.create({
      baseURL: this.baseURL,
      headers: {
        Authorization: this.clientID,
      },
      params: {
        query: 'child',
        count: 1,
      },
    });
  }
  async getPicture() {
    const pictureResponse = await this.axiosObjectPicture.get('/photos/random');
    console.log(pictureResponse.data[0].urls.regular);
    return pictureResponse.data[0].urls.regular;
  }
}
