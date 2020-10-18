/*
    Array.find() method is used to return the value or element found inside and array
    the find() method of an array requires a function as its input, this will be used to find whatever element one is searching for
    Array.find( findingFunction(element) { ... } )

    this findingFunction(element) { ... } will be run for every element within the array,
    this findingFunction(element) { ... } requries one to return either true or false

    if findingFunction(element) { ... } returns true, it will return the element from that array and stop iterations to the next elements
    if findingFunction(element) { ... } return false for all iterations it will return undefined

    Find inside the array if it includes a value 67
    [23, 45, 67].find( element => element === 67 )
*/

console.log(
    'find 67 in [23, 45, 67, 83,773, 838]',
    [23, 45, 67, 83,773, 838].find(
        (element) => {
            const foundValue = element === 67;
            console.log('Currently looking at element', element, 'is it same as 67?', foundValue)
            return foundValue;
        }
    )
)

console.log(
    'find name is child in [{name: "man"}, {name: "woman"}, {name: "child"}]',
    [{name: "man"}, {name: "woman"}, {name: "child"}].find(
        (element) => {
            const foundValue = element.name === 'child';
            console.log('Currently looking at element', element.name, 'is it same as child?', foundValue)
            return foundValue;
        }
    )
)