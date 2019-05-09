// Arrow Functions

// Normal
function fun() {
    console.log('coffee is good');
}

// Fat Arrow
let coffee = () => {
    console.log('fat arrow coffee');
}
coffee();

// conside body
// considce bodies do not need parentheses, unless you have more than ONE parameter
// cannot run n multilple lines, does not like line breaks
// return is implied
let apples = (x, y) => console.log(`There are ${x} apples and ${y} Pears.`);
apples(10, 5);

// Block body
// allows line breaks, meaning more than one line
let apples = (x, y) => { console.log(`There are ${x} apples and ${y} Pears.`) };