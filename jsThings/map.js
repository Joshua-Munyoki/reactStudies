/*
    Array.map() method is used to change elements of a given array based on an input modifier function
    which runs through all elements.
*/

// convert [1, 2, 3] to be [100, 200, 300]
// console.log(
//     [1, 2, 3].map(i => i * 100)
// )

// convert [1, 2, 3] to be [100, 200, 300] using custom function
const myMap = (arrayVal, modifierFunction) => {
    let results = [];
    let loopCount = 1;
    for (let elementValue of arrayVal) { //Will loop through each element in the array and the elements are initialized on the elementValue variable
        console.log(`Loop ${loopCount}=======================================`)
        console.log('0: ', results)
        console.log('1: ', elementValue)
        const x = modifierFunction(elementValue)
        console.log('3: ', x)
        results.push(x);
        console.log('4: ', results)
        console.log('================================================>>>')
        loopCount ++
    }
    return results;
}

// console.log(
//     myMap(
//         [1, 2, 3],
//         i => i * 100
//     )
// )

/*
conver this list
[
    {id: 6, name: 'mango'},
    {id: 4, name: 'orange'},
    {id: 7, name: 'banana'},
]
 to
['mango', 'orange', 'banana']
*/
// console.log(
//     [
//         { id: 6, name: 'mango' },
//         { id: 4, name: 'orange' },
//         { id: 7, name: 'banana' },
//     ].map(i => i.name)
// )

/*
conver this list using custom function
[
    {id: 6, name: 'mango'},
    {id: 4, name: 'orange'},
    {id: 7, name: 'banana'},
]
 to
['mango', 'orange', 'banana']
*/
console.log(
    myMap(
        [
            { id: 6, name: 'mango' },
            { id: 4, name: 'orange' },
            { id: 7, name: 'banana' },
        ],
        (i) => {
            console.log('2: ', i.name)
            return i.name
        }
    )
)