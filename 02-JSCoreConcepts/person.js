class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    };
    displayFullName() {
        return `${this.name} ${this.surname.toUpperCase()}`;
    }
    displayInitials() {
        return `${this.name.charAt(0).toUpperCase()}.${this.surname.charAt(0).toUpperCase()}.`;
    }
}

let person1 = new Person('Jan', 'Nowak');
console.log(person1.displayFullName());
console.log(person1.displayInitials());
let person2 = new Person('Pawel', 'Czarny');
console.log(person2.displayFullName());
console.log(person2.displayInitials());