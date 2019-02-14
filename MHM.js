import {MHM_toggler} from './functions/MHM_toggler'
import {MHM_snapper} from './functions/MHM_snapper'

(()=>{
    // Init message
    console.info('%c[MHM Utility Framework:'+'%c Loaded'+'%c]','color:blue;','color:green; font-weight:bold;','color:blue;')
    //Utilities, to be executed when the window has loaded
    window.addEventListener('load', ()=> {
        MHM_toggler()
        MHM_snapper()
    })
})()