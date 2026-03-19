# about-javascript

*v25.8

## トピック

- [命名規則](/naming.md)

## 目次

1. [Hello World](#hello-world)
1. [変数](#変数)
1. [データ型](#データ型)
1. [条件分岐](#条件分岐)
1. [ループ](#ループ)
1. [関数](#関数)
1. [オブジェクト](#オブジェクト)
1. [配列](#配列)
1. [クラス](#クラス)
1. [例外処理](#例外処理)
1. [非同期処理](#非同期処理)
1. [Map](#map)
1. [Set](#set)
1. [イテレータ](#イテレータ)
1. [JSON](#json)
1. [Date](#date)
1. [Math](#math)
1. [ECMAScript](#ecmascript)

## Hello World

- Hello World

```js
console.log("Hello, World!");
```

- コメント

```js
// Comment

/*
Comment
*/
```

[⬆︎目次へ戻る](#目次)

## 変数

- **const**: 再代入できない

```js
const firstName = "John";
firstName = "Paul";         // エラー
```

- **let**: 再代入できる

```js
let lastName = "Ahr";
lastName = "Lamar";
```

- **var**: 再代入できるが、同じ名前の変数を再定義できてしまう

```js
if (true) {
    var x = 1;
}
console.log(x);     // const, letならエラーになるが、varのためならない
```

- **テンプレートリテラル**: 文字列に変数を組み込む

```js
const username = "John";
console.log(`Hello, ${username}!`); // Hello, John!
```

- **undefined & null**

```js
const u = undefined;    // 値が未定義
const n = null;         // 意図的に「値がない」と設定
```

[⬆︎目次へ戻る](#目次)

## データ型

- プリミティブ型

```js
const username = "john";    // 文字列
const age = 20;             // 数値
const isExists = true;      // 真偽値
const id = Symbol("1234");  // シンボル
const x = null;
const y = undefined;
```

- オブジェクト

```js
const number = {
    "one": 1,
    "two": 2,
};

console.log(number.one);    // 1
console.log(number["two"]); // 2
```

- 配列

```js
const nums = [10, 20, 30];
console.log(nums[0]);       // 10
```

- 正規表現

```js
const numberRegExp = /\d+/;
console.log(numberRegExp.test("123"));  // true
console.log(numberRegExp.test("a"));    // false
```

[⬆︎目次へ戻る](#目次)

## 条件分岐

- **if**

```js
if (score === 0) {
} else if (score > 0) {
} else {
}
```

- **switch**

```js
switch (score) {
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}
```

- **===**: 型まで比較

```js
console.log(1 === "1"); // false
```

- **==**: 型変換して比較

```js
console.log(1 == "1");  // true
```

[⬆︎目次へ戻る](#目次)

## ループ

- while

```js
while (i < 3) {
    i++;
}
```

- do-while

```js
do {
    i++;
} while (i < 3);
```

- for

```js
for (let i=0; i<3; i++) {
}
```


[⬆︎目次へ戻る](#目次)

## 関数

- 宣言

```js
function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2)); // 3
```

- デフォルト引数

```js
function hello(username = "Guest") {
    console.log(`Hello, ${username}`);
}

hello("World"); // Hello, World
hello();        // Hello, Guest
```

- 可変長引数

```js
function sum(...args) {
    let total = 0;
    for (const arg of args) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3));      // 6
console.log(sum(1, 2, 3, 4));   // 10
```

- **無名関数**: 変数に代入したり、引数として渡す用途で使う

```js
const sum = function(a, b) {
    return a + b;
}
```

- **アロー関数**: 無名関数の省略記法

```js
// 基本
const sum = (a, b) => {
    return a + b;
}

const sum2 = (a, b) => a + b;                           // 一行
const hello = username => `Hello, ${username}`;         // 引数1つ
const helloWorld = () => console.log("Hello, World!");  // 引数なし
```

[⬆︎目次へ戻る](#目次)

## オブジェクト

- 基本

```js
const person = {
    name: "John",
    age: 20,
};
```

- プロパティ追加/削除

```js
person.bloodType = "A";
delete person.bloodType;
```

- [for...in](/object/for-in.js) - オブジェクトのプロパティをループ処理
- [プロパティの存在確認](/object/has-own-property.js) - `in`, `Object.hasOwn`, `object.hasOwnProperty`
- [Optional Chaining](/object/optional-chaining.js) - 左辺がnullまたはundefinedの場合、それ以上評価せずundefinedを返す
- [Object.keys(obj)](/object/keys.js) - オブジェクトobj のキー一覧を返す
- [Object.values(obj)](/object/values.js) - オブジェクトobj の値一覧を返す
- [Object.entries(obj)](/object/entries.js) - オブジェクトobj のペア一覧を返す
- [マージ](/object/merge.js) - 複数のオブジェクトをマージする
- [メソッド](/object/method.js) - オブジェクトの関数
- [メソッドの追加](/object/method-add.js)
- [メソッドの短縮記法](/object/method-abbr.js)

[⬆︎目次へ戻る](#目次)

## 配列

- 作成/アクセス

```js
const nums = [10, 20, 30];
console.log(nums[0]);       // 10
```

- 配列のforEach処理

```js
const nums = [1, 2, 3];
nums.forEach(num => {
    console.log(num);
});
```

- 二次元配列

```js
const arr = [
    [10, 20],
    [30, 40],
]
console.log(arr[0][0]); // 10
```

- `array.push(items)` - 要素items を配列の末尾に追加
- `array.pop()` - 配列の末尾の要素を削除
- `array.unshift(items)` - 要素items を配列の先頭に追加
- `array.shift()` - 配列の先頭の要素を削除
- `array.slice(a1, a2)` - インデックスa1~a2 を新しい配列として返す
- `array.splice(a1, a2?, a3)` - 開始インデックスa1 から削除数a2 個の要素を削除し要素a3 を追加
- `array.concat(items)` - 要素items を追加した配列を返す
- `array.forEach(callbackFn)` - 各要素をコールバック関数callbackFn に対して一度ずつ実行
- `array.indexOf(searchElement)` - 検索する要素searchElement のインデックスを返す、なければ-1
- [array.find(callbackFn)](/array/find.js) - コールバック関数callbackFn を満たす最初の要素を返す
- [array.findIndex(callbackFn)](/array/find-index.js) - コールバック関数callbackFn を満たす最初のインデックスを返す
- `array.findLastIndex(callbackFn)` - コールバック関数callbackFn を満たす最後のインデックスを返す
- `array.includes(searchElement)` - 検索する要素searchElement を持つか
- `array.filter(callbackFn)` - コールバック関数callbackFn を満たす全ての要素を配列として返す
- `array.map(callbackFn)` - 各要素にコールバック関数callbackFn を実行した配列を返す
- [array.sort()](/array/sort.js) - ソート (デフォルトは文字列比較のため注意)
- `array.reverse()` - 逆順
- `array.length` - 要素数
- [array.some(fn)](/array/some.js) - 一度でも関数fn がtrue を返した時点でループ終了
- [array.filter(fn)](/array/filter.js) - 関数fn でtrue を返した要素一覧の配列を返す

[⬆︎目次へ戻る](#目次)

## クラス

- 定義

```js
class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}
```

- インスタンス化

```js
const r = new Rectangle(10, 20);
```

- メソッド

```js
class Rectangle {
    // ...
    area() {
        return this.height * this.width;
    }
}
```

- [getter/setter](/class/getter-setter.js) - プロパティへの参照/代入
- [Publicクラスフィールド](/class/public-class-field.js) - クラス外からアクセスできるプロパティ
- [Privateクラスフィールド](/class/private-class-field.js) - クラス外からアクセスされないプロパティ
- [静的メソッド](/class/static-method.js) - インスタンス化せずに利用できるメソッド
- [静的クラスフィールド](/class/static-class-field.js) - クラス自体に定義されたプロパティ
- [継承](/class/extends.js) - 親クラスを継承した子クラス作成
- super ([extends.js](/class/extends.js)) - 親クラスのコンストラクタを呼び出す

[⬆︎目次へ戻る](#目次)

## 例外処理


- try...catch (, finally)

```js
try {
    throwE();
} catch (err) {
    console.log(err.message);
} finally {
    console.log("End.");
}
```

- throw

```js
try {
    throw new Error("エラー");
    // ...
```

- 自作エラーオブジェクト

```js
function ageError(age) {
    if (age < 0) {
        throw new Error(`ageは0以上である必要があります。(age: ${age})`);
    }
}

try {
    ageError(-1);
    // ...
```

- エラー一覧
    - `RangeError` - 数値が有効範囲外
    - `ReferenceError` - 不正な参照
    - `SyntaxError` - 構文エラー
    - `TypeError` - 型が異なる
    - `URIError` - `encodeURI` または`decodeURI` への不正な引数

[⬆︎目次へ戻る](#目次)

## 非同期処理

- **setTimeout**: setTimeout(コールバック関数, delay)

```js
console.log(Date.now());
setTimeout(() => {
    console.log(Date.now());
}, 1000);

/*
1773844016754
1773844017755
*/
```

- **Promiseを使わない**: 以下、1st -> 3rd -> 2nd の順序になるコード

```js
console.log("1st");
setTimeout(() => {
    console.log("2nd");
}, 1000);
console.log("3rd");
```

- **Promiseを使う**: 処理を待つことで1st -> 2nd -> 3rd の順序になる

```js
console.log("1st");
new Promise((resolve) => {
    setTimeout(() => {
        console.log("2nd");
        resolve();
    }, 1000);
}).then(() => {
    console.log("3rd");
});
```

- Promiseの状態
    - `pending  `: 初期状態
    - `fulfilled`: 処理成功
    - `rejected `: 処理失敗
<br>

- [Promiseオブジェクト](/async/promise-object.js)
- [Promiseチェーン](/async/promise-chain.js) - 値を次のコールバックに渡す
- [Promise.all](/async/promise-all.js) - Promise を一度に複数実行
- [Promise.race](/async/promise-race.js) - Promis が１つでも完了した時点で次の処理を実行
- `async` - 常にPromise を返す関数になる
- `await` - Promise がfulfilled されるまで待つ
- [async/await サンプル](/async/async-await.js) - 簡潔に書ける

[⬆︎目次へ戻る](#目次)

## Map

任意の型をキーにできる。

- 作成

```js
const nums = new Map([
    ["one", 1],
    ["two", 2]
]);
```

- 要素の追加/取り出し

```js
nums.set("three", 3);
console.log(nums.get("three")); // 3
```

- [forEachを使う](/map/for-each.js)
- [forを使う](/map/for.js)
- [WeakMap](/map/weakmap.js) - 弱参照(オブジェクトへの参照はあるがGCされる可能性のある弱い参照) のMap
- [WeakMap (応用)](/map/weakmap-advance.js)
- `map.size` - キーと値のペアの数
- `map.clear()` - 全てのキーと値のペアを削除
- `map.delete(key)` - 指定key を削除
- `map.get(key)` - 指定key の値 を返す
- `map.set(key, value)` - key, value のペアを追加
- `map.has(key)` - 指定key が存在するか？
- map.keys() ([for.js](/map/for.js))
- map.values() ([for.js](/map/for.js))

[⬆︎目次へ戻る](#目次)

## Set

重複する値のないコレクション。

- 作成

```js
const nums = new Set(["one", "two"]);
```

- 値の追加/削除

```js
nums.add("three");
nums.delete("three");
```

- [集合演算メソッド](/set/set-operations.js)
    - `union`: 和集合
    - `intersection`: 積集合
    - `difference`: 差集合
    - `symmetricDifference`: 対称差集合
<br>

- [forEachを使う](/set/for-each.js)
- [forを使う](/set/for.js)
- [WeakSet](/set/weakset.js) - 弱参照のSet

[⬆︎目次へ戻る](#目次)

## イテレータ

- ジェネレータ関数

```js
function* gf() {
    yield 1;
    yield 2;
}

const g = gf();
console.log(g.next());  // { value: 1, done: false }
console.log(g.next());  // { value: 2, done: false }
console.log(g.next());  // { value: undefined, done: true }
```

- **イテレータ**: 必要なタイミングで値を生成(遅延評価) する省メモリな処理

```js
function* numGenerator() {
    for (let i=1; i<10; i++) {
        yield i;
    }
}

const iter = numGenerator();
console.log(iter.next().value); // 1
console.log(iter.next().value); // 2
```

- Iterator.from 静的メソッド

```js
const iterNums = Iterator.from([10, 20, 30]);
console.log(iterNums.next());   // { value: 10, done: false }
```

[⬆︎目次へ戻る](#目次)

## JSON

- JSONオブジェクト ([person.json](/json/person.json))

```json
{
    "object": {
        "name": "Paul",
        "age": 22,
        "height": 179.6,
        "weight": 78.9,
        "badYears": [2015, 2021]
    }
}
```

- 読み込み

```js
const fs = require('fs');
const json = fs.readFileSync("json/person.json", "utf-8");
const obj = JSON.parse(json);

console.log(obj.object.name);   // Paul
```

[⬆︎目次へ戻る](#目次)

## Date

- インスタンス作成

```js
const now = new Date();
console.log(now);
```

- メソッド
    - ローカル時刻の取得は`get****()`、設定は`set****()`。
    - UTCの取得は`getUTC****()`、設定は`setUTC****()`。
    - `****`には以下の文字列を使用。（例: `getFullYear()`）
        - 年: `FullYear`
        - 月: `Month`
        - 日: `Date`
        - 時: `Hours`
        - 分: `Minutes`
        - 秒: `Seconds`
        - ミリ秒: `Milliseconds`
    - 曜日はローカル時刻の場合`getDay()`、UTCの場合`getUTCDay()`。

[⬆︎目次へ戻る](#目次)

## Math

- `Math.PI` - 円周率
- `Math.random()` - 乱数生成
- `Math.max(...items)` - 最大値
- `Math.min(...items)` - 最小値
- `Math.floor(f)` - f以下の最大の整数
- `Math.ceil(f)` - f以上の最小の整数
- `Math.round(f)` - fを四捨五入した数値
- `Math.trunc(f)` - fの小数点以下を切り落とした整数

[⬆︎目次へ戻る](#目次)

## ECMAScript

モジュール: 変数・関数等をまとめたもの。JSでは１つのJSファイル。

- export

```js
const id = 1234;
const color = "red";
export {id, color};
```

- import

```js
import {id, color} from "./export1.js";
console.log(id);    // 1234
console.log(color); // red
```

- export (宣言と同時にexport)

```js
export const appName = "EIKON";
export function hello() {
    console.log("Hello!");
};
```

- export (名前付きexport)

```js
export { appName as an };
```

- **export (デフォルトexport)**: デフォルトでエクスポートするため、インポート側は任意の名前をつける

```js
// export側
const full = {
    "maxHp": 9999,
    "maxMp": 999,
};

export default full;

// import側
import maxStatus from "./export3.js";
console.log(maxStatus.maxHp);   // 9999
```

- import (全てimport)

```js
import * as ex4 from "./export4.js";
console.log(ex4.a);
```

- ECMAScriptの実行

```html
<script type="module" src="./ecmascript/mod.js"></script>
```
