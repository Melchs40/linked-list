class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
  editValue(value) {
    this.value = value;
  }

  editNext(next) {
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.data = null;
    this.amount = 0;
  }

  append(value) {
    let node = new Node();
    if (!this.data) {
      this.data = node;
      node.value = value;
    } else {
      let list = this.data;
      while (list.next) {
        list = list.next;
      }
      list.next = node;
      node.value = value;
    }
    this.amount++;
  }

  prepend(value) {
    let node = new Node();
    if (!this.data) {
      this.data = node;
      node.value = value;
    } else {
      let temp = this.data;
      node.value = value;
      node.next = temp;
      this.data = node;
    }
    this.amount++;
  }

  size() {
    return this.amount;
  }

  head() {
    if (!this.data) {
      return 'no data';
    } else return this.data;
  }

  tail() {
    if (!this.data) {
      return 'no data';
    } else {
      let list = this.data;
      while (list.next) {
        list = list.next;
      }
      return list;
    }
  }

  at(index) {
    let num = 0;
    if (!this.data) {
      return 'no data';
    } else {
      let list = this.data;
      while (num < index) {
        list = list.next;
        num++;
      }
      return list;
    }
  }

  pop() {
    if (!this.data) {
      return 'no data';
    } else {
      let list = this.data;
      while (list.next.next) {
        list = list.next;
      }
      list.next = null;
    }
  }

  contains(value) {
    if (!this.data) {
      return 'no data';
    } else {
      let list = this.data;
      while (list) {
        if (list.value == value) {
          return `Your list contains ${value}`;
        }
        list = list.next;
      }
      return `Your list doesn't contain ${value}`;
    }
  }

  find(value) {
    if (!this.data) {
      return 'no data';
    } else {
      let list = this.data;
      let num = 0;
      while (list) {
        if (list.value == value) {
          return `${value} is at indice ${num}`;
        }
        list = list.next;
        num++;
      }
      return `Your list doesn't contain a node with ${value}`;
    }
  }

  toString() {
    if (!this.data) {
      return 'no data';
    } else {
      let list = this.data;
      let output = '';
      while (list) {
        output += `( ${list.value} ) -> `;
        list = list.next;
      }
      output += 'null';
      return output;
    }
  }

  insertAt(value, index) {
    if (!this.data) {
      return 'no data';
    } else {
      let list = this.data;
      let num = 0;
      while (num < index - 1) {
        list = list.next;
        num++;
      }
      let current = list;
      let next = list.next;
      let newNode = new Node();
      newNode.value = value;
      current.next = newNode;
      newNode.next = next;
    }
  }

  removeAt(index) {
    if (!this.data) {
      return 'no data';
    } else {
      let list = this.data;
      let num = 0;
      while (num < index - 1) {
        list = list.next;
        num++;
      }
      let before = list;
      let after = list.next.next;
      before.next = after;
    }
  }
}
