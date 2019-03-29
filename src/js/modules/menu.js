const nav = document.querySelector('.js-main-nav')
const showNav = document.querySelector('.js-show-nav')
const hideNav = document.querySelector('.js-hide-nav')

showNav.addEventListener('click', () => {
  nav.classList.toggle('u-show')
})

hideNav.addEventListener('click', () => {
  nav.classList.remove('u-show')
})
