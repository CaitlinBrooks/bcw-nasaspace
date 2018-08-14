import NasaController from './components/nasa-controller.js'

class App {
  constructor() {
    this.controllers = {
      nasa: new NasaController
    }
  }
}

const app = new App()
// @ts-ignore
window.app = app