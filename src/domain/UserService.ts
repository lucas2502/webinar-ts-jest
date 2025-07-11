export interface User {
  id: number;
  name: string;
}

export interface UserService {
  getUserById(id: number): Promise<User>;
}
