// creating hash table class

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //hash function
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  // create new data point in hash table
  set(key, value) {
    let h = this._hash(key);
    if (!this.data[h]) {
      this.data[h] = [];
    }
    this.data[h].push([key, value]);
    return this.data;
  }

  // find data point in hash table
  get(key) {
    let h = this._hash(key);
    for (let item of this.data[h]) {
      if (item[0] === key) {
        console.log(item);
        return item;
      }
    }
    return undefined;
  }

  // return all existing keys in hash table
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          keysArray.push(this.data[i][j][0]);
        }
      }
    }
    console.log(keysArray);
    return keysArray;
  }
}
