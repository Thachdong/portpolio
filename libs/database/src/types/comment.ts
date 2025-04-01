export type TCreateComment = {
  content: string;
  postId: string;
  authorId: string;
};

export type TMessage = {
  postId: string;
  message: string;
  sender: string;
};

export type TComment = {
  id: string;
  content: string;
  author: string;
  postId: string;
  createdAt: string;
};
