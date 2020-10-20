/*
1.create a function that will add 2 numbers.
2. Create a function that will add all values in this array [757,352,989,443]
3. Create a function that can perform addition subtraction multiplication & division of 2 numbers  
*/

const func1 = (a) => console.log(a)
const func2 = (a) => {
    return console.log(a)
}

const func3 = (a) => {
    return console.log(`inside func 3 ${a}`)
}

const func4 = (a) => {
    return a
}
/*
func1(1);
func2(2);
let b = func3("kok");
console.log(b)

let c = func4("kok");
console.log(c)
*/
let d = func3;
console.log(d, d(33))

const funcAdd = (a, b) => (
    a + b
);

console.log(`Function which add 2 numbers = ${funcAdd(10, 20)}`);

let figures = [757, 352, 989, 443];

const total = (array) => (
    // .Reduce() method executes a render function on each element of an array resulting in one single output value.

    array.reduce(
        (eachNum, currentVal) => eachNum + currentVal
    )
);

console.log(`Function which returns total of an array [${figures}] = ${total(figures)}`)

const calculator = (a, symbol, b) => {
    if (symbol === "+") {
        return a + b
    } else if (symbol === "-") {
        return a - b
    } else if (symbol === "*") {
        return a * b
    } else if (symbol === "/") {
        return a / b
    } else {
        return "wrong input"
    }
}

console.log(
    "addition with func calculator = ", calculator(22, "+", 2),
    "subtraction with func calculator = ", calculator(22, "-", 2),
    "multiplication with func calculator =", calculator(22, "*", 2),
    "division with func calculator =" , calculator(22, "/", 2)
    )