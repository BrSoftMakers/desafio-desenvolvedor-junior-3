import { Posts } from "@prisma/client";

export type Post = Posts;

export type ArrayOfPosts = Post[];

export type PostWithoudId = Omit<Post, "id">;

export type ArrayOfPostsWithoudId = PostWithoudId[];

export type PostParams = {
  title: string;
  demo?: string;
  content?: string;
  authorId: string;
  authorEmail?: string;
  authorName?: string;
  categories?: string[];
};

export type successPost = {
  post: Post;
};

export type updatePostParams = {
  id: string;
  data: Partial<PostWithoudId>;
};
