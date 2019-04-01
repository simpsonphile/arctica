import {BREAKPOINTS, ELEMENTS} from '../utils'

export const resetTooltips = () => {
  ELEMENTS.tooltips.forEach(tooltip => {
    tooltip.classList.add('u-hidden')
    tooltip.classList.remove('is-active')
    tooltip.style.order = '9999'
  })
}

const resetOrders = () => {
  ELEMENTS.catBoxes.forEach((box) => {
    box.style.order = '0'
  })
}

export const resetBoxes = () => {
  ELEMENTS.boxes.forEach(box => {
    box.classList.remove('is-active')
  })
}

export const reorderBoxesOrder = () => {
  resetOrders()
  let i = 1
  ELEMENTS.catBoxes.forEach(box => {
    if (!box.classList.contains('u-hidden')) {
      box.style.order = `${i}`
      i++
    }
  })
}

const getPositionShift = () => {
  if (window.innerWidth > BREAKPOINTS.tabletMiddle) {
    return 4
  } else if (window.innerWidth > BREAKPOINTS.mobile) {
    return 3
  } else if (window.innerWidth > BREAKPOINTS.mobileSmall) {
    return 2
  } else if (window.innerWidth <= BREAKPOINTS.mobileSmall) {
    return 1
  }
}

const triggerTooltip = id => {
  const triggeredTooltip = document.querySelector(`[data-box-tooltip="${id}"]`)

  triggeredTooltip.classList.remove('u-hidden')
  triggeredTooltip.classList.add('is-active')
}

const positionTooltip = box => {
  const id = box.dataset.boxTooltipTrigger
  const positionedTooltip = document.querySelector(`[data-box-tooltip="${id}"]`)
  const shift = getPositionShift()
  const order = box.parentNode.style.order
  const pos = Math.ceil(order / shift) * shift + 1
  positionedTooltip.style.order = `${pos}`
}

const getActiveTooltipID = () => {
  const activeTooltip = document.querySelector('.js-tooltip-wrap.is-active')
  if (activeTooltip) {
    return parseInt(activeTooltip.dataset.boxTooltip)
  }
}

ELEMENTS.boxes.forEach(box => {
  box.addEventListener('click', e => {
    resetBoxes()
    box.classList.add('is-active')
    resetTooltips()
    triggerTooltip(parseInt(box.dataset.boxTooltipTrigger))
    positionTooltip(box)
  })
})

window.addEventListener('resize', () => {
  if (getActiveTooltipID()) {
    const box = document.querySelector(`[data-box-tooltip-trigger="${getActiveTooltipID()}"]`)
    positionTooltip(box)
  }
})
