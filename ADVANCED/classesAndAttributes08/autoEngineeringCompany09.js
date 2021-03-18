function solve(inpArr) {
    let carsRegister = {}

    for (let line of inpArr) {
        let [producer, model, quantity] = line.split(' | ')
        quantity = Number(quantity)

        if (carsRegister[producer] === undefined) {
            carsRegister[producer] = {}
        }

        if (carsRegister[producer][model] === undefined) {
            carsRegister[producer][model] = quantity
        } else {
            carsRegister[producer][model] += quantity
        }
    }

    for (let producer in carsRegister) {
        console.log(producer)
        for (let model in carsRegister[producer]) {
            console.log(`###${model} -> ${carsRegister[producer][model]}`)
        }
    }
}

solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'])