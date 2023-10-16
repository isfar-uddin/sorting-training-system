import { generatePeople } from './generatePeople'

export const uniqueNumberGenerator = (peopleCount) => {
  const people = []
  const uniqueNumbers = []

  while (uniqueNumbers.length < peopleCount) {
    const newIdentifier = Math.floor(Math.random() * 100) + 1
    if (!uniqueNumbers.includes(newIdentifier)) {
      uniqueNumbers.push(newIdentifier)
    }
  }

  uniqueNumbers.forEach((uniqueNumber) => {
    const info = generatePeople()
    people.push({
      ...info,
      potatoes: uniqueNumber
    })
  })

  uniqueNumbers.sort((a, b) => b - a)

  return people
}
