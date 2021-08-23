import { useHistory } from 'react-router-dom';
import { BsPlus } from 'react-icons/bs';

export const BtnCreatePost = (): JSX.Element => {
  const history = useHistory();

  return (
    <div className="fixed bottom-0 w-full">
      <div className="container flex justify-center lg:justify-end">
        <button
          className="bg-purple-300 p-6 rounded-full shadow-md hover:bg-purple-400 transition-all m-5"
          type="button"
          onClick={() => history.push('create-post')}
        >
          <BsPlus fontSize="30" />
        </button>
      </div>
    </div>
  );
};
