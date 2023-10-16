export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const isArraySorted = (array) => {
  if (!Array.isArray(array)) return false

  for (let i = 1; i < array.length; i++) {
    if (array[i].potatoes > array[i - 1].potatoes) {
      return false
    }
  }

  return true
}
