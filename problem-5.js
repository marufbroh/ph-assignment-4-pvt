/* In this function "gemsToDiamond" I inputed three numbers of gems from three friends and the output will be total friend1 gems*21, friend2 gems*32 and friend3 gems*43. Else if the total is greater than (1000*2) the output will be subtraction of the total by 2000. */

const firstFriendGems = 100;
const secondFriendGems = 5;
const thirdFrindGems = 1;

function gemsToDiamond(gQuantityOf1stFrnd, gQuantityOf2ndFrnd, gQuantityOf3rdFrnd) {

    if (gQuantityOf1stFrnd == null || gQuantityOf2ndFrnd == null || gQuantityOf3rdFrnd == null){
        return "Must Provide three Numbers"
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

const result = gemsToDiamond(firstFriendGems, secondFriendGems, thirdFrindGems);
console.log(result);