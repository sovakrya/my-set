import { MySet } from "./solution";

const a = new MySet([1, 2, 3, 4, 4, 4, 3, 3]);

console.log(`${a}`);
a.add(5);
console.log(`${a}`);
a.add(5);
console.log(`${a}`);
console.log(a.has(5));
a.delete(2);
console.log(`${a}`);
a.clear();
console.log(`${a}`);
