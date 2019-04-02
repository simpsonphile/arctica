export class Accord {
  constructor (context, group) {
    this.context = context
    this.group = group

    this.initAccord()
  }

  resetGroup () {
    this.group.forEach(acc => {
      acc.classList.remove('is-active')
    })
  }

  triggerAccord () {
    console.log(this.resetGroup)
    this.resetGroup()
    this.context.classList.toggle('is-active')
  }

  initAccord () {
    const self = this
    this.context.querySelector('.js-accord-trigger').addEventListener('click', self.triggerAccord.bind(self))
  }
}
