import '../styles/index.scss'
import { Ball } from './ball'

if (process.env.NODE_ENV === 'development') {
  require('../index.html')
}

console.log('imported Ball', Ball)

class App {
  constructor () {
    this.canvas = document.createElement('canvas')
    this.ctx = this.canvas.getContext('2d')
    document.body.appendChild(this.canvas)

    window.addEventListener('resize', this.resize.bind(this), false)
    this.resize()

    this.ball = new Ball(60, 1)

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

    this.ball.draw(this.ctx, this.stageWidth, this.stageHeight)
  }
}

window.onload = () => {
  new App()
}
