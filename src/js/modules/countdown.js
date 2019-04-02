import {Countdown} from '../classes/Countdown'
const countdowns = []
document.querySelectorAll('.js-count').forEach(el => {
  countdowns.push(new Countdown(el))
})
