import { tns } from 'tiny-slider/src/tiny-slider'

tns({
  container: '.js-testimony-slider',
  items: 1,
  slideBy: 'page',
  autoplay: true,
  center: true,
  nav: false,
  speed: 300,
  autoplayTimeout: 4000,
  controls: false,
  autoplayButtonOutput: false
})
