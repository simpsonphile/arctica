const nav = document.querySelector('.js-main-nav')
const showNav = document.querySelector('.js-show-nav')
const hideNav = document.querySelector('.js-hide-nav')
const menuEls = document.querySelectorAll('.js-menu-el')

const hideMenu = () => {
  nav.classList.remove('u-show')
  document.querySelector('body').classList.remove('u-block-scroll')
  document.querySelector('.js-cloack').classList.remove('u-show')
}

const toggleMenu = () => {
  nav.classList.toggle('u-show')
  document.querySelector('body').classList.toggle('u-block-scroll')
  document.querySelector('.js-cloack').classList.toggle('u-show')
}

showNav.addEventListener('click', toggleMenu)

hideNav.addEventListener('click', hideMenu)

menuEls.forEach(el => {
  el.addEventListener('click', hideMenu)
})
