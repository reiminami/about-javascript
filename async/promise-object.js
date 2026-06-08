const p = new Promise((resolve) => {
    setTimeout(() => {
        console.log("実行");
        resolve();
    }, 1000);
});

// 成功時に呼び出す
const onFulfilled = () => {
    console.log("Fulfilled");
}

// 失敗時に呼び出す
const onRejected = () => {
    console.log("Rejected");
};

p
.then(onFulfilled)  // 成功
.catch(onRejected); // 失敗
