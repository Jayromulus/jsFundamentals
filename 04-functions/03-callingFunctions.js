// CALLING FUNCTIONS

function hi() {
    console.log('HI');
}

hi()

function numbersToTen() {
    for(i=1; i<11; i++) {
        console.log(i);
    }
}

numbersToTen();


arr = ['This', 'is', 'really', 'cool'];

function individual(input) {
    for (word of input) {
        console.log(word);
    }
}

individual(arr);