function solve(...params) {
    let myObj = {};
    for (let param of params) {
        if (typeof param in myObj) {
            myObj[typeof param].push(param)
        } else {
            myObj[typeof param] = [param]
        }
    }

    for (let obj in myObj) {
        if (myObj[obj].length < 2) {
            console.log(`${obj}: ${myObj[obj]}`)
        } else {
            for (let arg of myObj[obj]) {
                console.log(`${obj}: ${arg}`)
            }
        }
    }

    for (let obj in myObj) {
        console.log(`${obj} = ${myObj[obj].length}`)
    }
}

solve(42, 'cat', [], undefined);