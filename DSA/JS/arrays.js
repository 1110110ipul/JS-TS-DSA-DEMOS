// day 1 : using map, filter and reduce 

// Function to transform the array using map, filter, and reduce

function transformToArray(arr){
    return arr
            .filter(num => num % 2 !== 0)
            .map(num => num * num)
            .reduce((acc, num) => acc + num , 0);
}

let transformToArrayNumber = [1,2,3,4,5,6,7,8,9];
const resultDay1 = transformToArray(transformToArrayNumber);
console.log(`Array: [${transformToArrayNumber}], Result: ${resultDay1}`);

