const keywords = [
  "abstract",
  "arguments",
  "await",
  "boolean",
  "break",
  "byte",
  "case",
  "catch",
  "char",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "double",
  "else",
  "enum",
  "evalexport",
  "extends",
  "false",
  "final",
  "finally",
  "float",
  "for",
  "function",
  "goto",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "int",
  "interface",
  "let",
  "long",
  "native",
  "new",
  "null",
  "package",
  "private",
  "protected",
  "public",
  "return",
  "short",
  "static",
  "super",
  "switch",
  "synchronized",
  "this",
  "throw",
  "throws",
  "transient",
  "true",
  "try",
  "typeof",
  "var",
  "void",
  "volatile",
  "while",
  "with",
  "yield",
];

const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*/;
const numberRegex = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?/;
const stringRegex = /^(["'])(?:(?=(\\?))\2.)*?\1/;
const commentRegex = /^\/\/.*|\/\*[\s\S]*?\*\//;
const whitespaceRegex = /^\s+/;
const operatorRegex =
  /^(?:(?:\+\+|--|\*\*|\+=|-=|\*=|\/=|===(?!==)|==(?!>)|<=|>=|=>|!|&|\||&&|\?|:|(?<![.\d])\.(?![.\d]))|[-+*/%=&|!<>^])/;
const otherRegex = /^[(){};,[\]]/;

function tokenize(sourceCode) {
  let tokens = [];

  let remainingCode = sourceCode;
  while (remainingCode.length > 0) {
    let match;
    if (remainingCode.match(commentRegex) !== null) {
      match = remainingCode.match(commentRegex);
      //tokens.push({ type: 'comment', value: match[0] });
    } else if (remainingCode.match(stringRegex) !== null) {
      match = remainingCode.match(stringRegex);
      tokens.push({ type: "string", value: match[0] });
    } else if (remainingCode.match(identifierRegex) !== null) {
      match = remainingCode.match(identifierRegex);
      const token = match[0];
      const isKeyword = keywords.includes(token);
      tokens.push({ type: isKeyword ? "keyword" : "identifier", value: token });
    } else if (remainingCode.match(numberRegex) !== null) {
      match = remainingCode.match(numberRegex);
      tokens.push({ type: "number", value: match[0] });
    } else if (remainingCode.match(operatorRegex) !== null) {
      match = remainingCode.match(operatorRegex);
      tokens.push({ type: "operator", value: match[0] });
    } else if (remainingCode.match(otherRegex) !== null) {
      match = remainingCode.match(otherRegex);
      tokens.push({ type: "other", value: match[0] });
    }

    if (match) {
      remainingCode = remainingCode.replace(match[0], "");
    } else {
      remainingCode = remainingCode.slice(1);
    }
  }

  return tokens;
}

// Test the lexical analyzer
const sourceCode = [
  `
    // program to generate fibonacci series up to n terms
    // take input from the user

    const number = parseInt(prompt('Enter the number of terms: '));
    let n1 = 0, n2 = 12.2, nextTerm;

    console.log('Fibonacci Series:');

    for (let i = 1; i < number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    `,
  `
    var number = 2
    if (number < 0) {
        console.log('Error');
    }

    // if number is 0
    else if (number === 0) {
        console.log(1);
    }

    // if number is positive
    else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        console.log(fact);
    }
    `,
  `
    // program to check an Armstrong number of three digits

    let sum = 0;
    const number = prompt('Enter a three-digit positive integer: ');

    // create a temporary variable
    let temp = number;
    while (temp > 0) {
        // finding the one's digit
        let remainder = temp % 10;

        sum += remainder * remainder * remainder;

        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
    // check the condition
    if (sum == number) {
        console.log(number + " is an Armstrong number");
    }
    else {
        console.log(number + " is not an Armstrong number");
    }
    `,
  `
    let n1 = x==4 ? 2 : 3;
    if(number===0){
        console.log(12.3)
    }
    let z = 12.5;
    z++;
    z *= 2;
    let car = {color:"blue", size:5};
    car.color = "red";
    let u == 5<=2 ? 3 : 1;
    car.start();
    `,
];

const tokens = tokenize(sourceCode[0]);
console.log(tokens);
console.log(tokens.length);
