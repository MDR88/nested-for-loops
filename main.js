// Created an array of first and last names. 
const firstName = ["fred", "Seth", "Tommy", "Bobby", "Rachel", "Carl", "Brian", "Dennis", "Al", "Sara", ];

const lastName = ["Rivers", "Roberts", "McCalister", "Johnson", "Singer", "Launer", "Benedict", "Wilson", "Bradshaw", "Karnes"];

// Declare and create an empty array

const fullNames = [];

// Next I'll create the two for loops to combine the first and last names

for (let i = 0; i < firstName.length; i++) {
    for (let j = 0; j < lastName.length; j++) {
        fullNames.push(firstNames[i] + lastName[j]);
    }


}
console.log(fullNames)