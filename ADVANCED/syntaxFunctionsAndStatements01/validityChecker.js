function solve(x1, y1, x2, y2) {
    let output = [];
    output.push(`{${x1}, ${y1}} to {0, 0} is ${isValid(x1, y1, 0, 0)}`)
    output.push(`{${x2}, ${y2}} to {0, 0} is ${isValid(x2, y2, 0, 0)}`)
    output.push(`{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(x1, y1, x2, y2)}`)
    return output.join('\n')

    function isValid(x1, y1, x2, y2) {
        let distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        if (Number.isInteger(distance)) {
            return 'valid'
        } else {
            return 'invalid'
        }
    }
}


console.log(solve(3, 0, 0, 4))