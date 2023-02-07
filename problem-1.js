/* In this function "mindGame" (which will be a positive number as input) I multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output */

const anyNumber = 50;

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

const result = mindGame(anyNumber);
console.log(result);