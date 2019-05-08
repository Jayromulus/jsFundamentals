// FOR IN LOOP

// great for iterating over values in an Object
// the for in statement iterates over a specified variable ver all the innumerable properties of an object

let student = {name:'Peter', awesome: true, degree:'javascript', week:'week 1'};
for(item in student) {
    // console.log('item =>', item);
    console.log('student[item] =>', student[item]);
}

let dogArray = ['collie', 'pittbull', 'newfie', 'st bernrd', 'dacshund'];
for(dog in dogArray) {
    console.log(dog);
}

let catArray = ['tabby', 'british shorthair', 'burmese','maine coon', 'rag doll'];
for(cat in catArray){
    console.log(cat);
}

let name = 'jErome'
let capName
for(let letter in name) {
    if(letter == 0) {
        capName = name[letter].toUpperCase();
    }
    else {
        capName += name[letter].toLowerCase();
    }
}
console.log(capName);