export interface User {
  id: string;
  name?: string;
  surname?: string;
  username: string;
  email: string;
  password: string;
}

export interface UserCreate {
  name?: string;
  surname?: string;
  username: string;
  email: string;
  password: string;
}

export interface UserPatch {
  name?: string;
  surname?: string;
}

export interface Login {
  username: string;
  password: string;
}
