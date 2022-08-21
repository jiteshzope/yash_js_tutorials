console.log("operators javascript file execution start");

// The following are the operators in javascript :
// + - * / %  arithematic operators result is value
// ++ -- arithematic operators(increment/decrement) result is value which is either less than 1 or greator than 1
// == === != !==  logical operators result is true/false
// && || logical operators result is true/false
// > < >= <=  logical operators result is true/false

let a = 2;
let b = 3;
// arithematic operators
// a+b 5
// a-b -1
// b-a 1
// a*b 6
// a/b 0.6666666
// b/a 1.5
// parseInt(b/a) 1
// parseInt(a/b) 0
// a%b 2
// b%a 1
// b=a  value of a is assigned to b, so value of b is changed

let x = 2, y = '2', z = 3;
// logical operators
// x == y true
// x != y false
// x === y false
// x !== y true
// x == z false
// x != z true
// x === z false
// x !== z true

let r = 2, s = 3, t = 2;
// logical operators
// r > s false
// r >= s false
// r < s true
// r <= s true
// r >= t true
// r > t false
// r <= t true

let u = 2, v = 3, w = 3;
// logical operators
// u > v && v == w  false
// v > u && w <= v  true
// u !== w && v > u true
// u > v || v == w  true
// v > u || w <= v  true
// u !== w || v > u true
// u > v || w < u  false

let i;
let j;
i = 2;
j = i++;
console.log(i)  // 3
console.log(j); // 2
j = ++i;
console.log(j) // 4
console.log(i) // 4
j = i--;
console.log(j) // 4
console.log(i) // 3
j = --i;
console.log(j) // 2
console.log(i) // 2



