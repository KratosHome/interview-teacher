/**
 * Задача 1.
 *
 * Создайте функцию shallowMerge.
 * Функция обладает двумя параметрами, каждый из которых должен быть обычным JavaScript объектом.
 * Функция возвращает новый объект, который в себе объединяет свойства обоих объектов.
 * Свойства необходимо копировать лишь на один уровень каждого их объектов.
 *
 * Из объектов и обеих аргументах копируются только собственные свойства, включая недоступные для перечисления.
 *
 * Условия:
 * - Встроенный метод Object.create() использовать запрещено;
 * - При копировании любого свойства необходимо обязательно сохранить его дескрипторы;
 * - Свойства с одинаковыми именами нужно перезаписывать — приоритетом обладает объект из второго параметра.
 */

// Решение


function shallowMerge(firstObj, secondObj) {
	if(typeof firstObj !== 'object' || typeof secondObj !== 'object'){
		throw new TypeError('Argument is not an object');
	}

	let mergedObj = Object.assign(
		{},
		firstObj,
		secondObj
	);


	for(let key in firstObj){
		const prop = Object.getOwnPropertyDescriptor(firstObj, key);

		if(prop.writable === false){

			Object.defineProperty(mergedObj, key, { writable: false });
		}

		if(prop.configurable === false){

			Object.defineProperty(mergedObj, key, { configurable: false });
		}

		if(prop.enumerable === false){

			Object.defineProperty(mergedObj, key, { enumerable: false });
		}

	}

	for(let key in secondObj){

		const prop = Object.getOwnPropertyDescriptor(secondObj, key);

		if(prop.writable === false){

			Object.defineProperty(mergedObj, key, { writable: false });
		}

		if(prop.configurable === false){

			Object.defineProperty(mergedObj, key, { configurable: false });
		}

		if(prop.enumerable === false){

			Object.defineProperty(mergedObj, key, { enumerable: false });
		}

	}
	

	return mergedObj;
}

const user = { firstName: 'Marcus', lastName: 'Kronenberg' };
const userData = { job: 'developer', country: 'Germany', lastName: 'Schmidt' };

Object.defineProperty(user, 'firstName', { writable: false });
Object.defineProperty(user, 'lastName', { configurable: false });
Object.defineProperty(userData, 'job', { configurable: false });

const result = shallowMerge(user, userData);

console.log(result); // { firstName: 'Marcus', lastName: 'Schmidt', job: 'developer', country: 'Germany' }
console.log(Object.getOwnPropertyDescriptor(result, 'firstName').writable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'lastName').configurable); // false
console.log(Object.getOwnPropertyDescriptor(result, 'job').configurable); // false

exports.shallowMerge = shallowMerge;