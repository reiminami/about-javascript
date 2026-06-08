# About JavaScript

*v25

## 目次

1. [命名規則](#命名規則)
1. [Hello World](#hello-world)
1. [変数と定数](#変数と定数)
1. [データ型](#データ型)
1. [条件分岐](#条件分岐)
1. [ループ](#ループ)
1. [配列](#配列)
1. [Map](#map)
1. [Set](#set)
1. [イテレータ](#イテレータ)
1. [オブジェクト](#オブジェクト)
1. [関数](#関数)
1. [クラス](#クラス)
1. [標準関数](#標準関数)
1. [例外処理](#例外処理)
1. [非同期処理](#非同期処理)
1. [モジュール](#モジュール)
1. [Date](#date)

## 命名規則

```js
// ファイル名
// my-file.js

// 変数・定数
let myVariable = 20;

// 関数名
function myFunction() {
}

// クラス名
class MyClass {}
```

## Hello World

**最低限のコード**

```js
console.log("Hello, World!");
```

**実行**

```js
node sample.js
```

[⬆︎目次へ戻る](#目次)

## 変数と定数

**定数** - 再代入できない

```js
const name = "John";
console.log(name);
```

**変数** - 再代入できる

```js
let name = "John";
console.log(name);
```

**var** - 再代入できる・同じ名前の変数を再定義できる等

```js
if (true) {
    var errorCode = 200;
}

console.log(errorCode);
```

**テンプレートリテラル**

```js
const name = "John";
console.log(`Hello, ${name}!`); // Hello, John!
```

[⬆︎目次へ戻る](#目次)

## データ型

**プリミティブ型**

- 文字列
- 数値
- 真偽値
- null - 意図的に値がないことを示す
- undefined - 値が定義されていないことを示す

**シンボル (プリミティブ)**

```js
const id = Symbol("123");
```

**オブジェクト**

```js
const number = {
    "one": 1,
    "two": 2,
};

console.log(number.one);    // 1
console.log(number.two);    // 2
console.log(number["one"]); // 1
console.log(number["two"]); // 2
```

**配列**

```js
const nums = [10, 20, 30];
console.log(nums[0]);       // 10
```

**正規表現**

```js
const numberRegExp = /\d+/;

console.log(numberRegExp.test("123"));  // true
console.log(numberRegExp.test("a"));    // false
```

[⬆︎目次へ戻る](#目次)

## 条件分岐

**if**

```js
if (score === 0) {
    console.log("A");
} else if (score === 1) {
    console.log("B");
} else {
    console.log("C");
}
```

**switch**

```js
switch (score) {
    case 0:
        console.log("A");
        break;
    case 1:
        console.log("B");
        break;
    default:
        break;
}
```

[⬆︎目次へ戻る](#目次)

## ループ

**while**

```js
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
```

**do-while**

```js
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 3);
```

**for**

```js
for (let i=0; i<3; i++) {
    console.log(i);
}
```

[⬆︎目次へ戻る](#目次)

## 配列

**初期化・アクセス**

```js
const nums = [10, 20, 30];

console.log(nums[2]);
```

**二次元配列**

```js
const arr = [
    [10, 20, 30],
    [40, 50, 60],
];

console.log(arr[1][2]);     // 60
```

**forEach**

```js
const nums = [10, 20, 30];

nums.forEach(num => {
    console.log(num);
});
```

**メソッド**

```js
const nums = [10, 20, 30];
var x;

nums.push(40);              // 要素[0]を末尾に追加
x = nums.pop();             // 末尾の要素を取り出す
nums.unshift(5);            // 要素[0]を先頭に追加
x = nums.shift();           // 先頭の要素を取り出す
x = nums.slice(1, 3);       // 位置[0]~[1]を新しい配列として返す
nums.splice(2, 1, 40);      // 位置[0]から要素数[1]を削除し、要素[2]を追加
x = nums.concat(50);        // 要素[0]を追加した配列を返す
x = nums.indexOf(40);       // 要素[0]の位置を返す
x = nums.lastIndexOf(40);   // 要素[0]の位置を返す (後ろから)
x = nums.includes(40);      // 要素[0]を持つか？
nums.reverse();             // 逆順
nums.sort();                // ソート
nums.sort((a, b) => a - b); // ソート (正攻法)
x = nums.length;            // 要素数

// CallbackFn[0]を満たす最初の要素を返す
x = nums.find(num => num > 20);

// CallbackFn[0]を満たす最初の要素の位置を返す
x = nums.findIndex(num => num > 20);

// CallBackFn[0]を満たす要素の配列を返す
function isEven(num) {
    return num % 2 === 0;
}
x = nums.filter(isEven);

// CallbackFn[0]を各要素に適用した配列を返す
function plusOne(num) {
    return num + 1;
}
x = nums.map(plusOne);

// 一度でもCallbackFn[0]がtrueを返した時点でループを終了する
function isTen(num) {
    return num === 10;
}
x = nums.some(isTen);
```

[⬆︎目次へ戻る](#目次)

## Map

**基本** - 任意の型をキーにできる

```js
const nums = new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3],
]);

nums.set("four", 4);
console.log(nums.get("four"));  // 4
```

**forEach**

```js
nums.forEach((value, key) => {
    console.log(`${key} => ${value}`);
})
```

**for**

```js
// キー
for (const key of nums.keys()) {
    console.log(key);
}

// 値
for (const value of nums.values()) {
    console.log(value);
}

// ペア
for (const [key, value] of nums) {
    console.log(`${key} => ${value}`);
}
```

**WeakMap** - 弱参照(参照はあるがGCされる可能性のある弱い参照)のMap

```js
let obj = {name: "John"};
let wm = new WeakMap();

wm.set(obj, "Paul");
console.log(wm.has(obj));   // true

obj = null;
console.log(wm.has(obj));   // false (ガベージコレクタ済)
```

**WeakMap (応用)**

```js
const wm = new WeakMap();

class Enemy {
    constructor(name) {
        wm.set(this, {name});
    }

    display() {
        console.log(`${wm.get(this).name} appeared!`);
    }
}

const boss = new Enemy("Guard Scorpion");
boss.display();

console.log(boss.name); // undefined
console.log(boss);      // Enemy {}
```

**メソッド**

```js
const nums = new Map([
    ["one", 1],
    ["two", 2],
    ["three", 3],
]);

var x;

x = nums.size;          // キーと値のペアの数
nums.delete("three");   // キー[0]を削除
x = nums.get("two");    // キー[0]の値を返す
nums.set("four", 4);    // キー[0]と値[1]のペアを追加
x = nums.has("four");   // キー[0]が存在するか？
nums.clear();           // 全てのキーと値のペアを削除
```

[⬆︎目次へ戻る](#目次)

## Set

**基本** - 値が重複しない

```js
const nums = new Set(["one", "two"]);

nums.add("three");
nums.delete("three");
```

**forEach**

```js
nums.forEach((value) => {
    console.log(value);
});
```

**for**

```js
// 値
for (const value of nums.values()) {
    console.log(value);
}

// entry
for (const entry of nums.entries()) {
    console.log(entry);
}

// 値 (省略記法)
for (const value of nums) {
    console.log(value);
}
```

**WeakSet** - 弱参照のSet

```js
const obj = {};
const ws = new WeakSet();

ws.add(obj);
console.log(ws.has(obj));   // true

ws.delete(obj);
console.log(ws.has(obj));   // false
```

[⬆︎目次へ戻る](#目次)

## イテレータ

**ジェネレータ関数**

```js
function* gf() {
    yield 1;
    yield 2;
}

const g = gf();
console.log(g.next());  // {value: 1, done: false}
console.log(g.next());  // {value: 2, done: false}
console.log(g.next());  // {value: undefined, done: true}
```

**イテレータ** - 必要なタイミングで値を生成 (遅延評価)の省メモリな処理

```js
function* numGenerator() {
    for (let i=1; i<5; i++) {
        yield i;
    }
}

const iter = numGenerator();
console.log(iter.next().value); // 1
console.log(iter.next().value); // 2
```

**Iterator.from** - 静的メソッド

```js
const iterNums = Iterator.from([10, 20, 30]);
console.log(iterNums.next());   // {value: 10, done: false}
```

[⬆︎目次へ戻る](#目次)

## オブジェクト

```js
const person = {
    name: "John",
    age: 20,
};
var x;

x = Object.keys(person);        // キー一覧
x = Object.values(person);      // 値一覧
x = Object.entries(person);     // ペア一覧
x = Object.assign({}, person, {born: 1980});    // オブジェクトのマージ
x = person.name.length;         // 長さ
```

**オプショナル** - 左辺がnullまたはundefinedの場合それ以上評価せずundefinedを返す

```js
x = person.isDead?.length;
```

**メソッド**

```js
const hello = {
    ja: function() {
        console.log("こんにちは");
    },
    en: function() {
        console.log("HELLO");
    },
};
hello.ja();     // こんにちは
hello.en();     // HELLO
```

**メソッドの追加**

```js
hello.xx = function() {
    console.log("XXXXX");
};
```

**メソッドの短縮記法**

```js
const hi = {
    ja() {
        console.log("ハーイ");
    }
};
hi.ja();
```

**JSONオブジェクト** - 拡張子json

```json
{
    "object": {
        "name": "John",
        "age": 22,
        "height": 178.2,
        "weight": 69.9,
        "positions": ["C", "2B"]
    }
}
```

**JSONオブジェクトの使用**

```js
const fs = require('fs');
const json = fs.readFileSync("person.json", "utf-8");
const obj = JSON.parse(json);

console.log(obj.object.name);   // John
```

[⬆︎目次へ戻る](#目次)

## 関数

**定義・使用**

```js
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));
```

**可変長引数**

```js
function sum(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}

console.log(sum(10, 20, 30));
```

**デフォルト引数**

```js
function hello(name = "Guest") {
    console.log(`Hello, ${name}`);
}

hello("World"); // Hello, World
hello();        // Hello, Guest
```

**無名関数** - 変数に代入したり、引数として渡す用途で使う

```js
const sum = function(a, b) {
    return a + b;
}

console.log(sum(10, 20));
```

**アロー関数** - 無名関数の省略記法

```js
// 基本
const sum = (a, b) => {
    return a + b;
}

// 一行
const sum2 = (a, b) => a + b;

// (引数が1つの場合)
const hello = name => `Hello, ${name}`;

// (引数がない場合)
const hi = () => "Hi!";
```

[⬆︎目次へ戻る](#目次)

## クラス

**基本**

```js
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(this.width * this.height);
    }
}

const rect = new Rectangle(10, 20);
rect.area();
```

**プロパティへの参照/代入**

```js
class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const p = new Person("John");
p.name = "Jacob";
console.log(p.name);    // Jacob
```

**publicクラスフィールド**

```js
class User {
    name;
}

const user = new User();
user.name = "john";
console.log(user.name);
```

**privateクラスフィールド**

```js
class User {
    #id;

    constructor() {
        this.#id = 12345;
    }

    displayId() {
        console.log(this.#id);
    }
}

const user = new User();
user.displayId();
```

**静的メソッド** - インスタンス化せずに利用できるメソッド

```js
class Person {
    static hello() {
        console.log("Hello");
    }
}

Person.hello();
```

**静的クラスフィールド** - クラス自体に定義されたプロパティ

```js
class Language {
    static JAPANESE = "Japanese";
    static ENGLISH = "English";
}

console.log(Language.JAPANESE);
```

**継承**

```js
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        console.log(this.width * this.height);
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

const square = new Square(10);
square.area();
```

[⬆︎目次へ戻る](#目次)

## 標準関数

**Math**

```js
var x;

x = Math.PI;            // 円周率
x = Math.random();      // 乱数 (0 ~ 1)
x = Math.max(8, 9);     // 最大値
x = Math.min(8, 9);     // 最小値
x = Math.floor(2.9);    // [0]以下の最大の整数
x = Math.ceil(3.1);     // [0]以上の最小の整数
x = Math.round(4.5);    // [0]を四捨五入した数値
x = Math.trunc(5.9);    // [0]の小数点を取り除いた整数
```

[⬆︎目次へ戻る](#目次)

## 例外処理

**捕捉**

```js
try {
    XXXXXFunction();
} catch (err) {
    console.log(err.message);
} finally {
    console.log("End.");
}
```

**スロー**

```js
throw new Error("エラーです。");
```

**自作エラーオブジェクト**

```js
function ageError(age) {
    if (age < 0) {
        throw new Error(`ageは0以上である必要があります。 (age: ${age})`);
    }
}

try {
    var age = -1;
    ageError(age);
} catch (err) {
    console.log(err.message);
}
```

**エラー一覧**

- RangeError - 数値が有効範囲外
- ReferenceError - 不正な参照
- SyntaxError - 構文エラー
- TypeError - 型が異なる
- URIError - encodeURIまたはdecodeURIへの不正な引数

[⬆︎目次へ戻る](#目次)

## 非同期処理

- [setTimeout](/async/settimeout.js)(コールバック関数, ディレイ秒数) - 指定時間経過後に処理を実行する
- [Promiseを使わない (setTimeout)](/async/settimeout2.js)
- [Promiseを使う](/async/promise.js) - pending(初期), fulfilled(成功), rejected(失敗)
- [Promiseオブジェクト](/async/promise-object.js)
- [Promiseチェーン](/async/promise-chain.js) - 値を次のコールバック関数に渡す
- [Promise.all](/async/promise-all.js) - Promiseを一度に複数実行
- [Promise.race](/async/promise-race.js) - Promiseが一つでも完了した時点で次の処理を実行
- [async/await](/async/async-await.js) - 簡潔に書ける

[⬆︎目次へ戻る](#目次)

## モジュール

モジュール - 変数や関数をまとめたもので、JavaScriptでは１つのファイルのこと。

- [エクスポート](/mod/export.js)
- [インポート](/mod/import.js)
- [宣言と同時にエクスポート](/mod/export-decl.js)
- [名前付きエクスポート](/mod/export-with-name.js)
- [デフォルトエクスポート](/mod/default-export.js) - インポート側が任意の名前をつける
- [デフォルトインポート](/mod/default-import.js)
- [全てインポート](/mod/import-all.js)
- [モジュールの実行](/mod/mod.html) - .

[⬆︎目次へ戻る](#目次)

## Date

**インスタンス生成**

```js
const now = new Date();
console.log(now);
```

**ローカル時刻の取得**

```js
x = now.getFullYear();      // 年
x = now.getMonth();         // 月
x = now.getDate();          // 日
x = now.getHours();         // 時
x = now.getMinutes();       // 分
x = now.getSeconds();       // 秒
x = now.getMilliseconds();  // ミリ秒
```

**ローカル時刻の設定** (月のみ)

```js
now.setMonth(10);
```

**UTCの取得** (月のみ)

```js
x = now.getUTCMonth();
```

**UTCの設定** (月のみ)

```js
now.setUTCMonth(11);
```

**曜日の取得**

```js
x = now.getDay();
```

**UTC曜日の取得**

```js
x = now.getUTCDay();
```
