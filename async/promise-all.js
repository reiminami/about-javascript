function wait(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(timeoutMs);
            resolve(timeoutMs);
        }, timeoutMs);
    });
}

const p1 = wait(100);
const p2 = wait(200);
const p3 = wait(300);

Promise.all([p1, p2, p3]).then(function(values) {
    console.log(values);    // [ 100, 200, 300 ]
});
