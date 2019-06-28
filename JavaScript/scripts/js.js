//Strings
console.log("--Strings--");

let FirstName = "Nasser";
let LastName = "BinObied";
let FullName;

console.log(`${FirstName} ${LastName}`.trim().length);
console.log(`${FirstName} ${LastName}`.toLocaleLowerCase());
console.log(`${FirstName} ${LastName}`.toLocaleUpperCase());
console.log(`${FirstName} ${LastName}`.split(''));

FullName = `${FirstName} ${LastName}`;
console.log(FullName);

//Numbers
console.log("--Numbers--");
let NumberExample = 3.33;

console.log(parseInt(NumberExample));
console.log(parseFloat(NumberExample));
console.log(NumberExample.toFixed(5));

let NumberExample1 = parseInt("Hello 33 World 22");
let NumberExample2 = parseFloat('44 Dylan 33');
let NumberExample3 = 55.3333.toFixed(0);
let NumberExample4 = 200.0.toFixed(2);

console.log(typeof NumberExample1);
console.log(typeof NumberExample2);
console.log(typeof NumberExample3);
console.log(typeof NumberExample4);

//Boolean
console.log("--Boolean--");
let BooleanExample = true;

console.log(Boolean(BooleanExample));

let BooleanExample1 = false;
let BooleanExample2 = true;
let BooleanExample3 = null;
let BooleanExample4 = undefined;
let BooleanExample5 = '';
let BooleanExample6 = NaN;
let BooleanExample7 = -5;
let BooleanExample8 = 0;

console.log(Boolean(BooleanExample1));
console.log(Boolean(BooleanExample2));
console.log(Boolean(BooleanExample3));
console.log(Boolean(BooleanExample4));
console.log(Boolean(BooleanExample5));
console.log(Boolean(BooleanExample6));
console.log(Boolean(BooleanExample7));
console.log(Boolean(BooleanExample8));

//Arrays
console.log("--Arrays--");
let ArrayExample = [5,6,7];
ArrayExample.push(8);
ArrayExample.pop();

ArrayExample.forEach(element => {
    console.log(element);
});

console.log(ArrayExample.length);

let ArrayExample1 = ['Nasser', 5, true];
let ArrayExample2 = [...ArrayExample1];
let ArrayExample3 = ArrayExample1.map((element) => {
    return element;
});

ArrayExample2.push(11);
ArrayExample3.push(12);

console.log(ArrayExample1);
console.log(ArrayExample2);
console.log(ArrayExample3);

//Objects
console.log("--Objects--");
let ObjectExample = {
    FirstName: "Nasser",
    LastName: "BinObied",
    Address: {
        City: "Riyadh",
        State: "Riyadh"
    },
    Age: 30,
    Pets: ["Luna"]
};

ObjectExample.Age = 31;

console.log(Object.keys(ObjectExample));
console.log(Object.values(ObjectExample));
console.log(ObjectExample.hasOwnProperty("FirstName"));

let ObjectExample1 = {
    FirstName:"Nasser"
};

let ObjectExample2 = ObjectExample1;
let ObjectExample3 = Object.assign({}, ObjectExample1);

ObjectExample2.LastName = "BinObied";

console.log(ObjectExample1);
console.log(ObjectExample2);
console.log(ObjectExample3);


//Arithmetics
console.log("--Arithmetics--");
let ArithmeticsExample = 4 + 4 - 4 * 4 / 4;
let ArithmeticsExample1 = 4 % 4;
let ArithmeticsExample2 = 4 % 3;

console.log(ArithmeticsExample);
console.log(ArithmeticsExample1);
console.log(ArithmeticsExample2);


//Relation Operators
console.log("--Relation Operators--");
let RelationExample1 = 10;
let RelationExample2 = "12";

console.log(typeof RelationExample1);
console.log(typeof RelationExample2);
console.log(RelationExample1 == RelationExample2);
console.log(RelationExample1 != RelationExample2);
console.log(RelationExample1 === RelationExample2);

let RelationExample3 = 5 === 5;
let RelationExample4 = 5 == "5";
let RelationExample5 = 5 != "5";
let RelationExample6 = 5 !== "5";

console.log(RelationExample3);
console.log(RelationExample4);
console.log(RelationExample5);
console.log(RelationExample6);

//Increament / Decrement
console.log("--Increament / Decrement--");
let IncDecExample = 1;
let IncDecExample1 = 0;
let IncDecExample2 = 2;
let IncDecExample3 = 3;

IncDecExample++;
IncDecExample1 += 5
IncDecExample2++;
++IncDecExample3;

console.log(IncDecExample);
console.log(IncDecExample1);
console.log(IncDecExample2);
console.log(IncDecExample3);

//Control
console.log("--Control--");
let ControlExample = 5;

if (ControlExample === 6 || true === true) {
    console.log("If");
} else if (false) {
    console.log("Else if");
} else {
    console.log("Else");
}

console.log(10 === 10 && 5 < 4);
console.log(10 === 10 || 5 < 4);
console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5);

//Switching
console.log("--Switching--");

let SwitchExample = "A";

switch (SwitchExample) {
    case "A":
        console.log("A is Wrong");
        break;
    case "B":
        console.log("B is Wrong");
    case "C":
        console.log("C is Correct");
        break;
    default:
        console.log("No Answer");
}

//For Loop
console.log("--For Loop--");

let Total = 0;
let ForArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
for (let i = 0; i < ForArray.length; i++) {
    Total += ForArray[i];
} 

console.log(Total);

//While Loop
console.log("--While Loop--");

let Count = 0;

while (Count < 20) {
    Count ++;
}

while (true) {
    Count ++;
    if (Count >= 20) {
        break;
    }
}

do {
    Count ++;
    if (Count >= 20) {
        break;
    }
} while (false);

console.log(Count);

//Function
console.log("--Function--");

function Add(AddNumber1, AddNumber2) {
    return AddNumber1 + AddNumber2;
}

console.log(Add(10, 5));
console.log(Add(10, 10));
console.log(Add(10, 15));