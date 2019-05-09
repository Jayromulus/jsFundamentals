function returnSum(a, b) {
    return a + b;
}

console.log(returnSum(2,6));


function capitalizeName(name) {
    let capName = '';
    for(let l in name) {
        if(l==0) {
            capName += name[l].toUpperCase();
        }
        else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName);
    return capName
}

const myName = capitalizeName('jERomE');
console.log(`${myName} how are you doing?`);

function tipCalculator(amount, tipPercent) {
    let tipAmount = amount * (tipPercent/100)
    return tipAmount.toFixed(2);
}

let tipPer = 10;
let bill = 17650;

let billTotal = bill + tipCalculator(bill, tipPer);
let tipTotal = tipCalculator(bill, tipPer);
console.log(`Your suggested tip is ${tipTotal}`);
console.log(`Your bill total with tip is ${billTotal}`);