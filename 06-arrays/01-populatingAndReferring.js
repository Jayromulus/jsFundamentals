// Arrays

// Arrays are an object. they area  container that can hold multiple data types
// Has [ ] brackets
// Grreat fr lists


let students = ['Sebastian', 'Eric', 'Michael', 16, 74, false, ['Nic', 'Charles', 'Ethan']];

// console.log(typeof students);
// console.log(students instanceof Array);
// instance of checks that if it is a certain type of thing, returns true or false
console.log(students[2][2]);


let food = ['Pecan pie', 'shrimp', 'quesadillas', 'cheesecake', 'hot dog'];
food.push('pizza', 'pie');
food.splice(1, 1, 'crab');
food.splice(2, 0, 'popcorn');

food.pop();//removes last item in list
food.shift()//removes first item fromlist
food.unshift('Muffin', 'Apple')//inserts elements at the start of the array
console.log(food);

for (f in food) {
    console.log(food[f]);
    console.log(f);
}

