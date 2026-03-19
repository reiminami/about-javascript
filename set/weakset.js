const obj = {};
const ws = new WeakSet();
ws.add(obj);
console.log(ws.has(obj));   // true
ws.delete(obj);
console.log(ws.has(obj));   // false
