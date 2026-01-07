import { caesarCipher } from "./caesarCipher";

test("Shift abc by 3", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
});

test("Shift car by 4", () => {
    expect(caesarCipher("car", 4)).toBe("gev");
});

test("Shift xyz by 3 and wrap around back to abc", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Shift XYZ by 3 to ABC while keep characters uppercase still", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("Shift The dog! by 5 while not affecting non alphabet characters", () => {
    expect(caesarCipher("The dog!", 3)).toBe("Wkh grj!");
});