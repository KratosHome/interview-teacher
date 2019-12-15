'use strict';

const Transaction = require("./trans.js");

const scenario = [{
        index: 1,
        meta: {
            title: 'Collect backup information.',
            description: 'Collects pieces of data that required for restore scenario ',
        },
        async call(store, logs) {

            let a = this.index;
            return a
        },
        async restore(store, logs) {
            return this.index
        },
    },
    {
        index: 2,
        meta: {
            title: 'Withdraw funds from source account.',
            description: 'Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully.',
        },
        async call(store, logs) {
            let b = store.size + 2;
            // throw new Error('Error');
            return b;

        },
        async restore(store, logs) {
            let b = store.size;

            // throw new Error('Error');
            return b;
        },
    },
    {
        index: 3,
        meta: {
            title: 'Action 3',
            description: 'Description 3',
        },
        async call(store, logs) {

            let c = store.size + 2;

            // throw new Error('Error');

            return c;
        },
        async restore(store, logs) {
            let c = store.size;

            return c
        },
    },,
    {
        index: 4,
        meta: {
            title: 'Action 4',
            description: 'Description 4',
        },
        async call(store, logs) {

            let c = store.size + 2;

            // throw new Error('Error');

            return c;
        },
        async restore(store, logs) {
            let c = store.size;

            return c
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

        console.log(error);
    }
})();