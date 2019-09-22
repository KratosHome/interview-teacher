const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] > 3) {
        sum += arr[i];
    }
}

console.log('Sum of even elements and elements more than 3 is: ' + sum);