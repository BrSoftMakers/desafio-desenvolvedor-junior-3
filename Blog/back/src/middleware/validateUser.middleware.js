const { User } = require('../models')
const httpStatus = require('http-status')

const validateEmail = (email) => {
  const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i

  if (!email) return { status: httpStatus.BAD_REQUEST, message: '"Email" is required' }
  if (!regexEmail.test(email)) return { status: httpStatus.BAD_REQUEST, message: '"Email" must be a valid email' }

  return { status: httpStatus.OK, message: 'OK' }
}

const validatePassword = (password) => {
  if (password.length < 6) return { status: httpStatus.BAD_REQUEST, message: '"Password" length must be 6 characters long' }

  return { status: httpStatus.OK, message: 'OK' }
}

const validateIfUserExists = async (email) => {
  const alereadyExists = await UserModel.findOne({ where: { email } })

  if (alereadyExists) return { status: httpStatus.CONFLICT, message: 'User already registered' }

  return { status: httpStatus.OK, message: 'OK' }
}

const validateUser = (userData) => {
  const { email, password } = userData

  if (validateEmail(email).status !== httpStatus.OK) return validateEmail(email)
  if (validatePassword(password).status !== httpStatus.OK) return validatePassword(password)

  return { status: httpStatus.OK, message: 'OK' }
}

module.exports = validateUser