import type { UserService } from '../domain/UserService';
import { type Result, ok, err } from '../domain/result';

export class GetUserUseCase {
  constructor(private readonly service: UserService) {}

  async execute(id: number): Promise<Result<{ name: string }, Error>> {
    try {
      const user = await this.service.getUserById(id);
      return ok({ name: user.name });
    } catch (error) {
      return err(new Error('User not found'));
    }
  }
}
