export function analyzeArray(array) {

    const total = array.reduce((prev, current) => prev + current, 0);
    const average = total / array.length;
    const sorted = array.sort((a, b) => a - b);

    return {
        average,
        min: sorted[0],
        max: sorted[array.length - 1],
        length: array.length
    }
}