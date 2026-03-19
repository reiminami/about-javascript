let obj = {name: "John"};
let wm = new WeakMap();
wm.set(obj, "Paul");
console.log(wm.has(obj));   // true
obj = null;
console.log(wm.has(obj));   // false (GC実施)
