class Parking {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.vehicles = [];
    }

    addCar( carModel, carNumber ) {
        if (this.vehicles.length === this.capacity) {
            throw new Error('Not enough parking space.');
        }
        this.vehicles.push({
            carModel: carModel,
            carNumber: carNumber,
            payed: false
        })
        return `The ${carModel}, with a registration number ${carNumber}, parked.`
    }

    removeCar( carNumber ) {
        let currentCar = this.vehicles.find(c => c.carNumber === carNumber);
        if (currentCar === undefined) {
            throw new Error("The car, you're looking for, is not found.")
        }
        if (currentCar.payed === false) {
            throw new Error(`${currentCar.carNumber} needs to pay before leaving the parking lot.`)
        }
        let number = currentCar.carNumber
        this.vehicles.pop(currentCar)
        return `${number} left the parking lot.`
    }

    pay( carNumber ) {
        let currentCar = this.vehicles.find(c => c.carNumber === carNumber);
        if (currentCar === undefined) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (currentCar.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        }
        currentCar.payed = true;
        return `${carNumber}'s driver successfully payed for his stay.`
    }
    getStatistics(carNumber) {
        let output = []
        if (carNumber === undefined) {
            output.push(`The Parking Lot has ${this.capacity - this.vehicles.length} empty spots left.`)
            this.vehicles.sort((a, b) => {
                if (a.carModel < b.carModel) {
                    return -1;
                }
                if (a.carModel > b.carModel) {
                    return 1;
                }
                return 0;
            })
            for (let car of this.vehicles) {
                let payment = ''
                if (car.payed) {
                    payment = 'Has payed'
                } else {
                    payment = 'Not payed'
                }
                output.push(`${car.carModel} == ${car.carNumber} - ${payment}`)
            }
        } else {
            let neededCar = this.vehicles.find(car => car.carNumber === carNumber);
            let payment = ''
            if (neededCar.payed) {
                payment = 'Has payed'
            } else {
                payment = 'Not payed'
            }
            output.push(`${neededCar.carModel} == ${neededCar.carNumber} - ${payment}`)
        }

        return output.join('\n')
    }
}

let p = new Parking(1);
p.addCar('dsfds', 'zdr')
console.log(p.pay('zdr'))
p.pay('zdr')
p.removeCar('zdr')
