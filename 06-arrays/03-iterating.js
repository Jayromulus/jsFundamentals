// Iterating

// forEach() method thateeevutes a function once for each array element

forEach('currentValue', 'the index', 'the entire array');

let food = ['Pecan pie', 'shrimp', 'quesadillas', 'cheesecake', 'hot dog'];

// food.forEach(f => {console.log(f)})
// food.forEach( (f, number) => { console.log(number, f) } );
food.forEach( (f, number, array) => { console.log(number, f, array) } );

let foodfunction = () => {
    for (f in food){
        console.log(f);
        console.log(food[f]);
        console.log(food);
    }
}
foodfunction();


let movies = ['Princess Mononoke', 'Fight Club', 'Hot Fuzz'];
movies.forEach((mov) => {console.log(mov)});
console.log();

movies.push('Interstellar');
movies.forEach((mov) => {console.log(mov)});
console.log();

movies.splice(1, 1, 'Spirited Away')
movies.forEach((mov) => {console.log(mov)});
