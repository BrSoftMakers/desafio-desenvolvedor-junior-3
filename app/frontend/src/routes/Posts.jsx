import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { requestAllPosts } from './helpers/requestFunctions';
import { recoverUser } from './helpers/storageFunctions';
import Accordion from 'react-bootstrap/Accordion';

function Posts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = recoverUser();
    if (!user) return navigate('/login');
    requestAllPosts(user.token).then(({ data }) => {
      setPosts(data);
    });
  }, [posts, navigate]);

  return (
    <div className="container pt-3 mt-3">
      <h2 className="text-center mt-5 pb-3 mb-3">Lista de Postagens</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">Id</th>
            <th className="text-center">Título</th>
            <th className="text-center">Conteúdo</th>
            <th className="text-center">Pessoa Usuária</th>
          </tr>
        </thead>
        {posts.length && (
          <tbody>
            {posts.map(({ id, title, content, user }) => (
              <tr key={id}>
                <td className="text-center">{id}</td>
                <td className="text-center">{title}</td>
                <td>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Clique para ler</Accordion.Header>
                      <Accordion.Body>{content}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </td>
                <td className="text-center">{user.name}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
    </div>
  );
}

export default Posts;
