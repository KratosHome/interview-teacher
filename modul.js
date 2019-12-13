function valid(obj) {

	if(typeof obj !== 'object'){
		throw new TypeError('Step of your scenario is not an obj');
	}

	for(const key in obj){
		if(!obj[key].call || !obj[key].restore  || !obj[key].index  || !obj[key].meta){
			throw new Error(`Invalid structure of scenario`);			
		}

		const metaObj = obj[key].meta;

		if(!metaObj.title || !metaObj.description){
			throw new Error(`Invalid structure of meta`);			

		}
	}
}

class Transaction {

	#store = new Map();
	#logs = [];

	#counter = 0;


	async dispatch(scenario){//запуск
		valid(scenario);


		scenario.forEach((el)=>{

			let res = el.call((resolve, reject)=>{
				resolve('kj')
			});

			res.then((suc) => {
				return 'kdfjgvkgbnk'
			})


			this.#logs.push({
				index: el.index,
				meta: el.meta,
				stepResult: res,
				error: null
			})
		});

		console.log(this.#logs)
	}

	async rollback(){//ткат
		console.log('revert changes')
	}

}



const scenario = [
	{
        index: 1,
        meta: {
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario ',
        },
        async call(store, logs) {

        	let a = 1 + 2 + 3;
            // console.log(a);
        },
        async restore(store, logs) {
            // Логика отката шага
        },
    },
    // {
    //     index: 2,
    //     meta: {
    //         title: 'Withdraw funds from source account.',
    //         description: 'Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully.',
    //     },
    //     async call(store, logs) {
    //         // Логика выполнения шага
    //     },
    //     async restore(store, logs) {
    //         // Логика отката шага
    //     },
    // },
];

// valid(scenario);

const transaction = new Transaction();

(async () => {
    try {
        await transaction.dispatch(scenario);
        const { store, logs, status } = transaction;
        log(store);
        log(logs);
        log(status);
    } catch (error) {
        // Send email about broken transaction
    }
})();