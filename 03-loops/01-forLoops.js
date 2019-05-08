// FOR LOOPS

/*
A loop is a rogramming tolol that repeats a set f instructions intil a specified condition is met
*/

const vacationSpots = ['Florence', 'Copenhagen', 'Istanbul'];

for (i = 0; i < 3; i++) {
    console.log(vacationSpots[i]);
}


// Types of lops
/*
for Loops statement
do While wtatement
While statement
Labeled statemeent
break statement
continue statement
for in statement
for of statement
*/

for (i=0; i<10; i++) {
    console.log(i);
}


for(i=2; i<22; i+=2) {
    console.log(i);
}

for (i=10; i>-1; i--) {
    console.log(i);
}

for (i = 0; i >= -24;i -= 2) {
    console.log(i);
}



let name = 'Jerome';

for (p = 0; p < name.length; p++) {
    console.log(name[p]);
}

let sum = 0

for(n = 0; n <= 50; n++) {
    sum+=n; 
}
console.log(sum);

