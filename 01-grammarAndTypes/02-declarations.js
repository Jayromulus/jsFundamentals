// Variables
// variables are containers for storing data values (words, sentences, numbers, objects, etc.)

var a = 1;
var b = 2;
console.log(a + b);

/* Notes:

1. a variable must begin with a letter, an underscore, or a dollar sign
2. numbers may follow the aove characters but cannot come first
3. Javascsript is case sensitive -- 'hello' and 'Hello' are different variable names
4. variables must be identified with unique names

*/

var x;
console.log('Declaration', x);

x = 10;
console.log('Initialization 1:', x);

x = 33;
console.log('Initialization 2:', x);

var y = 'hello';
console.log('Both:', x, y);

// Var, Let, and Const;

// Var = 'old' keyword;
// Let = 'new' keyword;
// Const = also 'new' keyword, immmutable;

let today = 'great!';
const elevenFifty = 'wonderful';
console.log(today, elevenFifty);

today = 'lovely!';
console.log(today, elevenFifty);

elevenFifty = 'super!';
console.log(today, elevenFifty);
