function solve(speed, area) {
    if (area === 'motorway') {
        if (speed <= 130) {
            console.log(`Driving ${speed} km/h in a 130 zone`)
        } else {
            let status;
            if (speed <= 130 + 20) {
                status = 'speeding'
            } else if (speed <= 130 + 40){
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            let difference = speed - 130
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 130 - ${status}`)
        }

    } else if (area === 'interstate') {
        if (speed <= 90) {
            console.log(`Driving ${speed} km/h in a 90 zone`)
        } else {
            let status;
            if (speed <= 90 + 20) {
                status = 'speeding'
            } else if (speed <= 90 + 40){
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            let difference = speed - 90
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 90 - ${status}`)
        }

    } else if (area === 'city') {
        if (speed <= 50) {
            console.log(`Driving ${speed} km/h in a 50 zone`)
        } else {
            let status;
            if (speed <= 50 + 20) {
                status = 'speeding'
            } else if (speed <= 50 + 40){
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            let difference = speed - 50
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 50 - ${status}`)
        }

    } else if (area === 'residential') {
        if (speed <= 20) {
            console.log(`Driving ${speed} km/h in a 20 zone`)
        } else {
            let status;
            if (speed <= 20 + 20) {
                status = 'speeding'
            } else if (speed <= 20 + 40){
                status = 'excessive speeding'
            } else {
                status = 'reckless driving'
            }
            let difference = speed - 20
            console.log(`The speed is ${difference} km/h faster than the allowed speed of 20 - ${status}`)
        }

    }
}

solve(200, 'motorway')