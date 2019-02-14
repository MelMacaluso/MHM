const isFixed = el => {
  const position = getComputedStyle(el).position
  return position === 'fixed' || false
}

export default isFixed