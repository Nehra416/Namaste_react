import { Sum } from "../component/Sum";

test("Sum functon calculate the sum of two numbers", () => {
    const result = Sum(5, 3);

    // Assertion
    expect(result).toBe(8);
});
