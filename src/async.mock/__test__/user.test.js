import { verifyUsername } from "../verify";
import { validate, register } from "../user";

jest.mock("../verify");
jest.mock("axios");

describe("register", () => {
  test("should post user when validated", () => {
    // TODO 19: add test here
    const result = validate("userName", "password");
    expect(result).toBeTruthy();
  });

  test("should reject with Error when username is invalid", async () => {
    // TODO 20: add test here
    verifyUsername.mockReturnValue(false);
    const result = register("userName", "password");
    await expect(result).rejects.toThrow("wrong username or password");
  });
});
