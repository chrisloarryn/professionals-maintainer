export const parseRut = (rut) => {
  const upper = rut.toUpperCase()
  const splitted = upper.split('')
  const filtered = splitted.filter((char) => /[0-9]|K/.test(char))
  if (filtered.length > 1) {
    const numbers = filtered
      .slice(0, filtered.length - 1)
      .filter((char) => /[0-9]/.test(char))
      .slice(0, 8)
    const array = Array(Math.floor((numbers.length - 1) / 3))
      .fill(0)
      .map((_, index) => ++index)
    for (const x of array) {
      numbers.reverse()
      numbers.splice(3 * x + x - 1, 0, '.')
      numbers.reverse()
    }
    const verificator = filtered.slice(filtered.length - 1, filtered.length)
    return `${numbers.join('')}-${verificator.join('')}`
  }
  return filtered.join('')
}
