import { useHistory } from 'react-router-dom';

interface Props {
  values: any;
  handleChange(event: React.ChangeEvent<any>): void;
  handleSubmit(event: React.FormEvent): void;
}

export const CreatePostContent = (props: Props): JSX.Element => {
  const history = useHistory();
  const { values, handleChange, handleSubmit } = props;

  return (
    <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
      <input
        className="outline-none bg-gray-200 m-2 p-3 rounded focus:ring-2 focus:ring-purple-300"
        type="text"
        placeholder="Título"
        name="title"
        value={values.title}
        onChange={handleChange}
      />

      <textarea
        className="outline-none bg-gray-200 m-2 p-3 rounded focus:ring-2 focus:ring-purple-300"
        placeholder="Compartilhe seu melhor momento"
        rows={20}
        name="text"
        value={values.text}
        onChange={handleChange}
      />

      <div className="mt-6">
        <button
          className="m-1 font-title text-lg text-white bg-purple-400 p-3 rounded"
          type="submit"
        >
          Publicar
        </button>
        <button
          className="m-1 font-title text-lg text-white bg-pink-400 p-3 rounded"
          type="button"
          onClick={() => history.push('mural')}
        >
          Voltar
        </button>
      </div>
    </form>
  );
};
