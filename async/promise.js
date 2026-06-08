console.log("One");             // 1回目の出力

new Promise((resolve) => {
    setTimeout(() => {
        console.log("Two");     // 2回目の出力
        resolve();
    }, 1000);
}).then(() => {
    console.log("Three");       // 3回目の出力
});
