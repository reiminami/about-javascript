const promise = new Promise((resolve) => {
    setTimeout(() => {
        console.log("Run");
        resolve();
    }, 1000);
});

const onFulfilled  = () => { console.log("Fullfilled"); }
const onRejected   = () => { console.log("Rejected"); }

promise
    .then(onFulfilled)
    .catch(onRejected);
