import { reverse } from "./reverse";

test("two letter strings", () => {
    expect(reverse("ab")).toBe("ba");
    expect(reverse("cd")).toBe("dc");
});

test("five letter strings", () => {
    expect(reverse("abcde")).toBe("edcba");
    expect(reverse("cinco")).toBe("ocnic");
});

test("empty string", () => {
    expect(reverse("")).toBe("");
});
