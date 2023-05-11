import React from 'react';
import withAuthentication from '../../routes/auth';

function PostForm() {
  return <section>Em construção</section>;
}

const AuthenticatedComponent = withAuthentication(PostForm);

export default AuthenticatedComponent;
