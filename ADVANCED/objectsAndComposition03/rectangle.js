function rectangle(width, height, colorGiven) {
    let color = colorGiven[0].toUpperCase() + colorGiven.slice(1);
    let recObject = {
        width: Number(width),
        height: Number(height),
        color: color,
        calcArea() {
            return this.width * this.height;
        }
    };
    return recObject;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());