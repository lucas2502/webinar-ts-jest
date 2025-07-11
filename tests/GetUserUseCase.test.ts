import { GetUserUseCase } from "../src/usecases/GetUserUseCase";
import type { UserService } from "../src/domain/UserService";

const mockService = {
  getUserById: jest.fn(),
} as jest.Mocked<UserService>;

describe("GetUserUseCase", () => {
  test("should return user name", async () => {
    mockService.getUserById.mockResolvedValueOnce({ id: 1, name: "Luke" });

    const useCase = new GetUserUseCase(mockService);
    const result = await useCase.execute(1);

    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.value.name).toBe("Luke");
    }
  });

  test("should return error", async () => {
    mockService.getUserById.mockRejectedValueOnce(new Error("fail"));

    const useCase = new GetUserUseCase(mockService);
    const result = await useCase.execute(999);

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.error).toBeInstanceOf(Error);
    }
  });
});
