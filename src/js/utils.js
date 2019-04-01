const SCSS_VARIABLES = {
  inner: 1240,
  gutter: 20
}
const BREAKPOINTS = {
  desktopSmall: SCSS_VARIABLES.inner + SCSS_VARIABLES.gutter * 4,
  tablet: 1200,
  tabletMiddle: 980,
  mobile: 670,
  mobileSmall: 480
}

const ELEMENTS = {
  boxes: document.querySelectorAll('.js-box'),
  tooltips: document.querySelectorAll('[data-box-tooltip]'),
  catBoxes: document.querySelectorAll('[data-box-cat]'),
  catBtns: document.querySelectorAll('.js-cat-btn')
}

module.exports = {
  BREAKPOINTS,
  SCSS_VARIABLES,
  ELEMENTS
}
