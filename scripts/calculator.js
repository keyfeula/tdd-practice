const calculator = {
    add (op1, op2) {
        return op1 + op2;
    },
    subtract(op1, op2) {
        return op1 - op2;
    },
    divide(op1, op2) {
        if (op2 === 0) {
            return "Error: Cannot divide by 0";
        }
        return op1 / op2;
    },
    multiply(op1, op2) {
        return op1 * op2;
    }
}

export { calculator };