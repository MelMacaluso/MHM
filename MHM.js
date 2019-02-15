import MHM from './src/main'

(()=>{
    // Wait for DOM to be fully loaded
    document.addEventListener('DOMContentLoaded', ()=> {

    // New class instance init
    new MHM({
        first: 'wow',
        third: ''
      })

    })
})()