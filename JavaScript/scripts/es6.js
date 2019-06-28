//Start
console.log("--Start--");

let word1 = "Nasser";
let word2 = "BinObied";
let num1 = 2;
let num2 = 3;

const FullName = word1 +" " + word2;
const FullName1 = `${word1} ${word2}`;
const sum = `${num1 + num2} ${word2}`;

console.log(FullName);
console.log(FullName1);
console.log(sum);

let example = "Hello \n" + "World";
let example2 = `${word1}
${word2}
`;
console.log(example);
document.getElementById("example").innerText = example2;

//Destructuring
console.log("--Destructuring--");

// const PersonalInformation = {
//     FirstName: "Nasser",
//     LastName: "BinObied",
//     City: "Riyadh",
//     State: "Riyadh",
//     ZipCode: 12477
// };

// const {FirstName: fn, LastName: ln} = PersonalInformation;

// console.log(`${FirstName} ${LastName}`);
// console.log(`${fn} ${ln}`);

//Destructuring Arrays
console.log("--Destructuring Arrays--");

let [FirstName, MiddleName, LastName] = ["Nasser", "Sad Engineer", "BinObied"];
LastName = "AlRammal";

console.log(LastName);

//Object Literal
console.log("--Object Literal--");

function AddressMaker(city, state) {
    const NewAddress = {city, state}
    console.log(NewAddress);
    
}

AddressMaker("Riyadh", "Riyadh");

function AddressMaker2(address) {
    const {city, state} = address;
    const NewAddress = {
        city,
        state,
        country: "KSA"
    }
    console.log(`${NewAddress.city}, ${NewAddress.state}, ${NewAddress.country}`);
}
AddressMaker2({city: "Riyadh", state: "ArrRiyadh"});

//For Loop
console.log("--For Loop--");

let Incomes = [6200, 67000, 75000];
let Total = 0;

// for (const income of Incomes) {
//     console.log(income);
//     Total += income;
// }

console.log(Total);

let fullName = "Nasser BinObied";

for (let char of fullName) {
    console.log(char);
}

for (let income of Incomes) {
    income += 5000;
    console.log(income);
}

//Spread Operation
console.log("--Spread Operation--");

let SpreadExample = [1,2,3,4,5,6];

let SpreadExample2 = {
    firstName: "Nasser"
}

let SpreadExample3 = {
    ...SpreadExample2
}
console.log(SpreadExample3);

//Rest Operation
console.log("--Rest--");

// function Add(...numbers){
//     console.log(numbers);
    
// };

// Add(2,3,4,5,6)

//Arrow Function
console.log("--Arrow Function--");

function Add(...numbers){
    // let Total = numbers.reduce(function (x,y){
    //     return x+y;
    // });
    let Total = numbers.reduce((x,y) => x + y);
    console.log(Total);    
};

Add(2,3,4,5,6);

//Default Params
console.log("--Default Params--");

function AddArray(NumberArray = []) {
    let total = 0;
    NumberArray.forEach(element => {
        total += element;
    });
    console.log(total);
};
AddArray();

//includes()
console.log("--includes()--");

let NumberArray = [1,2,3,4,5,6];
console.log(NumberArray.includes(0));

//Let/Const
console.log("--Let/Const--");

if(false){
    var example1 = 5;
};
console.log(example1);

//Import/Export
console.log("--Import/Export--");

// import { data } from './export.js';
// let UpdateData = data;

// UpdateData.push(5);

// console.log(UpdateData);

//padStart/padEnd
console.log("--padStart/padEnd--");
let PadExample = "Nasser";

console.log(PadExample.padEnd(10, "x"));

//Classes
console.log("--Classes--");

import { Animal, Cat } from "./animal.js";
let cat = new Cat("Cat", 4);

cat.legs = 3;
cat.MakeNoise();
console.log(cat);

console.log(Animal.return10());

console.log(cat.MetaData);

//Trailing Commas
console.log("--Trailing Commas--");
function AddCommas(param1,) {
    const example =  {
        name: "Dylan",
    };
    console.log(example);
};
AddCommas(2);

//Async/Await
console.log("--Async/Await--");

const apiUrl = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

// async function getTop100Campers() {
//     const respone = await fetch(apiUrl);
//     const json = await respone.json();
//     console.log(json[0]);
// }

// function getTop100Campers() {
//     fetch(apiUrl)
//     .then((r) => r.json())
//     .then((json) => {
//         console.log(json[0]);
//     }).catch((error) => {
//         console.log("failed");
//     });
// }

// getTop100Campers();

// function resolveAfter3Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("resolved")
//         }, 3000);
//     });
// };

// resolveAfter3Seconds().then((data) => {
//     console.log(data);
// });

// async function getAsyncData() {
//     const result = await resolveAfter3Seconds();
//     console.log(result);
// };

// getAsyncData();

//Sets
console.log("--Sets--");

const SetExample = new Set([1,1,1,1,2,2,2,2]);
SetExample.add(5);

console.log(SetExample.delete(5));


console.log(SetExample.size);
