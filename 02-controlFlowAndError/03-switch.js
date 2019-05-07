// SWITCH

let friend = 'Jacob';

switch (friend) {
    case "Tom":
        console.log('Hey Tom, whe are you going rock climbing?');
    break;
    case "Ken":
        console.log('Hey Ken, wanna play Catan?');
    break;
    case "Carolyn":
        console.log('Hey Carolyn, when are we playing DnD?');
    break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

// String interpolation allows us to create a placeholder for the calue of a cariable that wechoose to assign
// takes place of concatinating the string into a diferent 

let dessert = 'flan';

switch (dessert) {
    case 'pie':
        console.log('Pie, pie, me oh my!');
    break;
    case 'cake':
        console.log('Cake is great!');
    break;
    case 'ice cream':
        console.log('I screamm for ice cream');
    break;
    default:
        console.log(` ${dessert} is not on the menu`);
}


let yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.log('worked');
        break;
    default:
        console.log('didn\'t work');
}


