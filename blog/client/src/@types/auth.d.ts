export type AuthContextType = {
  user: {
    token: string;
    username: string;
  } | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
};

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  confirm_password: string;
  avatar: File;
}

export interface authenticatedUser {
  username: string;
  token: string;
}
