import { analyzeArray } from "./analyzeArray";

test("Analyze average of array [1, 2, 3]", () => {
    const object = { average: 2 }
    expect(analyzeArray([1, 2, 3]).average).toBe(object.average);
});

test("Analyze average of array [2, 4, 6]", () => {
    const object = { average: 4 }
    expect(analyzeArray([2, 4, 6]).average).toBe(object.average);
});

test("Analyze min of array [6, 4, 1]", () => {
    const object = { min: 1 }
    expect(analyzeArray([6, 4, 1]).min).toBe(object.min);
});

test("Analyze max of array [6, 4, 1]", () => {
    const object = { max: 6 }
    expect(analyzeArray([6, 4, 1]).max).toBe(object.max);
});

test("Analyze length of array [6, 4, 1]", () => {
    const object = { length: 3 }
    expect(analyzeArray([6, 4, 1]).length).toBe(object.length);
});

test("Analyze average, min, max, and length of [1, 2, 3]", () => {
    const object = { average: 2, min: 1, max: 3, length: 3 }
    expect(analyzeArray([1, 2, 3]).average).toBe(object.average);
    expect(analyzeArray([1, 2, 3]).min).toBe(object.min);
    expect(analyzeArray([1, 2, 3]).max).toBe(object.max);
    expect(analyzeArray([1, 2, 3]).length).toBe(object.length);
});