import { firstName, lastName } from './../constants'
import { getRandomInt } from './common'

export const generatePeople = function () {
  const tempFirstName = firstName[getRandomInt(0, firstName.length)]
  const tempLastName = lastName[getRandomInt(0, lastName.length)]
  const fullName = `${tempFirstName} ${tempLastName}`
  const email = `${tempFirstName}.${tempLastName}@gmail.com`.toLowerCase()
  return { fullName, email }
}
