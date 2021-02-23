class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let h = this._hash(key);
    if (!this.data[h]) {
      this.data[h] = [];
    }
    this.data[h].push([key, value]);
    return this.data;
  }

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

const myHashTable = new HashTable(2);

myHashTable.set('grapes', 1000);
myHashTable.get('grapes');
myHashTable.set('oranges', 'howdy');
myHashTable.get('oranges');
myHashTable.set('apples', 10);
myHashTable.set('bananas', 1);
myHashTable.keys();
