import Picture from "../models/Picture.js";

let pictures = {}

export default class NasaService {
  getPictures(url) {
    if (pictures[url]) {
      return
    }
    pictures[url] = {}
    fetch(url)
      .then(res => res.json())
      .then(res => {
        let picture = new Picture(res)
        picture[url] = picture
      })
      .catch(err => {
        delete pictures[url]
      })
  }

  get pictures() {
    return pictures

  }
}
console.log("HERE I AM")