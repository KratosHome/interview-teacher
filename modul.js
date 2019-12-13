class Transaction {

}

const scenario = [{
        index: 1,
        meta: {
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario ',
        },
        async call(store, logs) {
            // Логика выполнения шага
        },
        async restore(store, logs) {
            // Логика отката шага
        },
    },
    {
        index: 2,
        meta: {
            title: 'Withdraw funds from source account.',
            description: 'Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully.',
        },
        async call(store, logs) {
            // Логика выполнения шага
        },
        async restore(store, logs) {
            // Логика отката шага
        },
    },
];


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