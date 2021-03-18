function solve(numberOfSteps, footLenght, speed) {
    let distance = numberOfSteps * footLenght;
    let breaks = Math.floor(distance / 500);
    let speedInMetersPerSecond = speed * 0.27778;
    let neededSeconds = distance / speedInMetersPerSecond + (60 * breaks) + 1;
    let date = new Date(0);
    date.setSeconds(neededSeconds); // specify value for SECONDS here
    let timeString = date.toISOString().substr(11, 8);
    console.log(timeString)
}

solve(2564, 0.70, 5.5)