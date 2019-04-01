import {ELEMENTS} from '../utils'
import {resetTooltips, reorderBoxesOrder, resetBoxes} from './boxTooltip'

const resetCatBoxes = () => {
  ELEMENTS.catBoxes.forEach(box => {
    box.classList.add('u-hidden')
  })
}

const showCatBoxes = cat => {
  resetCatBoxes()

  if (cat === 'all') {
    ELEMENTS.catBoxes.forEach(box => {
      box.classList.remove('u-hidden')
    })
  } else {
    document.querySelectorAll(`[data-box-cat="${cat}"]`).forEach(box => {
      box.classList.remove('u-hidden')
    })
  }
}

const resetCatBtns = () => {
  ELEMENTS.catBtns.forEach(btn => {
    btn.classList.remove('is-active')
  })
}

ELEMENTS.catBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    resetCatBtns()
    resetTooltips()
    btn.classList.add('is-active')
    showCatBoxes(btn.dataset.triggerCat)
    reorderBoxesOrder()
    resetBoxes()
  })
})
