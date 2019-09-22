const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reverseArr = [];
let i = arr.length-1;
let j = 0;

while (arr[i]) {
    reverseArr[j] = arr[i];
    i--;
    j++;
}

console.log(arr);
console.log(reverseArr);