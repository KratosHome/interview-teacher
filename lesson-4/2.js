/**
 * Задача 2.
 *
 * Создайте объект `person` у которого будет 2 свойства: `rate` и `salary`.
 *
 * Свойство `rate` можно менять, но нельзя удалять. DONE 
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе.  done
 *
 * Свойство `salary` нельзя удалять.done
 * Также это свойство не должно участвовать в перечислении всех свойств при переборе. done
 * При чтении свойства `salary` возвращает результат умножения поля `rate` на текущее число в месяце.
 *
 * Если rate не установлен — возвращаем число 0.
 * 
 * Условия:
 * - Свойство salary обязательно должно быть геттером.
 */

// Решение

'use strict';

const person = {};
const date = new Date().getDate();

Object.defineProperty(person, 'salary', {
	get(){
		if(this.rate === null){
			return 0;
		}else{
			return this.rate * date;
		} 
	},
	enumerable: false,
	configurable : false,

});


Object.defineProperty(person, 'rate', {
	value : null,
	enumerable: false,
	writable: true,
});

person.rate = 30;


console.log(person.salary);

// exports.person = person;