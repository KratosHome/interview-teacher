/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа, переданного в качестве аргумента.
 *
 * Условия:
 * - Генерировать ошибку, если в качестве аргумента был передан не числовой тип.
 */

// Решение


function f(arg) {
	if(typeof arg !== 'number'){
		return new Error('Argument is not a number')
	}

	const cube = Math.pow(arg, 3);
	return cube;
}
console.log(f(0)); // 0
console.log(f(-6)); // -216
console.log(f(6)); // 216
console.log(f(5)); // 125
console.log(f(`6`)); // Error

exports.f = f;