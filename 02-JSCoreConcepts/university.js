names = ['Piotr', 'Anna', 'Michał', 'Paulina', 'Mateusz', 'Magda'];

class Students {
    constructor(names) {
        this.names = names;
    }

    // names (array) which starts with the letter
    startWith(letter){
        return new Students(this.names.filter((name) => name.charAt(0) === letter));
    }

    // names (array) in alphabetical order
    sort() {
        return new Students(this.names.concat().sort());
    }

    // names (array) in natural order
    get() {
        return this.names;
    }

    // get first 'n' names (array)
    getFirst(n) {
        return new Students(this.names.slice(0, n));
    }
}


students = new Students(names);
console.log(students.get());
console.log(students.sort());
console.log(students.startWith('P'));
console.log(students.startWith('M').sort());
console.log(students.sort().getFirst(4));
console.log(students.startWith('M').sort().getFirst(2));
console.log(students.get());



