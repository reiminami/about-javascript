// async: 常にPromise　を返す関数になる
const wait = async(timeoutMs) => {
    // await: Promiseがfulfilled されるまで待つ
    await new Promise((resolve) => {
        setTimeout(() => { resolve(); }, timeoutMs);
    });
    console.log(`${timeoutMs}ms秒かかった。`);
}

await wait(100);
await wait(200);
await wait(300);
