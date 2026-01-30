console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    for(let i = 1; i <= count; i++){
        if(i % 2 !== 0 && i >= 0){
            console.log(i);
        }
    }
}

printOdds(24);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){
    aboveSixteen = `Congrats ${userName}, you can drive!`;
    belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if(age < 16 && userName){
        console.log(belowSixteen);
    }else if(age >= 16 && userName){
        console.log(aboveSixteen);
    }else{
        console.log("Please provide a valid name and age.");
    }
}

checkAge("Ford",39);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x,y){
    if(x == 0 && y > 0){
        console.log("On Y Axis");
    }else if(x >= 0 && y > 0){
        console.log("Quadrant 1");
    }
    else if(x < 0 && y > 0){
        console.log("Quadrant 2");
    }
    else if(x < 0 && y < 0){
        console.log("Quadrant 3");
    }else if(x > 0 && y < 0){
        console.log("Quadrant 4");
    }
}
whichQuadrant(6,-18);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(a,b,c){
    if(a === b && b !== c && a !== c) { 
        console.log("Not a valid triangle"); 
    }
    else if(a === b && b === c){
        console.log("Equilateral");
    }else if(a === b || b === c || a === c){
        console.log("Isosceles");
    }else if(a !== b && b!== c && a !== c){
        console.log("Scalene");
    }
}
triangleType(2,3,1);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function cellPhoneUse(){

}

cellPhoneUse();