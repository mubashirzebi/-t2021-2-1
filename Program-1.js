
/**
 * Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string
 */




class Calculator{

    constructor(a,b){
        this.a = a;
        this.b = b;
    };

    Addition(a,b){
        return a + b;
    };

    Subtraction(a,b){
        return a - b;       
    };

    Multiplication(a,b){
        return a * b;
    };

    Division(a,b){
        return a / b;
    }

};

/*
const cal = new Calculator();

// Addition
const addition = cal.Addition(5,6);
console.log("Addition",addition);

// Subtraction
const subtraction = cal.Subtraction(10,2.5)
console.log("Subtraction",subtraction)

// Multiplication
const multiplication = cal.Multiplication(2.5 , 2.1);
console.log("Multiplication",multiplication);

// Division 
const division = cal.Division(90,2);
console.log(`Division `,division);
*/


function calculator(a,b,type_of_operation){

    const cal = new Calculator();
    if(type_of_operation === "Addition"){
    
        return cal.Addition(a,b);
    }
    else if(type_of_operation === "Subtraction"){
        return cal.Subtraction(a,b);
    }
    else if (type_of_operation === "Multiplication"){
        return cal.Multiplication(a,b).toFixed(5);
    }
    else if (type_of_operation === "Division"){
        return cal.Division(a,b).toFixed(5);
    }
}

console.log("Addition",calculator(10.23,5,"Addition"));

console.log("Subtraction",calculator(10.23,5,"Subtraction"));

console.log("Multiplication",calculator(10.23,5,"Multiplication"));

console.log("Division",calculator(10.23,5,"Division"));

