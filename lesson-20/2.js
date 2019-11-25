/*# Задача 2

Улучшите класс `Customers` добавив функцию генератор.

**Обратите внимание**:

1. Класс `Customers` после этого должен работать **идентично** предыдущей задаче.
*/


class Customers{
	#arr = [];

	add(obj){
		if(typeof obj !== 'object'){
			throw new TypeError('Item is not an object');
		}

		if(!obj.name){
			throw new Error('Your object is invalid')
		}

		this.#arr.push(obj);
	}
	
	*[Symbol.iterator](){
		for (var i = 0; i < this.#arr.length; i++) {
			if(this.#arr[i].verified){
				yield this.#arr[i]
			}
		}		
	}
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}
