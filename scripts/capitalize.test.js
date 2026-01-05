import { capitalize } from "./capitalize";

test("capitalize one char string", () => {
    expect(capitalize("a")).toBe("A");
});

test("capitalize one char string", () => {
    expect(capitalize("ba")).toBe("Ba");
});

test("empty string", () => {
    expect(capitalize("")).toBe("");
});

test("whitespace string", () => {
    expect(capitalize("   ")).toBe("   ");
});

test("long string", () => {
    expect(capitalize("this is a test")).toBe("This is a test");
});
