import animateScrollTo from 'animated-scroll-to'
import {BREAKPOINTS} from '../utils'

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
        let offset = 100

        if (window.innerWidth <= BREAKPOINTS.tablet) offset = 75
        if (window.innerWidth <= BREAKPOINTS.mobile) offset = 50

        animateScrollTo(element, {
          speed: 1000,
          offset: -offset
        })
      })
    })
  }
}
