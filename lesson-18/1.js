/*
# Задача 1

Создать класс `DB` который будет имплементировать `CRUD` модель.
В качестве структуры данных использовать `Map`.

Метод `create`:
    - принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
    - возвращает `id` при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
Метод `read`:
    - принимает идентификатор пользователь
    - если такого пользователя нет возвращать `null`
    - если есть — возвращать объект пользователя с полем `id` внутри объекта.
    - если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
Метод `readAll`:
    - возвращает массив пользователей
    - генерировать ошибку если в метод `readAll` передан параметр
Метод `update`:
    - обновляет пользователя
    - принимает 2 обязательных параметра
    - генерирует ошибку если передан несуществующий `id`
    - генерирует ошибку если передан `id` с типом не строка
    - генерирует ошибку если второй параметр не валидный
Метод `delete`:
    - удаляет пользователя
    - Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

// Решение


class DB {
	#count = null;
	#map = new Map();

	create(obj){

		if( typeof obj !== 'object'){
			throw new TypeError('Your argument is not an object')
		}

		let id = [this.#count++].toString();

		// this.#map = new Map();
		obj.id = id;
		this.#map.set(id, obj);

		// console.log(this.#map.size);

		return id;

		
	}

	read(id) {

		if(!arguments.length){
			throw new Error('Id of object does not exist');
		}

		if(typeof id !== 'string'){
			throw new Error('Invalide type of id')
		}

		if(!this.#map.has(id)){
			return null
		}

		return this.#map.get(id)



		
	}

	readAll(){
		if(arguments.length){
			throw new Error('Does not need an argument');
		}

		const arrUsers = [];

		// for( let key of this.#map.values()){
			// arrUsers.push(key);
		// }

		return arrUsers
	}

	// update(){

	// }

	delete(id){
		if(!arguments.length){
			throw new Error('Id of object does not exist');
		}

		if(typeof id !== 'string'){
			throw new Error('Invalide type of id')
		}

		this.#map.delete(id);

		console.log(true);

	}
}
// Проверка
const db = new DB();

const person = {
  name: "Pitter", // обязательное поле с типом string
  age: 21, // обязательное поле с типом number
  country: "ua", // обязательное поле с типом string
  salary: 500 // обязательное поле с типом number
};

const person2 = {
  name: "Julja", // обязательное поле с типом string
  age: 20, // обязательное поле с типом number
  country: "ua", // обязательное поле с типом string
  salary: 550 // обязательное поле с типом number
};

const id = db.create(person);
const id2 = db.create(person2);
const customers = db.readAll(); // массив пользователей
// db.update(id, { age: 22 }); // id
db.delete(id); // true
