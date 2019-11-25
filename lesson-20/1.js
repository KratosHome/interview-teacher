// # Задача 1

// Создайте класс `Customers` который умеет работать с механизмом `for of`.

// Класс `Customers` содержит метод `add` который принимает объект в качестве параметра. У этого объекта есть обязательное поле `name` и необязательное поле `verified`.

// Класс `Customers` при переборе с помощью `for of` должен учитывать только объекты у которых был установлен флаг `verified: true`.

// **Обратите внимание**:

// 1. Использование генераторов **запрещено**.
// 2. Использование посторонних библиотек **запрещено**
// 3. У класса `Customers` **должен** быть метод `Symbol.iterator`


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
	
	[Symbol.iterator]() {
        let i = 0;
        let arr =[];

       	this.#arr.forEach((el) =>{
        	if(el.verified){
        		arr.push(el)
        	}
        });

        return {
            next: () => {
                const done = i >= arr.length;  
                const value = !done ? arr[i++] : undefined;

                return {
                    value,
                    done,
                };
            },
        };
    }
}


const customers = new Customers();
customers.add({name: 'Alex', verified: true});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus', verified: true});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Andrii2', verified: true});
customers.add({name: 'Andrii3', verified: true});
customers.add({name: 'Andrii4', verified: true});
customers.add({name: 'Andrii5', verified: true});
customers.add({name: 'Andrii6', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}