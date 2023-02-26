class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }
}

function findNode(value) {
  let curNode = this.head;
  while (curNode.value != value) {
    curNode = curNode.next;
  }
  if (!curNode)
    return null;
  return curNode;

}

function insertAfter(value, newValue) {
  const newNode = new Node(newValue);
  const curNode = this.findNode(value);

  newNode.next = curNode.next;
  curNode.next = newNode;
}

function append(value) {
  const newNode = new Node(value);
  let curNode = this.head;

  while (curNode.next)
    curNode = curNode.next;
  curNode.next = newNode;
}

function prepend(value) {
  const newNode = new Node(value);
  newNode.next = this.head;
  this.head = newNode;
}

function remove(value) {
  let curNode = this.head;
  let preNode = null;

  while (curNode.value != value) {
    preNode = curNode;
    curNode = curNode.next;
  }

  if (curNode == this.head) {
    this.head = curNode.next;
  }else {
    preNode.next = curNode.next;
  }

}


function removeHead() {
  this.head = this.head.next;
}

function removeTail() {
  let curNode = this.head;
  let preNode = null;

  while(curNode.next) {
    preNode = curNode;
    curNode = curNode.next;
  }
  preNode.next = null;
}

function traverse() {
  let curNode = this.head;
  while(curNode) {
    console.log(curNode.value);
    curNode = curNode.next;
  }
}

let list = new LinkedList(1);

