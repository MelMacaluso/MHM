const MHM_items = () => {
    const targets = {
        togglers: Array.from(document.querySelectorAll(`[data-mhm-item="toggler"]`)),
        snappers: Array.from(document.querySelectorAll(`[data-mhm-item="snapper"]`)),
    }
    return targets
}

export {MHM_items}
