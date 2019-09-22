const arr = [0, 1, 2, 3, 4];

let sum = 0;

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        sum += arr[i];
    }
}

console.log('Sum of even elements is: ' + sum);