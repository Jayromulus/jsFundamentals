
let myName = 'Jerome';

if('Jerome' === myName) {
    console.log('Hello, my name is', myName);
}
else {
    console.log('Hello, what is your name?');
}




let myName = 'jErOmE';

if(myName.substring(0, 1).toUpperCase() + myName.substring(1).toLowerCase() !== myName){
    myName = myName.toLowerCase()
    myName = myName.substring(0, 1).toUpperCase() + myName.substring(1);
    console.log(myName);
}
else {
    console.log(myName);
}


let myName = 'jErOmE';
if (myName [0] == myName[0].toUpperCase()) {
    firstLetter = myName[0] + name.slice[1].toLowerCase();
    console.log(firstLetter);
} else {
    otherLetters = myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase();
    console.log(otherLetters);
}

let age = 20;


if (age >= 25) {
    console.log('Yay! you can rent a car');
}
else if (age >= 21) {
    console.log('Yay! You can drink.');
}
else if (age >= 18) {
    console.log('Yay! ou can vote');
}
else {
    console.log('You\'re too young to do anything');
}