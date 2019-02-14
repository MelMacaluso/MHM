import {MHM_select_id} from './MHM_select_id'
import {MHM_items} from './MHM_items'

const MHM_toggler = ()=> {
    const togglers = MHM_items().togglers
    togglers.forEach(toggler => {
        const targetId = toggler.getAttribute('data-mhm-target')
        const classToToggle = toggler.getAttribute('data-mhm-class')
        const target = MHM_select_id(targetId)
        toggler.addEventListener('click', ()=> {
            target.classList.toggle(classToToggle)
        })
    })
}

export {MHM_toggler}
