// boki trójkąta
//a = 3;
b = 4;
c = 5;
h = 7;

p = (b+c+h)/2;
area = Math.sqrt(p*(p - b)*(p - c)*(p - h));

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .

let a = () => `Pole trókąta o bokach ${b}, ${c} oraz ${h} wynosi ${area}`;;

console.log( a() );