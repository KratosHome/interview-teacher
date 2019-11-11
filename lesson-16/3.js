/**
 * Задача 3.
 *
 * Улучшите класс Worker из предыдущей задачи.
 * Для свойства rate и days добавьте методы для установки значений.
 *
 * Условия:
 * - Реализация решения — это синтаксис современных классов JavaScript;
 * - Приватные свойства необходимо объявить с помощью официального синтаксиса (#имяСвойства).
 */

// Решение

function validation(value) {
	if(typeof value !== 'number'){
		throw new TypeError('Value must be a number')
	}
}

class Worker {
	#firstName = null;
	#lastName = null;
    #rate = null;
    #days = null;

    constructor(name = 'john', surname = 'smith', rate = 1, days = 1) {
        this.#firstName = name;
        this.#lastName = surname;
        this.#rate = rate;
        this.#days = days;
    }

    getSalary() {
        return this.#rate * this.#days
    }

    getName() {
        return `${this.#firstName} ${this.#lastName}`;
    }

    getRate() {
        return this.#days;
    }

    getDays() {
        return this.#firstName;
    }

    setRate(val){
    	validation(val);
    	this.#rate = val;
    }

    setDays(val){
    	validation(val);
    	this.#days = val
    }
}

const worker = new Worker('Walter', 'White', 10, 31);

console.log(worker.getName()); // Walter White
console.log(worker.getRate()); // 10
console.log(worker.getDays()); // 31
console.log(worker.getSalary()); // 10 * 31 = 310

worker.setRate(20);
worker.setDays(10);
console.log(worker.getSalary()); // 20 * 10 = 200

exports.Worker = Worker;