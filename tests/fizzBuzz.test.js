import { describe, test, it, expect } from "vitest";
import { fizzBuzz } from "../src/intro";
describe("fizzBuzz", () => {

  it("should return FizzBuzz if number is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  })
  it("should return Fizz if number is divisible by 3", () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  })
  it("should return Buzz if number is divisible by 5", () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  })
  it("should return arg as a string if number is not divisible by 3 and 5", () => {
    expect(fizzBuzz(1)).toBe('1');
  })
}
)