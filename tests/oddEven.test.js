import { describe, it, test, expect } from "vitest";
import { oddEven } from "../src/oddEven";
// TDD
describe('oddEven', () => {
  it('should return even when the argument is divisible by 2', () => {
    expect(oddEven(2)).toBe('even');
  })
  it('should return even when the argument is divisible by 2', () => {
    expect(oddEven(3)).toBe('odd');
  })
})