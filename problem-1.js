// Problem 1: Let’s play a mind game

const anyNumber = 50;

function mindGame(num) {
    if (typeof (num) !== 'number') {
        return "Please input a Number"
    }
    else {
        const output = (((num * 3) + 10) / 2) - 5;
        return output;
    }
}

const result = mindGame(anyNumber);
console.log(result);