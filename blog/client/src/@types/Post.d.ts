export interface PostType {
  title: string;
  content: string;
}

export type PostSchemaType = {
  _id: string;
  title: string;
  content: string;
  author: {
    _id: string;
    username: string;
    email: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
  __v: number;
};
