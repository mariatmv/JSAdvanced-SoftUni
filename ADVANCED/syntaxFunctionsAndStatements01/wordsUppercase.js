function solve(sequence) {
     return sequence.split(/[\W]+/).filter(w => w !== '').map(w => w.toUpperCase()).join(', ')
}

console.log(solve('Hi, how are you?'));