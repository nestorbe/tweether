import { eth, getInstance } from './provider'
import UserStorage from "./artifacts/UserStorage.json"
import UserController from "./artifacts/UserController.json"
import Web3 from 'web3'

export const getUserIdFromUsername = async (username) => {
  const storage = await getInstance(UserStorage)
  const userId = await storage.usernames.call(web3.fromUtf8(username))

  return userId
}

export const getLoggedInUserId = async () => {
  try {
    await ethereum.enable()
    const addresses = await eth.getAccounts()

    if (!addresses) return

    const storage = await getInstance(UserStorage)
    const userId = await storage.addresses.call(addresses[0])

    return parseInt(userId)
  } catch (err) {
    console.error("Err:", err)
  }
}

export const getUserInfo = async (userId) => {
  const storage = await getInstance(UserStorage)
  const profile = await storage.profiles.call(userId)

  const {
    id,
    username,
    firstName,
    lastName,
    bio,
    gravatarEmail,
  } = profile

  if (!parseInt(id)) throw "Couldn't find user!"

  return {
    id: parseInt(id),
    username: web3.toUtf8(username),
    firstName: web3.toUtf8(firstName),
    lastName: web3.toUtf8(lastName),
    bio,
    gravatarEmail,
  }
}

export const createUser = async (...params) => {
  try {
    await ethereum.enable()

    const controller = await getInstance(UserController)
    const addresses = await eth.getAccounts()
    console.log(...params)
    const result = await controller.createUser(...params, {
      from: addresses[0],
    })

    return result
  } catch (err) {
    console.error("Err:", err)
  }
}
