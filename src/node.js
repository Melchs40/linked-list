export default class Node {
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
