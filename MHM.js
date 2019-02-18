import MHM from './src/main'

(() => {
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    /* eslint-disable no-new */
    new MHM({
      first: 'wow',
      third: ''
    })
  })
})()
