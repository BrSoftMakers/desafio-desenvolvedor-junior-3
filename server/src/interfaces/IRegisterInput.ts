import ILoginInput from './ILoginInput';

export default interface IRegisterInput extends ILoginInput {
  name?: string;
}