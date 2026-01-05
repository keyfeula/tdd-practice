export function reverse(string) {
    const charArray = string.split("");
    const reverseArray = charArray.reverse();
    const reverseString = reverseArray.join("");
    return reverseString;
}