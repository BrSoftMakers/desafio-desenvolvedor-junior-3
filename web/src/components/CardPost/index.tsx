import React from "react";
import IPost from "../../interfaces/IPost";
import formattedDate from "../../lib/formattedDate";
import * as S from "./style";

export default function CardPost({ post }: { post: IPost }) {
  return (
    <S.CardPostContainer>
      <S.CardPostLink href={`/blog/post/${post.id}`}>
        <div className="thumbnail" />
        <div className="details">
          <h2>{post.title}</h2>
          <p>{post.subtitle || ""}</p>
          <div className="meta">
            <div>
              <span className="label">Escrito por</span>
              <span className="value">
                {post.author.name || post.author.username}
              </span>
            </div>
            <div>
              <span className="label">Publicado em</span>
              <span className="value">{formattedDate(post.createdAt)}</span>
            </div>
          </div>
        </div>
      </S.CardPostLink>
    </S.CardPostContainer>
  );
}
