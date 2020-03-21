console.log(2);
console.log(6);
console.log(10);
console.log(14);

const start = 2;
const end = 14;
const increment = 4;

let whileLoopDisplay = () => {
    let i = start;
    while (i <= end) {
        console.log(i);
        i += increment;
    }
};

let forLoopDisplay = () => {
    for(let i = start; i <= end; i += increment) {
        console.log(i);
    }
};

console.log('Display with while loop:')
whileLoopDisplay();
console.log('Display with for loop:')
forLoopDisplay();