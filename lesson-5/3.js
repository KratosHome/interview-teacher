/**
 * Задача 3.
 *
 * Создайте функцию `f`, которая отнимает от первого параметра второй и делит на третий.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве любого входного аргумента было предано не число.
 */

// Решение



function f(first, second, third) {
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return new Error(`Argument ${arguments[i]} is not a number`)
        }
    }

    const result = (first - second) / third;


    return result;


}

console.log(f(9, 2, 3)); //2.33333...35
console.log(f(1, 2, 3)); //-0.333(3)
console.log(f(1, 2, 0)); //-0.333(3)
console.log(f('1', 2, 3)); //Error

exports.f = f;