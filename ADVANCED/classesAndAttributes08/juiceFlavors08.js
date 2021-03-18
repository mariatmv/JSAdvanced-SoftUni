function juiceFlavors(inpArr) {
    let juiceRegister = {}
    let bottlesOfJuice = {}

    for (let juiceData of inpArr) {
        let [juice, quantity] = juiceData.split(' => ')
        quantity = Number(quantity)
        if (juiceRegister[juice] === undefined) {
            juiceRegister[juice] = quantity
        } else {
            juiceRegister[juice] += quantity
        }
        if (juiceRegister[juice] >= 1000) {
            if (bottlesOfJuice[juice] === undefined) {
                let bottles = Math.floor(juiceRegister[juice] / 1000)
                bottlesOfJuice[juice] = bottles
                juiceRegister[juice] -= bottles * 1000
            } else {
                let bottles = Math.floor(juiceRegister[juice] / 1000)
                bottlesOfJuice[juice] += bottles
                juiceRegister[juice] -= bottles * 1000
            }
        }
    }

    for (let juice in bottlesOfJuice) {
        console.log(`${juice} => ${bottlesOfJuice[juice]}`)
    }
}

juiceFlavors(['Kiwi => 500',
    'Kiwi => 500',
    'Kiwi => 500',
    'Kiwi => 500'
])