/**
 * Problem-4:  Get the total count of number list in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
    (examples)
    input: [1,2,8,9,12,46,76,82,15,20,30]
    Output:
        {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
 */


function count_multiple_of_dictionary(input) {

    const outPut = new Map();

    const dictionary = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < input.length; i++) {

        for (let j = 0; j < dictionary.length; j++) {

            if (input[i] % dictionary[j] === 0) {

                if (outPut.has(dictionary[j])) {

                    outPut.set(dictionary[j], outPut.get(dictionary[j]) + 1);

                } else {

                    outPut.set(dictionary[j], 1);

                }
            }
        }
    }

    return outPut;
};

const result = count_multiple_of_dictionary([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]);
console.log(result);

