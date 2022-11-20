import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { requestPostByUser } from './helpers/requestFunctions';
import { recoverUser } from './helpers/storageFunctions';

function UserPosts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const user = recoverUser();
    if (!user) return navigate('/login');
    requestPostByUser(user)
      .then(({ data }) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        alert(error.response.data.message);
        navigate('/posts');
      });
  }, [navigate]);

  return (
    <div className="container pt-3 mt-3">
      <h2 className="text-center mt-5 pb-3 mb-3">Minhas Postagens</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">Id</th>
            <th className="text-center">Título</th>
            <th className="text-center">Data de publicação</th>
            <th className="text-center">Opções</th>
          </tr>
        </thead>
        {posts.length && (
          <tbody>
            {posts.map(({ id, title, published }) => (
              <tr key={id}>
                <td className="text-center">{id}</td>
                <td className="text-center">{title}</td>
                <td className="text-center">
                  {new Date(published).toLocaleDateString('pt-BR')}
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => navigate(`/my-posts/${id}`)}
                  >
                    Ver detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  );
}

export default UserPosts;
