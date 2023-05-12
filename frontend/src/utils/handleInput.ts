import isValidEmail from './validations/email';
import isValidPassword from './validations/password';

export default function isValidFields(
  value: string,
  name: string,
  required: boolean,
  setFunction: (oldState: any) => any
) {
  if (!value && required) {
    if (value?.length > 10) {
      return setFunction((oldState: any) => oldState);
    }
    return setFunction((oldState: any) => ({
      ...oldState,
      [`${name}Error`]: 'Campo obrigatório',
      [`${name}IsValid`]: 'notOk',
    }));
  }

  if (value?.length < 3 && (name === 'name' || name === 'email')) {
    return setFunction((oldState: any) => ({
      ...oldState,
      [`${name}Error`]: 'Mínimo de 3 caracteres',
      [`${name}IsValid`]: 'notOk',
    }));
  }

  if (value?.length < 10 && name === 'title') {
    return setFunction((oldState: any) => ({
      ...oldState,
      [`${name}Error`]: 'Mínimo de 10 caracteres',
      [`${name}IsValid`]: 'notOk',
    }));
  }

  if (value?.length < 50 && name === 'text') {
    return setFunction((oldState: any) => ({
      ...oldState,
      [`${name}Error`]: 'Mínimo de 50 caracteres',
      [`${name}IsValid`]: 'notOk',
    }));
  }

  if (name === 'email' && value?.length >= 3) {
    if (!isValidEmail(value)) {
      return setFunction((oldState: any) => ({
        ...oldState,
        [`${name}Error`]: 'Digite um e-mail válido',
        [`${name}IsValid`]: 'notOk',
      }));
    }
  }

  if (name === 'password' && value?.length) {
    if (!isValidPassword(value)) {
      return setFunction((oldState: any) => ({
        ...oldState,
        [`${name}Error`]:
          'Senha precisa ter: 1 letra maiúscula, 1 letra minúscula, 1 caracter especial, e um número',
        [`${name}IsValid`]: 'notOk',
      }));
    }
  }

  return setFunction((oldState: any) => ({
    ...oldState,
    [`${name}Error`]: '',
    [`${name}IsValid`]: 'ok',
  }));
}
