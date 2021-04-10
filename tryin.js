const people = [
    { name: 'chris', username: 'chrisoncode' },
    { name: 'holly', username: 'whatnicktweets' },
    { name: 'holly', username: 'hollylawly' },
];

console.log(people[1].name === 'holly')

//array starts form 0 to n-1

//filter returns array
//if condition satisfies it return the value

//Requirement -

/* 

Given an array of object find out the first element matching to the its value and return.

Input

const people = [
    { name: 'chris', username: 'chrisoncode' },
    { name: 'holly', username: 'basics' },
    { name: 'holly', username: 'pro' },
];

iterate over the array
access the each of element
check the given value condition with name

Value = 'holly'
Value = 'RCB'

OutPut 

If value found
{ name: 'holly', username: 'basics' }

If value not found
{ name: null, username: null}

*/



//functions

/* 

Functions? - Group of declared statements
Why? - 1. Reusability 
Alternatives -
Why not to use functions? -  


*/








let found = people.filter(person => person.name === 'holly')














//map returns array
let foundMap = people.map(person => person.name === 'holly')


console.log(found)
console.log(foundMap)