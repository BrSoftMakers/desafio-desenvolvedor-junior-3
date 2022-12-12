import { EMAIL_REGEX } from '../utils/constants.js'

const isEmailValid = (email) => {
  return EMAIL_REGEX.test(email)
}

export default isEmailValid
