const wm = new WeakMap();

class Enemy {
    constructor(name) {
        wm.set(this, {name});
    }
    display() {
        console.log(`${wm.get(this).name} appeared !`);
    }
}

const boss1 = new Enemy("Guard Scorpion");
boss1.display();            // Guard Scorpion appeared !
console.log(boss1.name);    // undefined
console.log(boss1);         // Enemy {}
