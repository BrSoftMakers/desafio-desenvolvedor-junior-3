import { Posts } from "@prisma/client";

export type Post = Posts;

export type ArrayOfPosts = Post[];

export type PostWithoudId = Omit<Post, "id">;

export type ArrayOfPostsWithoudId = PostWithoudId[];

export type PostParams = {
  title: string;
  content: string;
  authorId: string;
};

export type successPost = {
  post: Post;
};

export type updatePostParams = {
  id: string;
  data: Partial<PostWithoudId>;
};
