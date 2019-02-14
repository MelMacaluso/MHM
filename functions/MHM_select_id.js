const MHM_select_id = selector => {
    const id = Array.from(document.querySelectorAll(`[data-mhm-id=${selector}]`))[0]
    return id
}

export {MHM_select_id}