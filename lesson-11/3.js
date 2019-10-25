/**
 * Задача 3.
 *
 * Улучшите функцию createFibonacciGenerator() из предыдущего примера.
 *
 * Теперь вызов функции createFibonacciGenerator() должен возвращать объект, который содержит два метода:
 * - print — возвращает число из последовательности Фибоначчи;
 * - reset — обнуляет последовательность и ничего не возвращает.
 *
 * Условия:
 * - Задачу нужно решить с помощью замыкания.
 */

// Решение
function createFibonacciGenerator() {

    let counter = 0;

    return {
        numb: counter,
        print: function() {
            let countV = this.numb++;
            const formula = (Math.pow((1 + 5 ** .5) / 2, countV) - Math.pow((1 - 5 ** .5) / 2, countV)) / 5 ** .5;

            return Math.round(formula)
        },
        reset: function() {
            this.numb = 0
        }


    }


}

const generator1 = createFibonacciGenerator();

console.log(generator1.print()); // 0
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.print()); // 5
console.log(generator1.print()); // 8
console.log(generator1.print()); // 13
console.log(generator1.print()); // 21
console.log(generator1.reset()); // undefined
console.log(generator1.print()); // 0
console.log(generator1.print()); // 1
console.log(generator1.print()); // 1
console.log(generator1.print()); // 2
console.log(generator1.print()); // 3
console.log(generator1.print()); // 5
console.log(generator1.print()); // 8
console.log(generator1.print()); // 13
console.log(generator1.print()); // 21

const generator2 = createFibonacciGenerator();

console.log(generator2.print()); // 0
console.log(generator2.print()); // 1
console.log(generator2.print()); // 1
console.log(generator2.print()); // 2
console.log(generator2.print()); // 3
console.log(generator2.reset()); // undefined
console.log(generator2.print()); // 0
console.log(generator2.print()); // 1
console.log(generator2.print()); // 1

exports.createFibonacciGenerator = createFibonacciGenerator;