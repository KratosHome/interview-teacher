/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

upperCaseFirst('hello world!!!'); // Hello world!!!
upperCaseFirst(''); //'' 
upperCaseFirst(123); //''
upperCaseFirst(`string`); //''


function upperCaseFirst(str) {
    const string = str;

    if (typeof string !== 'string') {
        console.log('It isn\'t a string!');
        return;
    }

    let upperLetter = string.charAt(0).toUpperCase();
    let sliceStr = string.slice(1);

    upperLetter = `${upperLetter}${sliceStr}`;

    console.log(upperLetter);
}

// exports.upperCaseFirst = upperCaseFirst;