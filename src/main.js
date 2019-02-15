export default class MHM {
  constructor(opts){

  this.opts = opts

  // DEFAULTS
  opts = {
      first: this.opts.first || 'default value',
      second: this.opts.second || 'default value',
      third: this.opts.third || 'default value',
  }

  // ELEMENTS
  this.elements = {
    snappers: {
      linksList : document.querySelectorAll(`[data-mhm-item="snapper"]`),
      mainSnapper : document.querySelector('[data-mhm-offset]'),
    },
    togglers: document.querySelectorAll(`[data-mhm-item="toggler"]`)
  }

  this.methodsLoaded = []

  this.init()

  // LOAD MESSAGE
  console.info(`%c[MHM Utility Framework loaded: %c${this.methodsLoaded.length ?
    this.methodsLoaded : 'NO functions loaded'}%c]`,
  'color:blue;','color:green; font-weight:bold;','color:blue;')

  }
  // UTILS

  /** Takes an array of arrays made of elements which if present
  /*  triggers the function
  **/
  invokeIfNeeded(elementAndFns) {
    elementAndFns.forEach(elementAndFn => {
      const [el,fn] = elementAndFn

      if(el.length) {
        this.methodsLoaded.push(fn.name)
        return fn.apply(this)
      }
    })
  }

  init(){

    this.invokeIfNeeded([
      [this.elements.snappers.linksList, this.snapper],
      [this.elements.togglers, this.toggler]
    ])

  }

  snapper(){
    const isFixed = el => getComputedStyle(el).position === 'fixed',
          offsetHeight = this.elements.snappers.mainSnapper ?
            this.elements.snappers.mainSnapper.offsetHeight : 0

    this.elements.snappers.linksList.forEach(snapper => {
      const snappersItems = snapper.querySelectorAll('[data-mhm-target]')

      snappersItems.forEach(snappersItem => {
        snappersItem.addEventListener('click', () => {
          const targetId = snappersItem.getAttribute('data-mhm-target'),
                target = document.querySelector(`[data-mhm-id=${targetId}]`),
                targetPosition = target ? target.getBoundingClientRect().top : 0
          const mainSnapperTarget = document.querySelector(`#${this.elements.snappers.mainSnapper.getAttribute('data-mhm-offset')}`)
          const topScrollOffset = isFixed(mainSnapperTarget) ?
                Math.floor(window.pageYOffset + targetPosition - offsetHeight)
                  : Math.floor(window.pageYOffset + targetPosition)

          window.scrollTo({
            top: topScrollOffset,
            behavior: "smooth"
          })

        })
      })

    })
  }

  toggler(){
    this.elements.togglers.forEach(toggler => {
      const targetId = toggler.getAttribute('data-mhm-target'),
            classToToggle = toggler.getAttribute('data-mhm-class'),
            target = document.querySelector(`[data-mhm-id=${targetId}]`)
      toggler.addEventListener('click', ()=> {
        target.classList.toggle(classToToggle)
      })
    })
  }

}