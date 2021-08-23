/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable camelcase */
import React from 'react';
import { Layout } from '../../../../components/layout/Layout';
import http from '../../../../config/http';
import { BtnCreatePost } from '../components/BtnCreatePostMural';
import { ContentPosts } from '../components/ContentPosts';

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

export const MuralContainer = (): JSX.Element => {
  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    http.get('/posts/list-reverse').then(response => setPosts(response.data));
  }, []);

  return (
    <Layout>
      <ContentPosts posts={posts} />
      <BtnCreatePost />
    </Layout>
  );
};
