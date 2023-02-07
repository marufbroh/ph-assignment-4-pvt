/* In this function "evenOdd" (which will be a string as input) I have given the output based on the total number of characters in the String. The output will be either 'even' or 'odd' */

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
