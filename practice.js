/* In this function "mindGame" (which will be a positive number as input) I multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output */

function mindGame(num) {

    if (typeof (num) !== 'number') {
        return "Please input a Number"
    }

    else if (num < 0) {
        return "Please input a positive Number"
    }

    else {
        const output = (((num * 3) + 10) / 2) - 5;
        return output;
    }
}




/* In this function "evenOdd" (which will be a string as input) I have given the output based on the total number of characters in the String. The output will be either 'even' or 'odd' */

function evenOdd(str) {

    if (typeof (str) !== 'string') {
        return "Please input a String"
    }

    else if (str.length % 2 === 0) {
        return "even"
    }
    else {
        return "odd"
    }
}




/* Using the function "isLGSeven" (which will take a number as input), I calculate the difference between the input value and 7, and if it's less than 7, I returned that subtraction. Otherwise, I returned double the input. Means twice the number I will take as input. */

function isLGSeven(value) {

    if (typeof (value) !== 'number') {
        return "Please input a Number"
    }

    else if (value - 7 < 7) {
        return (value - 7);
    }

    else {
        return (value * 2);
    }
}




/* In this function "findingBadData" (which will be an array as input) I find how many negative numbers (less than zero) there are in the array and return that number. */

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




/* In this function "gemsToDiamond" I inputed three numbers of gems from three friends and the output will be total friend1 gems*21, friend2 gems*32 and friend3 gems*43. Else if the total is greater than (1000*2) the output will be subtraction of the total by 2000. */

function gemsToDiamond(gQuantityOf1stFrnd, gQuantityOf2ndFrnd, gQuantityOf3rdFrnd) {

    if (gQuantityOf1stFrnd == null || gQuantityOf2ndFrnd == null || gQuantityOf3rdFrnd == null) {
        return "Must provide three Numbers"
    }

    else if (typeof (gQuantityOf1stFrnd) !== 'number' || typeof (gQuantityOf2ndFrnd) !== 'number' || typeof (gQuantityOf3rdFrnd) !== 'number') {
        return "Please input the Number in all"
    }

    const totalDiamond = (gQuantityOf1stFrnd * 21) + (gQuantityOf2ndFrnd * 32) + (gQuantityOf3rdFrnd * 43);

    if (totalDiamond >= 1000 * 2) {
        return (totalDiamond - 2000);
    }
    else {
        return totalDiamond;
    }
}