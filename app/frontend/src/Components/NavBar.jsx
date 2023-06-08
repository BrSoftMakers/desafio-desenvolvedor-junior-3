import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../context/MyContext';
import { useHistory, useLocation } from 'react-router-dom';

function NavBar() {
  const [username, setUsername] = useState('');
  const { logOut } = useContext(MyContext);

  const { pathname } = useLocation()

  const history = useHistory();

  useEffect(() => {
    const { name } = JSON.parse(localStorage.getItem('user'));
    setUsername(name);
  }, []);

  return (
    <header>
        <div>
          <h3>
            {username}
          </h3>
        <div>
          {
            pathname === "/createpost" ? (
              <button
              type="button"
              onClick={ () => history.push('/posts')}
              >
                Todos as postagens
              </button>
            ) : (
              <button
                type="button"
                onClick={ () => history.push('/createpost')}
              >
                Criar nova postagem
              </button>
            )
          }
          <button
            type="button"
            onClick={ () => logOut() }
          >
            Sair
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;