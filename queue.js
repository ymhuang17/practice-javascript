class Queue {
 arr = [];

  enqueue(item) {
    this.arr.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    return this.arr.shift();
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.arr.length;
  }

  front() {
    if (this.isEmpty()) {
      return "queue is empty";
    }
    return this.arr[0];
  }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("queue size is: " + queue.size());

console.log("queue front is: " + queue.front());

const ele = queue.dequeue();

console.log("out element is: " + ele);

console.log("queue size is: " + queue.size());

