// Types
// Boolean
let on = true;
console.log(true);

let off = false;
console.log(off);

// Null
// Null = empty value (not 0 not undefined)
let empty = null;
console.log(empty);

// Undefined
// not an error, just no value is assigned
let undef;
console.log(undef);

// Numbers
let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

// Strings
// Strings are any value within quotes
let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

let third = 1050 + '100';
console.log(third);
console.log(typeof third);





// Challenge
let firstName = 'Jerome';
let lastName = 'Flaherty';
let houseNumber = 1320;
let street = 'Twilight Dr';
let city = 'Noblesville';
let state = 'IN';
let zipcode = 46060;
console.log(firstName, lastName, houseNumber, street + ', ' + city + ', ' + state, zipcode);




// objects
// collection of key value pairings
// hold multiple data types

// demotes by { }

// has keys and values (color (key): 'blue' (value)), seperated by a colon

let burritosNow = {
    size : 'large',
    quantity : 4,
    now : true
};

console.log(burritosNow);
console.log(burritosNow.size);
console.log(typeof burritosNow);

// arrays

// great for lists
// denotes with [ ]
// list of data that is seperated by commas
// has values ('blue', 'green', 'yelow')

let burritos = ['large', 4, true];
console.log(burritos);
console.log(burritos[0]);
console.log(typeof burritos);