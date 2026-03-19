const obj1 = {a: 1};
const obj2 = {b: 2};

const mergedObj1 = Object.assign({}, obj1, obj2);   // { a: 1, b: 2 }
const mergedObj2 = {...obj1, ...obj2};              // { a: 1, b: 2 }
