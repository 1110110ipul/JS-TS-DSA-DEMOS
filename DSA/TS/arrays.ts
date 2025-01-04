// day 1 : using map, filter and reduce 

// Function to transform the array using map, filter, and reduce

function transformArray(arr : number[]) : number {
    if(arr.length == 1) return arr[0];

    return arr
        .filter(number => number % 2 !== 0)
        .map(number => number * number)
        .reduce((acc, number) => acc + number, 0 )
}

// Test the function
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result: number = transformArray(numbers);
console.log(`Array: [${numbers}], Result: ${result}`); // result should be 165
