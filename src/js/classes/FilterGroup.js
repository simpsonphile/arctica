export class FilterGroup {
  constructor (btnGroup, boxGroup, tooltipGroup) {
    this.btnGroup = btnGroup
    this.boxGroup = boxGroup

    if (tooltipGroup) {
      this.tooltipGroup = tooltipGroup
    }
  }

  hideCatBoxes () {
    this.boxGroup.forEach(box => {
      box.classList.add('u-hidden')
    })
  }

  showCatBoxes (cat) {
    this.hideCatBoxes()

    if (cat === 'all') {
      this.boxGroup.forEach(box => {
        box.classList.remove('u-hidden')
      })
    } else {
      this.boxGroup.forEach(box => {
        if (box.dataset.boxCat === cat) {
          box.classList.remove('u-hidden')
        }
      })
    }
  }

  resetCatBtns () {
    this.btnGroup.forEach(btn => {
      btn.classList.remove('is-active')
    })
  }

  init () {
    this.btnGroup.forEach(btn => {
      btn.addEventListener('click', e => {
        this.resetCatBtns()
        btn.classList.add('is-active')
        this.showCatBoxes(btn.dataset.triggerCat)

        if (this.tooltipGroup) {
          this.tooltipGroup.resetTooltips()
          this.tooltipGroup.resetTriggers()
          this.tooltipGroup.reorderTriggersOrders()
        }
      })
    })
  }
}
