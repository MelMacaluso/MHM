export default class MHM {
  constructor(opts){

  // INTRO MESSAGE
  console.info('%c[MHM Utility Framework:'+'%c Loaded'+'%c]',
  'color:blue;','color:green; font-weight:bold;','color:blue;')

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
    }
  }

  this.init()

  }
  // UTILS

  /** Takes an array of arrays made of elements which if present
  /*  triggers the function
  **/
  invokeIfNeeded(elementAndFns) {
      elementAndFns.forEach(elementAndFn => {
        const [el,fn] = elementAndFn
        if((typeof el === 'array' && el.length) || el ) {
          return fn.apply(this)
        }
      })

  }

  init(){
    this.invokeIfNeeded([
      [this.elements.snappers.mainSnapper, this.snapper]
    ])

  }

  snapper(){
          console.log('snapper triggered')
          console.log(this)
          const isFixed = el => getComputedStyle(el).position === 'fixed'
          const offsetHeight = this.elements.snappers.mainSnapper ?
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

}