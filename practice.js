// Problem 1: Let’s play a mind game

// const anyNumber = 50;

// function mindGame(num) {
//     if (typeof (num) !== 'number') {
//         return "Please input a Number"
//     }
//     else {
//         const output = (((num * 3) + 10) / 2) - 5;
//         return output;
//     }
// }

// const result = mindGame(anyNumber);
// console.log(result);





// Problem 2: Finding even or odd

// const input = 'maruff'

// function evenOdd(str) {

//     if (typeof (str) !== 'string') {
//         return "Please input a String"
//     }

//     else if (str.length % 2 === 0) {
//         return "even"
//     }
//     else {
//         return "odd"
//     }
// }
// const result = evenOdd(input);
// console.log(result);





// Problem 3: Is Less or Greater than seven

// const input = 15;

// function isLGSeven(num) {
// if (typeof (num) !== 'number') {
//         return "Please input a Number"
//     }

//     else if (num - 7 < 7) {
//         return (num - 7);
//     }

//     else {
//         return (num * 2);
//     }

// }

// const result = isLGSeven(input);
// console.log(result);






// Problem 4: Finding Bad data

// const input = [1, 2, 5, -1];

// function findingBadData(numbers) {
//     if (typeof (numbers) !== 'object') {
//         return "Please input a Array"
//     }
//     let totalOddNum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element < 0) {
//             totalOddNum++;
//         }
//     }
//     return totalOddNum;
// }

// const result = findingBadData(input);
// console.log(result);






// Problem 5: Convert your gems into diamond

const firstFriendGems = 100;
const secondFriendGems = 5;
const thirdFrindGems = 1;

function gemsToDiamond(gQuantityOf1stFrnd, gQuantityOf2ndFrnd, gQuantityOf3rdFrnd) {
    if (typeof (gQuantityOf1stFrnd) !== 'number' || typeof (gQuantityOf2ndFrnd) !== 'number' || typeof (gQuantityOf3rdFrnd) !== 'number') {
        return "Please input the Number in all"
    }

    // const powOfGems1stFriend = 21;
    // const powOfGems2ndFriend = 32;
    // const powOfGems3rdFriend = 43;

    const totalDiamond = (gQuantityOf1stFrnd * 21) + (gQuantityOf2ndFrnd * 32) + (gQuantityOf3rdFrnd * 43);

    if (totalDiamond >= 1000 * 2) {
        return (totalDiamond - 2000);
    }
    else {
        return totalDiamond;
    }
}

const result = gemsToDiamond(firstFriendGems, secondFriendGems, thirdFrindGems);
console.log(result);