import React, { useEffect, useState } from "react";
import CardPost from "../../components/CardPost";
import IPost from "../../interfaces/IPost";
import api, { setToken } from "../../lib/api";
import * as S from "./style";
import sortDown from "../../assets/images/sort-down.svg";
import sortUp from "../../assets/images/sort-up.svg";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [orderByAsc, setOrderByAsc] = useState(false);
  const [filterByUser, setFilterByUser] = useState(false);

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
    const url = `/posts/${orderByAsc ? "?orderByAsc=true" : ""}${
      filterByUser ? "?filterByUser=true" : ""
    }`;
    getPosts(url);
  }, [orderByAsc, filterByUser]);
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
    <>
      <S.PostsFilters>
        <select
          onChange={() => setFilterByUser(!filterByUser)}
          defaultValue="Todos Posts"
        >
          <option>Todos posts</option>
          <option>Meus posts</option>
        </select>
        <button onClick={() => setOrderByAsc(!orderByAsc)} type="button">
          {orderByAsc ? <span>Mais antigos</span> : <span>Mais recentes</span>}
          {orderByAsc ? (
            <img src={sortDown} alt="sort-down" />
          ) : (
            <img src={sortUp} alt="sort-up" />
          )}
        </button>
      </S.PostsFilters>
      <S.BlogContainer>
        <div>
          {posts.map((post: IPost) => (
            <CardPost key={post.id} post={post} />
          ))}
        </div>
      </S.BlogContainer>
    </>
  );
}
