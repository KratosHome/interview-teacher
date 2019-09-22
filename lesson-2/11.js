const arr = [2, -1, -3, 15, 0, 4];

let sum = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        sum += arr[i];
    }
}

console.log(sum);