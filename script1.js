function calculator(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Error: Division by zero";
            }
        default:
            return "Error: Invalid operator";
    }
}
console.log(calculator(10, 5, '+'));  // 15
console.log(calculator(10, 5, '-'));  // 5
console.log(calculator(10, 5, '*'));  // 50
console.log(calculator(10, 5, '/'));  // 2
console.log(calculator(10, 0, '/'));  // Error: Division by zero
