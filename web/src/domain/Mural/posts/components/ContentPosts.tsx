/* eslint-disable camelcase */
import React from 'react';
import { Card } from '../../../../components/card/Card';

interface User {
  id_user: string;
  username: string;
  fullName: string;
  age: number;
  createdAt: string;
}

interface Post {
  id_post: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  dataUser: User;
}

interface Props {
  posts: Post[];
}

export const ContentPosts = (props: Props): JSX.Element => {
  const { posts } = props;

  return (
    <div>
      {posts.map(post => (
        <Card key={post.id_post} post={post} />
      ))}
    </div>
  );
};
