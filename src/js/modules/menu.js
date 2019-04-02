const nav = document.querySelector('.js-main-nav')
const showNav = document.querySelector('.js-show-nav')
const hideNav = document.querySelector('.js-hide-nav')
const menuEls = document.querySelectorAll('.js-menu-el')

showNav.addEventListener('click', () => {
  nav.classList.toggle('u-show')
})

hideNav.addEventListener('click', () => {
  nav.classList.remove('u-show')
})

menuEls.forEach(el => {
  el.addEventListener('click', () => {
    nav.classList.remove('u-show')
  })
})
