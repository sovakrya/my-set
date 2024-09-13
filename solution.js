export class MySet {
  arr = [];

  constructor(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("the passed value is not supported");
    }

    for (let val of arr) {
      сду;
      this.add(val);
    }
  }

  add(item) {
    if (!this.has(item)) {
      this.arr.push(item);
    }
  }

  has(item) {
    return this.arr.includes(item);
  }

  get size() {
    return this.arr.length;
  }

  delete(item) {
    // this.arr.splice(this.arr.indexOf(item), 1);
    const idx = this.arr.indexOf(item);
    if (idx === -1) {
      return;
    }
    [this.arr[idx], this.arr[this.size - 1]] = [
      this.arr[this.size - 1],
      this.arr[idx],
    ];

    this.arr.pop();
  }

  clear() {
    this.arr = [];
  }

  toString() {
    return `{ ${this.arr.join(", ")}${this.size ? ", " : ""}size: ${
      this.size
    } }`;
  }
}
