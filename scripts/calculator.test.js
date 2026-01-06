import { calculator } from "./calculator";

test("Add function: 1 + 1", () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test("Add function: 2 + -5", () => {
    expect(calculator.add(2, -5)).toBe(-3);
});

test("Add two negative numbers", () => {
    expect(calculator.add(-2, -4)).toBe(-6);
});

test("Subtract function: 1 - 1", () => {
    expect(calculator.subtract(1, 1)).toBe(0);
});

test("Subtract two positive numbers", () => {
    expect(calculator.subtract(5, 2)).toBe(3);
});

test("Subtract a positive and a negative number", () => {
    expect(calculator.subtract(5, -2)).toBe(7);
});

test("Subtract two negative numbers", () => {
    expect(calculator.subtract(-2, -5)).toBe(3);
});

test("Divide 4 by 2", () => {
    expect(calculator.divide(4, 2)).toBe(2);
});

test("Divide a positive number by a negative number", () => {
    expect(calculator.divide(4, -2)).toBe(-2);
});

test("Divide two negative numbers", () => {
    expect(calculator.divide(-9, -3)).toBe(3);
});

test("Divide by zero", () => {
    expect(calculator.divide(1, 0)).toBe("Error: Cannot divide by 0");
});

test("Divide where op1 < op2", () => {
    expect(calculator.divide(2, 8)).toBe(1/4);
});

test("Multiply two positive numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test("Multiply a positive and a negative number", () => {
    expect(calculator.multiply(2, -3)).toBe(-6);
});

test("Multiply two negative numbers", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
});

test("Multiply by zero", () => {
    expect(calculator.multiply(2, 0)).toBe(0);
});