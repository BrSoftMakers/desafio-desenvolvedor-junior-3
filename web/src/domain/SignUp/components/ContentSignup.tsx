import React from 'react';

interface Props {
  values: any;
  handleSubmit(event: React.FormEvent): void;
  handleChange(event: React.ChangeEvent<any>): void;
}

export const ContentSignup = (props: Props): JSX.Element => {
  const { values, handleChange, handleSubmit } = props;

  return (
    <form
      className="w-full lg:w-3/5 2xl:w-2/5 m-5 flex flex-col"
      onSubmit={handleSubmit}
    >
      <span className="font-title ml-2 text-5xl font-light mb-11">SignUp</span>
      <input
        className="bg-gray-200 m-2 p-2 rounded outline-none focus:ring-2 focus:ring-purple-300"
        placeholder="Nome completo"
        type="text"
        name="fullName"
        value={values.fullName}
        onChange={handleChange}
      />
      <input
        className="bg-gray-200 m-2 p-2 rounded outline-none focus:ring-2 focus:ring-purple-300"
        placeholder="Idade"
        type="number"
        name="age"
        value={values.age}
        onChange={handleChange}
      />
      <input
        className="bg-gray-200 m-2 p-2 rounded outline-none focus:ring-2 focus:ring-purple-300"
        placeholder="Digite um usuário"
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
      />

      <input
        className="bg-gray-200 m-2 p-2 rounded outline-none focus:ring-2 focus:ring-purple-300"
        placeholder="Digite uma senha"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <input
        className="bg-gray-200 m-2 p-2 rounded outline-none focus:ring-2 focus:ring-purple-300"
        placeholder="Repita sua senha"
        type="password"
        name="repeatPassword"
        value={values.repeatPassword}
        onChange={handleChange}
      />
      <button
        className="mt-11 ml-2 mr-2 bg-purple-600 p-2 rounded text-white font-semibold hover:bg-purple-800 transition-all"
        type="submit"
      >
        Criar conta
      </button>
    </form>
  );
};
