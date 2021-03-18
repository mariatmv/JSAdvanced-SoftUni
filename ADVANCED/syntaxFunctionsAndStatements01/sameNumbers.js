function solve(number) {
    let numAsNum = number
    let numAsString = String(number)
    let arrNum = Array.from(numAsString)
    let firstN = arrNum[0]
    allSame = true;
    let sum = Number(firstN);
    for (let i = 1; i < arrNum.length; i++) {
        if (arrNum[i] !== firstN) {
            allSame = false;
        }
        sum += Number(arrNum[i])
    }
    console.log(allSame)
    console.log(sum)
}

solve(2222222)