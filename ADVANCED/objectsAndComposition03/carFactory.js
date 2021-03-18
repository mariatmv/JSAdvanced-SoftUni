function carFactory(wantedCar) {
    let newCar = {};
    newCar.model = wantedCar.model;
    if (wantedCar.power <= 90) {
        newCar.engine = {power: 90, volume: 1800};
    } else if (wantedCar.power > 90 && wantedCar.power <= 120) {
        newCar.engine = {power: 120, volume: 2400};
    } else {
        newCar.engine = {power: 200, volume: 3500};
    }
    newCar.carriage = {type: wantedCar.carriage, color: wantedCar.color};
    if (wantedCar.wheelsize % 2 === 0) {
        wantedCar.wheelsize -= 1;
    }
    newCar.wheels = [wantedCar.wheelsize, wantedCar.wheelsize, wantedCar.wheelsize, wantedCar.wheelsize];
    return newCar;
}

console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }))