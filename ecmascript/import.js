import {id, color} from "./export1.js";
console.log(id);    // 1234
console.log(color); // red

import {appName, hello, an} from "./export2.js";
console.log(appName);   // EIKON
hello();                // Hello!
console.log(an);

import maxStatus from "./export3.js";
console.log(maxStatus.maxHp);   // 9999
console.log(maxStatus.maxMp);   // 999

import * as ex4 from "./export4.js";
console.log(ex4.a);
console.log(ex4.b());
