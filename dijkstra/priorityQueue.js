// 우선순위 큐를 힙으로 구현한것
// min, max는 자식 부모 비교값만 반대로 하면 쉽게 구할 수 있다.

class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  getSize() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return this.heap.length < 2;
  }

  insert(node) {
    let current = this.heap.length;
    while (current > 1) {
      const parent = ~~(current / 2);
      if (this.heap[parent] > node) {
        this.heap[current] = this.heap[parent];
        current = parent;
      } else break;
    }
    this.heap[current] = node;
  }

  remove() {
    let min = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (this.heap[leftChildIndex]) {
        let compareWithChildrenIndex = leftChildIndex;
        if (
          this.heap[rightChildIndex] &&
          this.heap[rightChildIndex] < this.heap[compareWithChildrenIndex]
        ) {
          compareWithChildrenIndex = rightChildIndex;
        }

        if (this.heap[current] > this.heap[compareWithChildrenIndex]) {
          [this.heap[current], this.heap[compareWithChildrenIndex]] = [
            this.heap[compareWithChildrenIndex],
            this.heap[current],
          ];

          current = compareWithChildrenIndex;
        } else break;

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 1) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }

    return min;
  }
}

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  getMax() {
    return this.heap[1];
  }

  getSize() {
    return this.heap.length - 1;
  }

  isEmpty() {
    return this.heap.length < 2;
  }

  insert(node) {
    let current = this.heap.length;
    while (current > 1) {
      const parent = ~~(current / 2);
      if (this.heap[parent] < node) {
        this.heap[current] = this.heap[parent];
        current = parent;
      } else break;
    }
    this.heap[current] = node;
  }

  remove() {
    let max = this.heap[1];
    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (this.heap[leftChildIndex]) {
        let compareWithChildrenIndex = leftChildIndex;
        if (
          this.heap[rightChildIndex] &&
          this.heap[rightChildIndex] > this.heap[compareWithChildrenIndex]
        ) {
          compareWithChildrenIndex = rightChildIndex;
        }

        if (this.heap[current] < this.heap[compareWithChildrenIndex]) {
          [this.heap[current], this.heap[compareWithChildrenIndex]] = [
            this.heap[compareWithChildrenIndex],
            this.heap[current],
          ];

          current = compareWithChildrenIndex;
        } else break;

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 1) {
      this.heap.splice(1, 1);
    } else {
      return null;
    }
    return max;
  }
}
