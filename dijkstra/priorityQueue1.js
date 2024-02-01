// heap을 통한 우선순위 큐

class PriortyQueue {
  constructor() {
    // 각 노드별 idx접글을 쉽게하기 위해 1-based 인덱스를 만들기위해 쓰지않는 값인 0을 넣어줌
    this.queue = [0];
  }

  enqueue(element) {
    let insertIdx = this.queue.length;
    /*
        부모 노드의 값 : Math.floor(qSize / 2);
        만일 부모노드의 값이 현재 입력될 값보다 같거나 작으면 부모노드의 값을 isertIdx에 넣어주고
        isertIdx를 부모노드의 idx로 바꿔주고 다시 검사

        isertIdx > 1 큰 경우에만 isertIdx==1 인 경우는 이미 전체 탐색이 완료한 경우이므로 종료
        탐색 후 나온 isertIdx값에 새로운 원소를 넣어주면 됨.
    */
    while (insertIdx > 1 && this.queue[Math.floor(insertIdx / 2)] <= element) {
      this.queue[insertIdx] = this.queue[Math.floor(insertIdx / 2)]; // 새로운 원소가 삽입될 idx에 부모의 값을 넣어주고(교체의 의미)
      insertIdx = Math.floor(insertIdx / 2); // 새로운 원소 삽입 idx를 부모 idx로 바꿔 재검사
    }
    this.queue[insertIdx] = element;
  }

  dequeue() {
    let delValue = this.queue[1]; // 삭제될값
    let lastValue = this.queue.pop(); // 큐의 마지막 값
    this.queue[1] = lastValue; // 삭제 될 위치에 큐의 마지막 값을 넣어줌

    let qSize = this.queue.length - 1;
    let pIdx = 1; // 탐색을 시작할 부모 idx
    let cIdx = 2; // 탐색을 시작한 자식 idx

    while (cIdx <= qSize) {
      // 두 자식중 큰 노드와 부모 노드 비교를 위한 작업
      if (this.queue[cIdx] < this.queue[cIdx + 1]) {
        cIdx += 1;
      }

      // 자식 노드와 비교해서 크다면 break
      if (lastValue >= this.queue[cIdx]) {
        break;
      }

      /*
      만약 자식노드가 더 큰 경우 !
      현재 부모노드 값에 자식 값을 넣어주고
      부모 idx를 자식 idx를 바꾸고 자식 idx를 왼쪽 자식 노드idx로 바꿔주고 다시 검사
      */
      this.queue[pIdx] = this.queue[cIdx];

      pIdx = cIdx; // 검사할 부모노드는 현재 자식 노드 idx로
      cIdx *= 2; // 자식 노드의 왼쪽 자식 노드 idx로
    }

    // 검사 후 나온 pIdx에 lastValue값을 넣어줌
    this.queue[pIdx] = lastValue;
    return delValue;
  }

  front() {
    return this.queue[1];
  }

  size() {
    return this.queue.length - 1;
  }

  clear() {
    this.queue = [0];
  }
}
