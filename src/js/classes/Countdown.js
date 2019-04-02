export class Countdown {
  constructor (context) {
    this.context = context
    this.countTo = parseInt(context.dataset.countTo)
    this.run = false
    this.current = 0
    this.init()
  }

  checkIfVisible () {
    const rect = this.context.getBoundingClientRect()

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  runIfVisible () {
    if (this.checkIfVisible(this.context) && !this.run) {
      this.run = true
      this.runCountdown()
    }
  }

  runCountdown () {
    const interval = 100
    const time = 2000
    const iterations = time / interval
    const step = Math.round(this.countTo / iterations)

    const intervalFunction = setTimeout(() => {
      if (this.current >= this.countTo) {
        clearInterval(intervalFunction)
        this.context.innerHTML = this.countTo
      } else {
        this.current += step
        this.context.innerHTML = this.current
        this.runCountdown()
      }
    }, interval)
  }

  init () {
    const self = this
    this.runIfVisible()

    window.addEventListener('scroll', self.runIfVisible.bind(self))
  }
}
