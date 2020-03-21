let fillArray = (size, min, max) => {
    return new Array(size).fill(0).map(function(n) {
        return Math.round(Math.random() * (max - min) + min);
    });
};

console.log(fillArray(10, 5, 20));