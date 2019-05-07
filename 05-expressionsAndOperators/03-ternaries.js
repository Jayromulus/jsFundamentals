// Ternaries

// shorthand of an if/else if statement

let x = 6;

// if
if (x > 0) {
    console.log('yes');
}
else {
    console.log('no');
}


// ternary
(x > 0) ? console.log('yes') : console.log('no)');
//Condition (? = if) return (: = else) returnn;


let x = 6;
// conditional statement
if(x == 0) {
    console.log('Hello');
}
else if (x > 0) {
    console.log('Hi');
}
else {
    console.log('Goodbye');
}

let x = 6;
//ternary operator
(x == 0) ? console.log('Hello') : (x < 0) ? console.log('Hi') : console.log('Goodbye');


let age = 20;
(age >= 25) ? console.log('yay you can rent a car') : (age >= 21) ? console.log('yay you can drink') : (age >= 18) ? console.log('yay you can vote') : console.log('you are not old yenough to do anything');


let yep = -8;
(yep < 0 && yep > -10) ? console.log('worked') : (yep > 0) ? console.log('worked') : console.log('didnt work');