/**
 * Задача 1.
 *
 * Напишите функцию `inspect`, которая будет принимать массив в качестве аргумента.
 * Возвращаемое значение функции — новый массив.
 * Этот новый массив должен содержать исключительно длины строк, которые были в
 * переданном массиве.
 * Если строк в переданном массиве не было — нужно вернуть пустой массив.
 *
 * Условия:
 * - Обязательно использовать встроенный метод массива filter;
 * - Обязательно использовать встроенный метод массива map.
 *
 * Генерировать ошибки, если:
 * - В качестве первого аргумента был передан не массив.
 */

const array = [
    false,
    'Привет.',
    2,
    'Здравствуй.',
    [],
    'Прощай.',
    {
        name: 'Уолтер',
        surname: 'Уайт',
    },
    'Приветствую.',
    'Aloha',
    'a'
];


// Решение

function inspect(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Your argument is not array');
    }

    let transArr = arr.map(function(currentValue) {
        if (typeof currentValue === 'string') {
            return currentValue.length;
        }
    });

    let array = transArr.filter(function (arg) {
    	return typeof arg === 'number';
    });


    return array;

}


const result = inspect(array);
console.log(result); // [ 7, 11, 7, 12 ]


exports.inspect = inspect;
