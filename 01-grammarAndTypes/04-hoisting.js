// Hoisting

console.log(scissors);
scissors = 'blue';

console.log(scissors);
var scissors;

// JS reads code twice first time, its looking for let hand values such as declarations, second time it reads the right hand side and assigns values and expressions
