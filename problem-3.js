/* Using the function "isLGSeven" (which will take a number as input), I calculate the difference between the input value and 7, and if it's less than 7, I returned that subtraction. Otherwise, I returned double the input. Means twice the number I will take as input. */

const input = 8;

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

const result = isLGSeven(input);
console.log(result);