Promise.resolve(10).then((value) => {
    console.log(value);     // 10
    return value * 2;
}).then(value => {
    console.log(value);     // 20
    return value * 2;
}).then(value => {
    console.log(value);     // 40
});
