export default class MHM {
  constructor (opts) {
    this.opts = opts

    // DEFAULTS
    opts = {
      first: this.opts.first || 'default value',
      second: this.opts.second || 'default value',
      third: this.opts.third || 'default value'
    }

    // ELEMENTS
    this.elements = {
      snappers: {
        linksList: document.querySelectorAll(`[data-mhm-item="snapper"]`),
        mainSnapper: document.querySelector('[data-mhm-offset]')
      },
      togglers: document.querySelectorAll(`[data-mhm-item="toggler"]`),
      scrollers: document.querySelector(`[data-mhm-scroll-sections]`)
    }

    /**
   * Invokes methods based on the availability of the DOM elements they rely on.
   */
    this.methodsLoaded = []

    this.init()

    // Load message
    console.info(`%c[MHM Utility Framework loaded: %c${this.methodsLoaded.length
      ? this.methodsLoaded : 'NO functions loaded'}%c]`,
    'color:blue;', 'color:green; font-weight:bold;', 'color:blue;')
  }

  // UTILS

  /**
   * Invokes methods based on the availability of the DOM elements they rely on.
   *
   * @param {array} elementAndFns - Array of arrays made of elements which if available in
   * the DOM invoke the method within that same array. (confusing, isn't it?)
   * @returns {function} - Invokes methods passed to elementsAndFns
   */
  invokeIfNeeded (elementAndFns) {
    elementAndFns.forEach(elementAndFn => {
      const [el, fn] = elementAndFn

      if (el && el.length !== 0) {
        this.methodsLoaded.push(fn.name)
        return fn.apply(this)
      }
    })
  }

  /**
   * Invokes the needed methods.
   *
   */
  init () {
    this.invokeIfNeeded([
      [this.elements.snappers.linksList, this.snapper],
      [this.elements.togglers, this.toggler],
      [this.elements.scrollers, this.scroller]
    ])
  }

  /**
   * Scans the DOM for a 'Snapper' based on the constructor's
   * {this.elements.snapper.mainSnapper} and adds a click eventListener to each of the snap links
   * Each links is connected to the snapping position through unique attributes thatneed to match
   * in order to trigger the snap-to: the former being 'data-mhm-target' and the
   * latter 'data-mhm-id'. In {this.elements.snapper.mainSnapper} we need to define a
   * 'data-mhm-offset' that gets the height of the element passed here and adds it to the top but just
   * if that element, probably a header, is position:fixed
   */
  snapper () {
    const isFixed = el => window.getComputedStyle(el).position === 'fixed',

      offsetHeight = this.elements.snappers.mainSnapper
        ? this.elements.snappers.mainSnapper.offsetHeight : 0

    this.elements.snappers.linksList.forEach(snapper => {
      const snappersItems = snapper.querySelectorAll('[data-mhm-target]')

      snappersItems.forEach(snappersItem => {
        snappersItem.addEventListener('click', () => {
          const targetId = snappersItem.getAttribute('data-mhm-target'),
            target = document.querySelector(`[data-mhm-id=${targetId}]`),
            targetPosition = target ? target.getBoundingClientRect().top : 0,
            mainSnapperTarget = document.querySelector(`#${this.elements.snappers.mainSnapper.getAttribute('data-mhm-offset')}`),
            topScrollOffset = isFixed(mainSnapperTarget)
              ? Math.floor(window.pageYOffset + targetPosition - offsetHeight)
              : Math.floor(window.pageYOffset + targetPosition)

          window.scrollTo({
            top: topScrollOffset,
            behavior: 'smooth'
          })
        })
      })
    })
  }

  /**
   * Scans the DOM for 'Togglers' based on the constructor's
   * {this.elements.togglers} and adds a click eventListener to each of the toggle elements.
   * Each 'toggler' is connected to an element through unique attributes that
   * need to match in order to trigger the snap-to: the former being 'data-mhm-target' and the
   * latter 'data-mhm-id'. The class that needs toggling needs to be defined with an attribute
   * being 'data-mhm-class'
   */
  toggler () {
    this.elements.togglers.forEach(toggler => {
      const targetId = toggler.getAttribute('data-mhm-target'),
        classToToggle = toggler.getAttribute('data-mhm-class'),
        target = document.querySelector(`[data-mhm-id=${targetId}]`)
      toggler.addEventListener('click', () => {
        target.classList.toggle(classToToggle)
      })
    })
  }

  scroller () {
    let currentSection = '0'
    const sections = this.elements.scrollers.querySelectorAll('[data-mhm-scroll-section]'),
      offsetElement = document.querySelector(this.elements.scrollers.getAttribute('data-mhm-scroll-offset-element')),
      offset = offsetElement ? offsetElement.clientHeight : 0,
      arrows = document.querySelectorAll('[data-mhm-scroll-arrow]'),
      lastSection = sections.length - 1,
      arrowUp = document.querySelector('[data-mhm-scroll-arrow="up"]'),
      arrowDown = document.querySelector('[data-mhm-scroll-arrow="down"]'),
      jumpTo = arrow => {
        const up = arrow.getAttribute('data-mhm-scroll-arrow') === 'up',
          sectionToScrollToID = up ? Number(currentSection) - 1 : Number(currentSection) + 1,
          sectionToScrollTo = document.querySelector(`[data-mhm-scroll-section="${sectionToScrollToID}"]`),
          sectionToScrollToScrollY = sectionToScrollTo.getBoundingClientRect().top

        window.scrollTo({
          top: sectionToScrollToScrollY + window.scrollY - offset,
          behavior: 'smooth'
        })
      },
      populateSectionId = (section, i) => {
        section.setAttribute('data-mhm-scroll-section', i)
      },
      observerProps = {
        opts: {
          root: null,
          rootMargin: '0px',
          threshold: 0.75
        },
        updateCurrentSection: e => {
          // Update currentSection
          if (e[0].intersectionRatio >= 0.5) {
            currentSection = e[0].target.getAttribute('data-mhm-scroll-section')
          }
          // Toggle Arrows conditionally to first/last section
          if (Number(currentSection) === lastSection) {
            arrowDown.style.display = 'none'
          } else if (Number(currentSection) === 0) {
            arrowUp.style.display = 'none'
          } else {
            arrowUp.style.display = 'block'
            arrowDown.style.display = 'block'
          }
        }
      }
    // Attach obsever to each section
    sections.forEach(section => {
      const obs = new window.IntersectionObserver(observerProps.updateCurrentSection, observerProps.opts)
      obs.observe(section)
    })
    // Add click listener to arrows
    arrows.forEach(arrow => {
      arrow.addEventListener('click', e => jumpTo(arrow))
    })
    // Populate sections id dynamically
    sections.forEach((section, i) => populateSectionId(section, i))
  }
}
