'use strict';

class Transaction {
    store = new Map();

    logs = [];
    status = null;

    #addLogInfo = (data) => {
        const { index, meta, result, error } = data;

        let errorObj = null;

        if (error) {
            errorObj = {
                name: error.name,
                message: error.message,
                stack: error.stack
            }
        }


        this.logs.push({
            index,
            meta,
            stepResult: result || null,
            error: errorObj
        })
    }

    #status = (st) => {
        if (st === 'success') {
            this.status = 'Transaction status: success'
        }

        if (st === 'rollback') {
            this.status = 'Transaction status: rollback'
        }

        if (st === 'failed') {
            this.status = 'Transaction status: failed'
        }
    }

    async dispatch(scen) {
        let current;

        try {
            for (let key in scen) {
                const step = current = scen[key];
                let result = await step.call(this.store, this.logs);

                this.store.set(step.index, result);
                this.#addLogInfo({ ...step, result });
            }

            this.#status('success');
        } catch (error) {

            this.#addLogInfo({ ...current, error });

            this.rollback(scen, current.index);
        }

    }


    async rollback(scen, index) {
        const reverse = [...this.store].reverse();
        const reverseStorage = new Map(reverse);

        let current;

        try {
            for (let [key] of reverseStorage) {
                const rollbackScen = current = scen.find((el) => el.index === key);

                const result = await rollbackScen.restore(this.store, this.logs);

                this.store.delete(rollbackScen.index);

                this.#addLogInfo({ ...rollbackScen, result });

            }

            this.#status('rollback');

        } catch (error) {
            this.#addLogInfo({ ...current, error });
            this.#status('failed');
        }


    }
}


module.exports = Transaction;