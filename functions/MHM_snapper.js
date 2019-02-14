import {MHM_select_id} from './MHM_select_id'
import {MHM_items} from './MHM_items'
import isFixed from '../utils/isFixed'

const MHM_snapper = () => {
    const snappers = MHM_items().snappers,
          mainSnapper = document.querySelector('[data-mhm-offset]'),
          offsetHeightElement = document.querySelector(mainSnapper.getAttribute('data-mhm-offset')),
          offsetHeight = offsetHeightElement.offsetHeight

    snappers.forEach(snapper => {
        const snappersItems = snapper.querySelectorAll('[data-mhm-target]')
        snappersItems.forEach(snappersItem => {
            snappersItem.addEventListener('click', () => {
                const targetId = snappersItem.getAttribute('data-mhm-target'),
                      target = MHM_select_id(targetId),
                      targetPosition = target ? target.getBoundingClientRect().top : 0

                window.scrollTo({
                    top: isFixed(offsetHeightElement) ?
                    Math.floor(window.pageYOffset + targetPosition - offsetHeight)
                    : Math.floor(window.pageYOffset + targetPosition),
                    behavior: "smooth"
                })

            })
        })
    })
}

export {MHM_snapper}
