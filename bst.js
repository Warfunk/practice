class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  addNode(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this.root;
    }
    let curr = this.root;
    while (curr) {
      if (value < curr.value) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = newNode;
          return this.root;
        }
      } else if (value >= curr.value) {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = newNode;
          return this.root;
        }
      }
    }
  }

  lookUp(value) {
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        console.log('node = ', curr);
        return curr;
      } else if (value < curr.value) {
        curr = curr.left;
      } else if (value > curr.value) {
        curr = curr.right;
      }
    }
    console.log('node does not exist.');
  }
}

const newTree = new BST();
newTree.addNode(1);
newTree.addNode(45);
newTree.addNode(30);
newTree.addNode(60);
newTree.addNode(48);
newTree.lookUp(45);
newTree.lookUp(1);
newTree.lookUp(60);
newTree.lookUp(48);

console.log(newTree);
