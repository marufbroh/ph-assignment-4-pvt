// Problem 2: Finding even or odd

const input = 'maruff'

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
const result = evenOdd(input);
console.log(result);
