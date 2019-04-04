export class TooltipGroup {
  constructor (triggers, tooltips, gridBreakpoints) {
    this.triggers = triggers
    this.tooltips = tooltips
    this.gridBreakpoints = gridBreakpoints
  }

  resetTooltips () {
    this.tooltips.forEach(tooltip => {
      tooltip.classList.add('u-hidden')
      tooltip.classList.remove('is-active')
      tooltip.style.order = '9999' // need to get rid of this hack
    })
  }

  resetTriggersOrders () {
    this.triggers.forEach((trigger) => {
      trigger.parentNode.style.order = '0'
    })
  }

  resetTriggers () {
    this.triggers.forEach(trigger => {
      trigger.classList.remove('is-active')
    })
  }

  reorderTriggersOrders () {
    this.resetTriggersOrders()
    let i = 0
    this.triggers.forEach((trigger) => {
      if (!trigger.parentNode.classList.contains('u-hidden')) {
        trigger.parentNode.style.order = `${i + 1}`
        i++
      }
    })
  }

  getPositionShift () {
    let shift
    this.gridBreakpoints.forEach(breakpoint => {
      if (!shift) {
        if (breakpoint.mode === '>') {
          if (window.innerWidth > breakpoint.breakpoint) {
            shift = breakpoint.shift
          }
        } else if (breakpoint.mode === '<=') {
          if (window.innerWidth <= breakpoint.breakpoint) {
            shift = breakpoint.shift
          }
        }
      }
    })

    return shift
  }

  triggerTooltip (id) {
    let triggeredTooltip

    this.tooltips.forEach(tooltip => {
      if (parseInt(tooltip.dataset.boxTooltip) === parseInt(id)) {
        triggeredTooltip = tooltip
      }
    })

    triggeredTooltip.classList.remove('u-hidden')
    triggeredTooltip.classList.add('is-active')
  }

  positionTooltip (box) {
    const id = box.dataset.boxTooltipTrigger

    let positionedTooltip
    this.tooltips.forEach(tooltip => {
      if (parseInt(tooltip.dataset.boxTooltip) === parseInt(id)) {
        positionedTooltip = tooltip
      }
    })

    const shift = this.getPositionShift()
    const order = box.parentNode.style.order
    const pos = Math.ceil(order / shift) * shift + 1
    positionedTooltip.style.order = `${pos}`
  }

  getActiveTooltipID () {
    let activeTooltip
    this.tooltips.forEach((tooltip) => {
      if (tooltip.classList.contains('is-active')) {
        activeTooltip = tooltip
      }
    })

    if (activeTooltip) {
      return parseInt(activeTooltip.dataset.boxTooltip)
    }
  }

  init () {
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', e => {
        this.resetTriggers()
        trigger.classList.add('is-active')
        this.resetTooltips()
        this.triggerTooltip(parseInt(trigger.dataset.boxTooltipTrigger))
        this.positionTooltip(trigger)
      })
    })

    window.addEventListener('resize', () => {
      if (this.getActiveTooltipID()) {
        const trigger = document.querySelector(`[data-box-tooltip-trigger="${this.getActiveTooltipID()}"]`)
        this.positionTooltip(trigger)
      }
    })
  }
}
