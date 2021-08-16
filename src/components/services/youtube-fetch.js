class Youtube {
  constructor(key) {
    this.key = key;
  }
  async getLoading() {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    return await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}`, requestOptions)
      .then((response) => response.json())
      .then((result) => result.items);
  }

  async getSearch(value) {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    return await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${value}&type=video&key=${this.key}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        return result.items.map((item) => {
          item.id = item.id.videoId;
          return item;
        });
      });
  }
}

export default Youtube;
