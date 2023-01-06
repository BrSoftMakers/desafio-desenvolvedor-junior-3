import React, { useEffect, useState } from "react";
import CardPost from "../../components/CardPost";
import IPost from "../../interfaces/IPost";
import api, { setToken } from "../../lib/api";
import * as S from "./style";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  console.log("🚀 ~ file: index.tsx:7 ~ Blog ~ posts", posts);
  // orderByAsc
  // filterByUser

  const getPosts = async (endpoint: string) => {
    try {
      const token = localStorage.getItem("SMtoken");
      if (token) setToken(JSON.parse(token));

      const { data } = await api.get(endpoint);
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const endpoint = "/posts";

    if (posts.length === 0) {
      getPosts(endpoint);
    }
  }, [posts]);

  if (!posts.length) {
    return <p>Loading...</p>;
  }
  return (
    <S.BlogContainer>
      <div>
        {posts.map((post: IPost) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
    </S.BlogContainer>
  );
}
