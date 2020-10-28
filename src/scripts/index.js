import '../styles/index.scss'
import { Point } from './point'

if (process.env.NODE_ENV === 'development') {
  require('../index.html')
}

console.log('imported Point', Point)

class App {
  constructor () {
    this.canvas = document.createElement('canvas')
    document.body.appendChild(this.canvas)
    this.ctx = this.canvas.getContext('2d')

    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize()

    window.requestAnimationFrame(this.animate.bind(this))
  }

  resize () {
    this.stageWidth = document.body.clientWidth
    this.stageHeight = document.body.clientHeight

    this.canvas.width = this.stageWidth * 2
    this.canvas.height = this.stageHeight * 2
    this.ctx.scale(2, 2)
  }

  animate (t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight)
    window.requestAnimationFrame(this.animate.bind(this))
  }
}

window.onload = () => {
  new App()
}
