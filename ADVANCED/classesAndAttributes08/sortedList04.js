class List {
    constructor() {
        this.list = []
        this.size = this.list.length
    }
    add(element) {
        this.list.push(element)
        this.list.sort()
        this.size = this.list.length
    }
    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list.splice(index, 1)
            this.list.sort()
            this.size = this.list.length
        }
    }
    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index]
        }
    }
}




let newList = new List();
newList.add(5);
console.log(newList.get(0))
// expect(newList.get(0)).to.equal(5, "Element wasn't added");

newList.add(3);
console.log(newList.get(0))
// expect(newList.get(0)).to.equal(3, "Collection wasn't sorted");

newList.remove(0);
console.log(newList.get(0))
console.log(newList.size)
// expect(newList.get(0)).to.equal(5, "Element wasn't removed");
// expect(newList.size).to.equal(1, "Element wasn't removed");