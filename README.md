

I have use javascript as my programming language.



 Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

Solution:
I have made calculator class and made function as per requirement , you can use by two ways.
1. you need to create object of the class and then need to perform the operations.
2. I have made a function name calculator , you can use it by passing value of a , b and type_of_operation in the arguments.

///////////////////////////////////////////////////////////////////////////////////////////////////////////


Problem-2:  With a single integer as the input, generate the following until a = x [series of numbers as shown in the below examples]

Output: (examples)
    1) input a = 1, then output : 1
    2) input a = 2, then output : 1, 3
    3) input a = 3, then output : 1, 3, 5
    4) input a = 4, then output : 1, 3, 5, 7
    .
    .
    5) input a = x, then output : 1, 3, 5, 7, .......


Solution:

As per the examples given in the problem two it seems like, as per the input number we have to write number odd number starting from 1 , hence i made a function oddNumber which take input as the number and return required outPut.

/////////////////////////////////////////////////////////////////////////////////////////////

 Problem-3:  With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]

    Output: (examples)
        1) input a = 1, then output : 1
        2) input a = 2, then output : 1
        3) input a = 3, then output : 1, 3, 5
        4) input a = 4, then output : 1, 3, 5
        5) input a = 5, then output : 1, 3, 5, 7, 9
        6) input a = 6, then output : 1, 3, 5, 7, 9
        .
        .
        7) input a = x, then output : 1, 3, 5, 7, .......

Solution:

The problem no 3 is similar to problem 2 but there is a small difference for even number that is we have to substract 1 from even number and than need to do same thing as per problem 2.

///////////////////////////////////////////////////////////////////////////////////////////////////////////

 Problem-4:  Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
    (examples)
    input: [1,2,8,9,12,46,76,82,15,20,30]
    Output:
        {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

Solution :

In problem no 4 we have list of dictionary array start from 1 to 9, and we have to count that number of input is how many times divisible by the number of dictionary array, so for that i have made a function count_multiple_of_dictionary which will take input array and will return count of multiple of dictionary.