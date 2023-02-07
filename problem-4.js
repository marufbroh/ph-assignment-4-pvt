/* In this function "findingBadData" (which will be an array as input) I find how many negative numbers (less than zero) there are in the array and return that number. */

const input = [-4, -9, -5, -33, -55];

function findingBadData(numbers) {

    if (Array.isArray(numbers) !== true) {
        return "Please input a Array"
    }
    let totalOddNum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < 0) {
            totalOddNum++;
        }
    }
    return totalOddNum;
}

const result = findingBadData(input);
console.log(result);