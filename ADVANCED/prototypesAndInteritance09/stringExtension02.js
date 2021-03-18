(function solve() {
   String.prototype.isEmpty = function () {
       return !this.toString();

   }
}())

let a = ''
console.log(a.isEmpty())