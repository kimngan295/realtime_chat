const dataService = require('../services/dataService')
// const { uuidv4 } = require('uuid')
const { v4: uuidv4 } = require('uuid');

const addUser = (user) => {
  const data = dataService.readData()
  const userId = { id: uuidv4(), ...user }
  data.users.push(userId)
  dataService.writeData(data)
}

const findUserByUsernameOrEmailOrId = (usernameoremailoruserid) => {
  const data = dataService.readData()
  return data.users.find(user => user.username === usernameoremailoruserid || user.email === usernameoremailoruserid || user.id === usernameoremailoruserid)
}

const updatePassword = (userId, newPassword) => {
  try {
    const data = dataService.readData()

    const user = data.users.find(user => user.id === userId)

    user.password = newPassword

    dataService.writeData(data)

  } catch (error) {
    console.error('Error updated', error.message)
  }
}

const addUserData = (userId, fieldName, fieldValue) => {
  try {
    const data = dataService.readData()
    const user = data.users.find(user => user.id === userId)

    user[fieldName] = fieldValue

    dataService.writeData(data)
  } catch (error) {
    console.error('Error adding user data field', error.message)
  }
}


const findUserByID = async (id) => {
  const data = await dataService.readData()
  return await data.users.find(user => user.id === id)
}

module.exports = { addUser, findUserByUsernameOrEmailOrId, updatePassword, addUserData, findUserByID }

