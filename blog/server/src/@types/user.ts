export interface UserSchemaType {
  username: string;
  email: string;
  avatar: string;
  password: string;
  posts: [];
  generateToken: () => {};
  verifyToken: (candidatePassword: string) => {};
}

export type UserTokenPayloadType = {
  userId: string;
};
