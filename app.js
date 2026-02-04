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

printOdds(10); // 1-9
printOdds(100); // 1-99

console.log("\n==========\n");

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
checkAge("BillyBob",72);
checkAge("Charlie",13);

console.log("\n==========\n");

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x,y){
    if(x == 0 && y == 0){
        console.log("On The Origin");
    }else if(y == 0 && x != 0){
        console.log("On The X Axis");
    }
    else if(x == 0 && y != 0){
        console.log("On The Y Axis");
    }
    else if(x > 0 && y > 0 ){
        console.log("Quadrant 1");
    }
    else if(x > 0 && y < 0){
        console.log("Quadrant 2");
    }
    else if(x < 0 && y < 0){
        console.log("Quadrant 3");
    }else if(x < 0 && y > 0){
        console.log("Quadrant 4");
    }
}
whichQuadrant(0,0); //On The Origin
whichQuadrant(-18,0); //On The X Axis
whichQuadrant(0,25); //On The Y Axis
whichQuadrant(18,25); // Quadrant 1
whichQuadrant(19,-26); // Quadrant 2
whichQuadrant(-15,-35); // Quadrant 3
whichQuadrant(-32,44); // Quadrant 4

console.log("\n==========\n");

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(a,b,c){
    if(a + b > c && a + c > b && b + c > a){ 
        console.log("Valid triangle: "); 
        if(a ==b && b == c){
            console.log("Equilateral triangle");
        }
        else if(a == b || b == c || a == c){
            console.log("Isosceles triangle");
        }else if(a != b && a != c && b != c){
            console.log("Scalene triangle");
        }
    }else{
        console.log("Not a valid triangle"); 
    }
}
triangleType(2,3,1); // Not a valid triangle
triangleType(3,4,5); // Valid triangle
triangleType(2,2,2); // Equilateral triangle
triangleType(3,3,2); // Isosceles triangle
triangleType(3,4,5); // Scalene triangle

console.log("\n==========\n");

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function cellPhoneUse(planLimit, day, usage){
    let cycleDays = 30;
    let currentAvg = usage / day;

    for(let i = day; i <= cycleDays; i++){
        if(currentAvg <= planLimit){
            console.log(`You have ${i} days left on your plan.`);
        }else if(usage === planLimit){
        console.log("You have reached your plan limit.");
        }else if(usage > planLimit){
            console.log("You have exceeded your plan limit.");
        }
    }
}
cellPhoneUse();