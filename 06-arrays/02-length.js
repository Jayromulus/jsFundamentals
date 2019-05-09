// length

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(long.length);

let colors = ['blue', 'red', 'green', 'yellow', 'orange', 'purple']
console.log(colors.length);

console.log(colors.toString());

console.log(typeof colors);
console.log(typeof colors.toString());

let arr = [1,2,3,4,5]
let newArr = [];
if (arr instanceof Array == true) {
    arr.forEach( item => {newArr.unshift(item)} );
}

newArr.forEach( item => {console.log(newArr[item-1]) } );



let arr = [1,2,3,4,5];
if (arr instanceof Array){
    arr.reverse(arr);
    console.log(arr.toString());
}else {
    console.log('not an array');
}