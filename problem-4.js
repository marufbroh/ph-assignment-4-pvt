// Problem 4: Finding Bad data

const input = [1, 2, 5, -1];

function findingBadData(numbers) {
    if (typeof (numbers) !== 'object') {
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