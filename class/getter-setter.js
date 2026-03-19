class User {
    constructor(name) { this._name = name; }
    // プロパティ名の前にget/setをつける。
    get name()        { return this._name; }
    set name(newName) { this._name = newName; }
}

const user = new User("John");  // name: John
user.name = "Jacob";            // name: Jacob
console.log(user.name);         // "Jacob"
