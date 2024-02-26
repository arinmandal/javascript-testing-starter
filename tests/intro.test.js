import { describe, test, it, expect } from "vitest";
import { max } from "../src/intro";
// "max" is a function name.
describe("max", () => {
  // Naming the test
  it('should return the first argument if it is greater', () => {
    // AAA : Arrange Act Assert
    // Arrange
    const a = 15;
    const b = 10;
    // Act
    const result = max(a, b);
    // Assert
    expect(result).toBe(15);

  })
  it('should return the second argument if it is greater', () => {
expect(max(10, 12)).toBe(12)
  })
  it('should return the first argument if it is equal', () => {
expect(max(10, 10)).toBe(10)
  })
})