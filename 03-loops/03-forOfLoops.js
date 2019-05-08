// FOR OF LOOPS

// The for... of statement creates a loop iterating over iterable objects, meaning it can numerically look over these itesms.

let student = {name: 'Peter', awesome: true, degree: 'javascript', week: 1}

for (item of student) {
    console.log(item);
}


let catArray = ['tabby', 'british shorthair', 'burmese','maine coon', 'rag doll'];

for(cat of catArray) {
    console.log(cat);
}