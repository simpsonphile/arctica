import animateScrollTo from 'animated-scroll-to'

export class ScrollTo {
  constructor () {
    this.triggers = document.querySelectorAll('.js-scroll-to')
  }

  init () {
    this.scrollTo()
  }

  scrollTo () {
    this.triggers.forEach(button => {
      button.addEventListener('click', event => {
        event.preventDefault()
        event.stopPropagation()

        const target = button.dataset.target
        const element = document.querySelector(target)

        animateScrollTo(element, {
          speed: 1000
        })
      })
    })
  }
}
