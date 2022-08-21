console.log("Fuctions in javascript file execution start");

/*

function add(argument1, argument2, argument3 ....){
    body
    return something;
}

*/


// function without return statement
/**
 * @param  {number} vedu
 * @param  {number} yash
 * @param  {number} askshu
 * Use the following function to get a return value {@link add_and_return}
 * ! warning...is it ready ?
 * TODO we can make it more better
 */
function add(vedu, yash, askshu){
    let result = vedu + yash + askshu;
    console.log(result);
}

add(2, 2, 1);


//  function with return statement
function add_and_return(vedu, yash, askshu){
    let result = vedu + yash + askshu;
    return result;
}

let myresult = add(2, 2, 1);
console.log(myresult);

// function subtract(a,b){
//     return a-b;
// }

// console.log(subtract(3,2));


// function to print table
// function printTable(number){
//     let i = 1;
//     while(i<=10){
//         console.log(number * i);
//         i = i + 1;
//     }
// }

// printTable(10);
// printTable(5);





// ! warning...is it ready ?
//  TODO we can make it more better