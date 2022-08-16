
/*
Problem-2:  With a single integer as the input, generate the following until a = x [series of numbers as shown in the below examples]

Output: (examples)
    1) input a = 1, then output : 1
    2) input a = 2, then output : 1, 3
    3) input a = 3, then output : 1, 3, 5
    4) input a = 4, then output : 1, 3, 5, 7
    .
    .
    5) input a = x, then output : 1, 3, 5, 7, .......

*/   


function oddNumber(x){

    if(x < 1){
        console.log("Please provide a positive input");
    }
    let outPut = [];
    let num = 1;

    while(x >= 1){

        outPut.push(num);
         num = num + 2;     
        x--;
    }
    console.log(...outPut);
};

const input = oddNumber(10);