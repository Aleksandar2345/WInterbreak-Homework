// FUNCTIONS
console.log('Homework - FUNCTIONS')

// Task 1: Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.
console.log('Task 1');

function convertMinutsIntoSeconds(minutes) {
    parseInt(minutes);
    let result = minutes * 60;
    return `There are ${result} seconds in ${minutes} minutes`;
}
console.log(convertMinutsIntoSeconds(9));


// Task 2: Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1 and returns the result.
console.log('Task 2');

function returnTheNextNumber(x) {
    parseInt(x);
    let result = x + 1;
    return `The incremented number is ${result}`;
}
console.log(returnTheNextNumber(5));


// Task 3: Convert Hours into Seconds
// Write a function that converts hours into seconds.
console.log('Task 3');

function convertHoursIntoSeconds (hours) {
    parseInt(hours);
    let result = hours * 3600;
    return `There are ${result} seconds in ${hours} Hours`;
}
console.log(convertHoursIntoSeconds(5));

// Task 4: Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
console.log('Task 4');

function returnRemainder(x, y) {
let result = x % y;
return `The remainder of the division is ${result}`;
}
console.log(returnRemainder(20, 4));

// Task 5: The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
console.log('Task 5');

function howManyLegs (chickens, cows, pigs) {
    result = chickens * 2 + cows * 4 + pigs * 4;
    return `The farmer has a total of ${result} legs`;
}
console.log(howManyLegs(2, 2, 2));

// Task 6: Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
console.log('Task 6');

function compareStringsByCount(string1, string2) {
    if(string1.length == string2.length) {
    return true; } else {
    return false;
    }
}
console.log(compareStringsByCount('black', 'green'));

// Task 7: Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
console.log('Task 7');

function determineSingularOrPlural(someWord) {
    if (someWord.slice(-1) == 's') {
    return 'Plural';
    } else {
    return 'Singular';
    }
}
console.log(determineSingularOrPlural('Horses'));

// Task 8: Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.
console.log('Task 8');

function validateIdentity (string1, string2) {
    if (string1 === string2) {
    return 'The strings are identical';
    } else {
    return 'The strings are not identical';
    }
}
console.log(validateIdentity('bear', 'Bear'));

// Task 9: Convert Number to Corresponding Month Name
// Create a function that takes a number and returns its corresponding month name as a string. For example, if you're given 3 as input, 
// your function should return "March", because March is the 3rd month.
console.log('Task 9');

function monthsOfTheYear(numberInput) {
    switch(numberInput) {
        case 1: 
            return 'The month you have selected is January';
            break;
        case 2: 
            return 'The month you have selected is February';
            break;
        case 3: 
            return 'The month you have selected is March';
            break;
        case 4: 
            return 'The month you have selected is April';
            break;
        case 5: 
            return 'The month you have selected is May';
            break;
        case 6: 
            return 'The month you have selected is June';
            break;
        case 7: 
            return 'The month you have selected is July';
            break;
        case 8: 
            return 'The month you have selected is August';
            break;
        case 9: 
            return 'The month you have selected is September';
            break;
        case 10: 
            return 'The month you have selected is October';
            break;
        case 11: 
            return 'The month you have selected is November';
            break;
        case 12: 
            return 'The month you have selected is December';
            break;
        case 13: 
            return 'Please enter a number between 1-12';
            break;
    }
}
console.log(monthsOfTheYear(5));

// Task 10: Write a functions that accepts one parameter and checks if the parameter is a Truthy or Falsy?
console.log('Task 10');

function truthyOrFalsy(parameter){
    if (typeof(parameter) == 'number' || typeof(parameter) == 'string' || typeof(parameter) == 'boolean'){
    return true;
    } else { 
    return false;
    }
}
console.log(truthyOrFalsy('cat'));



// ARRAYS
console.log('Homework - ARRAYS')

// Task 0: Create an array
// Create a function that takes an number and creates array with all numbers till that number.
console.log('Task 0');

let someArray = [];
function createArray (n) {
    for (i = 1; i < n; i++) {
    someArray.push(i);
    }
    return someArray;  
}
console.log(createArray(10));


// Task 1: Return the First Element in an Array
// Create a function that takes an array and returns the first element.
console.log('Task 1');

arrayFirstElement = ['bear', 2, 'blabla', 55];

function returnFirstElement (someArray) {
    return `The first element in the array is: ${someArray[0]}.`;
}
console.log(returnFirstElement(arrayFirstElement));

// Task 2: Reverse an Array
// Write a function to reverse an array.
console.log('Task 2');

arrayReverse = [1, 2, 3, 4, 5, 6, 7];

function reverseArray(someArray){
    return someArray.reverse();
}
console.log(reverseArray(arrayReverse));

// Task 3: Find the Index
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.
console.log('Task 3');

function findTheIndex(index){
    arrayFindIndex = ['goal', 'number', 33, 55, 'asd'];

    if (index < arrayFindIndex.length){
        return index;
    } else {
        return -1;
    }
 }
console.log(findTheIndex(6));


// Task 4: Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.
console.log('Task 4');

arrayContainGivenNumber = [22, 5454, 66, 7777, 88888];

function checkIfContain(givenNumber) {
    if (arrayContainGivenNumber.includes(givenNumber)) {
        return `The array contains ${givenNumber}`;
    } else {
        return `The array does not contain ${givenNumber}`;
    }
    }
console.log(checkIfContain(666));

// Task 5: Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.
console.log('Task 5');

arrayPositiveNumbers = [55, 66, 77, 99];

function negateNumbers(someArray){
    return someArray.map(x => x * -1);
}
console.log(negateNumbers(arrayPositiveNumbers));

// Task 6: Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.
console.log('Task 6');

arrayMaxAndMin = [100, 200, 300, 4000, 5000, 6000];

function differenceMaxAndMin(someArray) {
    min = Infinity;
    max = -Infinity;

    for (let number of someArray){
    if(number > max) {
        max = number;
    }
    if(number < min) {
        min = number;
    }
}
    result = max - min;
    return result;
}
console.log(differenceMaxAndMin(arrayMaxAndMin));


// Task 7: Multiply by Length
// Create a function to multiply all values in an array by the amount of values in that array.
console.log('Task 7');

arrayMultiplyByLength = [11, 22, 33, 44];

function multiplyByLength(someArray) {
    return someArray.map(x => x * someArray.length)
}
console.log(multiplyByLength(arrayMultiplyByLength));

// Task 8: Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.
// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.
console.log('Task 8');

hurdleHeights = [10, 20, 40, 50];
jumperrHeights = [22, 33, 45, 52];

function hurdleJump(someArray1, someArray2) {
    hurdleMax = Math.max(...someArray1);
    jumperMax = Math.max(...someArray2);

    if (hurdleMax <= jumperMax) {
        return `The statement that the jumper can clear the hurdle's is: true`;
    } else {
        return `The statement that the jumper can clear the hurdle's is: false`;
    }
}
console.log(hurdleJump(hurdleHeights, jumperrHeights));

// Task 9: Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.
console.log('Task 9');

let arrayCountdown = [];
function generateCountdown (n) {
    for (i = 1; i < n; i++) {
        arrayCountdown.unshift(i);
    }
    return arrayCountdown;  
}
console.log(generateCountdown(10));

// Task 10: Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd number and decrementing (-1) for each even number.
console.log('Task 9');

arrayOddUpEvenDown = [1,2,3,4,5,6,7,8,9,10,11,12,13];

function oddUpEvenDown (someArray) {
for (let i = 0; i < someArray.length; i++){
    if (someArray[i] % 2 == 1) {
        someArray[i]++;
    } else {
        someArray[i]--;
    }
}
return someArray;
}
console.log(oddUpEvenDown(arrayOddUpEvenDown));

