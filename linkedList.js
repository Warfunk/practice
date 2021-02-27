class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  appendNode = (value) => {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  };

  prependNode = (value) => {
    const newNode = new Node(value);
    let temp = this.head;
    this.head = newNode;
    this.head.next = temp;
    this.length++;
    return this;
  };

  insertNode = (value, index) => {
    const newNode = new Node(value);
    if (index === 0) {
      this.prependNode(value);
      return this;
    }
    if (index === this.length) {
      this.appendNode(value);
      return this;
    }

    let currIdx = 0;
    let curr = this.head;
    while (currIdx !== index - 1 && curr) {
      curr = curr.next;
      currIdx++;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.length++;
    return this;
  };

  removeNode = (index) => {
    if (index >= this.length) {
      console.log('this index is does not exist');
      return this;
    }
    let currIdx = 0;
    let curr = this.head;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      while (currIdx !== index - 1) {
        curr = curr.next;
        currIdx++;
      }
      curr.next = curr.next.next;
    }
    this.length--;
    return this;
  };

  reverse = () => {
    let curr = this.head;
    let prev = null;
    let next;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    let newTail = this.head;
    this.head = this.tail;
    this.tail = newTail;
    return this;
  };
}

const list = new LinkedList(10);
list.insertNode(3000, 0);
list.prependNode(1);
list.appendNode(20);
list.appendNode(45);
list.insertNode(22, 1);
list.appendNode(70);
list.prependNode(1000);
list.insertNode(500, 2);
list.insertNode(69, 5);
list.insertNode(6000, list.length);

function logList(list) {
  let curr = list.head;
  while (curr) {
    console.log(curr.value);
    curr = curr.next;
  }
}
console.log('orig');
logList(list);
list.reverse();
console.log('reversed');
logList(list);
list.insertNode(3, 1);
console.log('inserted');
logList(list);
console.log('length: ', list.length);
list.removeNode(0);
console.log('removed');
logList(list);
console.log('length: ', list.length);
list.removeNode(11);
logList(list);
