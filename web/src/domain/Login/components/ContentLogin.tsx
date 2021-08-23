interface Props {
  values: any;
  handleChange(event: React.ChangeEvent<any>): void;
  handleSubmit(event: React.FormEvent): void;
}

export const ContentLogin = (props: Props): JSX.Element => {
  const { values, handleChange, handleSubmit } = props;

  return (
    <form
      className="bg-white m-3 w-full md:w-3/6 2xl:w-2/5  h-3/6 rounded-3xl flex flex-col justify-center p-8"
      onSubmit={handleSubmit}
    >
      <div className="mb-12">
        <span className="text-4xl font-light font-title">Sign In</span>
      </div>

      <div className="flex flex-col">
        <input
          className="bg-gray-200 m-1 h-10 rounded p-2 outline-none focus:ring-2 focus:ring-purple-300"
          required
          type="text"
          placeholder="Digite seu usuário"
          name="username"
          value={values.username}
          onChange={handleChange}
        />
        <input
          className="bg-gray-200 m-1 h-10 rounded p-2 outline-none focus:ring-2 focus:ring-purple-300"
          required
          type="password"
          placeholder="Digite sua senha"
          name="password"
          value={values.password}
          onChange={handleChange}
        />

        <button
          className="mt-12 bg-purple-600 text-white p-2 rounded text-md hover:bg-purple-800 transition-all"
          type="submit"
        >
          Entrar
        </button>
      </div>
    </form>
  );
};
