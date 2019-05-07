// Scope

// JS hasfunction scope
// scope determines accessibility of variables
// Variables defined inside a function are not accessible from outside

// Local and Global Scope

let x = 12;
function scope() {
    let x = 33;
    console.log(x);
}
scope();
console.log(x);

// are they global by default or is it still a defined trait?

let x = 12

function coffee() {
    x = 33;
    console.log(x);
}
coffee();
console.log(x);

// Var vs Let

// var test
var x = 12;

function donut() {
    var x = 33;
    if (true) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

donut();
console.log(x);

// let test
var x = 12;

function scope() {
    var x = 33;
    if (true) {
        let x = 45;
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);

// const test
var x = 12;

function scope() {
    const x = 33;
    if (true) {
        const x = 45;
        console.log(x);
    }
    console.log(x);
}

scope();
console.log(x);