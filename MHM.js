import {MHM_toggler} from './functions/MHM_toggler'
import {MHM_snapper} from './functions/MHM_snapper'
import {MHM_items} from './functions/MHM_items'

(()=>{
    // Init message
    console.info('%c[MHM Utility Framework:'+'%c Loaded'+'%c]','color:blue;','color:green; font-weight:bold;','color:blue;')
    //Utilities, to be executed when the window has loaded
    window.addEventListener('load', ()=> {
        if(MHM_items().togglers.length) {
            MHM_toggler()
        }
        if(MHM_items().snappers.length) {
            MHM_snapper()
        }
    })
})()