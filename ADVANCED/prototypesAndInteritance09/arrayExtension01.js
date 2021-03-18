(function solve() {
    Array.prototype.last = function () {
        return this[this.length - 1]
    }

    Array.prototype.skip = function (n) {
        return this.slice(Number(n))
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n)
    }

    Array.prototype.sum = function () {
        let sum = 0;
        for (let current of this) {
            sum += Number(current)
        }
        return sum
    }

    Array.prototype.average = function (n) {
        return this.sum() / this.length
    }
}())


console.log(Array.prototype.hasOwnProperty('last'))
let myArr = [1, 2, 3]
console.log(myArr.sum())