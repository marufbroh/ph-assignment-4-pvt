// Problem 3: Is Less or Greater than seven

const input = 15;

function isLGSeven(num) {
if (typeof (num) !== 'number') {
        return "Please input a Number"
    }

    else if (num - 7 < 7) {
        return (num - 7);
    }

    else {
        return (num * 2);
    }

}

const result = isLGSeven(input);
console.log(result);