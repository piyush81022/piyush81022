// program for a simple calculator
let result;
// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');
// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 =parseFloat(prompt('Enter second number: '));
switch(operator) {
 case '+':
 result = number1 + number2;

// In the above program, the user is asked to enter either +, -,
// * or /, and two operands. Then,
// the switch statement executes cases based on the user input.
// JavaScript switch With Multiple Case
// In a JavaScript switch statement, cases can be grouped to share the same code.
//Example 4: switch With Multiple Case
 console.log(`${number1} + ${number2} = ${result}`);
 break;
 case '-':
 result = number1 - number2;
 console.log(`${number1} - ${number2} = ${result}`);
 break;
 case '*':
 result = number1 * number2;
 console.log(`${number1} * ${number2} = ${result}`);
 break;
 case '/':
 result = number1 / number2;
 console.log(`${number1} / ${number2} = ${result}`);
 break;
 default:
 console.log('Invalid operator');
 break;
}
