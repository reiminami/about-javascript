function wait(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(timeoutMs);
            resolve(timeoutMs);
        }, timeoutMs);
    });
}

const racePromise = Promise.race([
    wait(100),
    wait(200),
    wait(300),
]);

racePromise.then(value => {
    console.log(value);
});
