// when ever we try to directly apply the + operator the number will be converted to string
console.log(2+2+"1");
console.log("1"+2+2);
console.log(1+"2"+2);

// but if we use any other type of mathematical operator js convert it to number 

console.log("2" * "2");
console.log("2" - "2");
console.log("2" / "2");
console.log("2" % "2");

// but we have cases when we can use + operator with string and still get it return as number

let x = 1;
x += +"2"
console.log(x);

console.log(+"2" + +"7");

// and famous banan question

console.log("ba" + + "a") 
// resules : baNaN , 'a' is a string, and when we use the unary + operator on it (+ 'a'), 
// JavaScript tries to convert the string 'a' into a number.
// Since 'a' is not a valid number, the result of + 'a' is NaN (Not-a-Number