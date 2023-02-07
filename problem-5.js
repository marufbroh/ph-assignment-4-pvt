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