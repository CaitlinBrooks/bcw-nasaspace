import NasaService from "./nasa-service.js"

const nasaService = new NasaService
let app = document.getElementById('app')

function draw(data) {
  console.log(data)
  app.innerHTML = `
  <button onclick="app.controllers.nasa.getPictures()">
  Get Pictures
  </button>
  <div id="nasapictures"></div>`
}

function drawPictures(data) {
  let picturesElem = document.getElementById('nasapictures')
  let template = ''
  data.results.forEach(picture => {
    template += `<div>
    ${picture.name}
    </div>`
  })

  picturesElem.innerHTML = template

}

export default class NasaController {
  constructor() {
    draw()
  }

  getStarships() {
    console.log("HELLO FROM CONTROLLER")
    nasaService.getPictures(drawPictures)
  }
}
