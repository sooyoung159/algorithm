// 최단 경로 알고리즘(dijkstra)

// 특정 노드에서 출발하여 다른 모든 노드로가는 최단 경로를 계산한다.
// 음의 간선이 없을때만
// 음의 간선이 있을때는 벨만포드 알고리즘을 사용
// 기본적으로 탐욕법

const dijkstra = () => {
  // 최소힙, 시작 노드로 가기 위한 최단 거리는 0으로 우선순위 큐에 삽입
  // 우선순위 큐는 따로 구현 해야댐
  let pq = new PriortyQueue((a, b) => b[0] - a[0]);
  pq.enq([0, start]);
  distance[start] = 0;
  while (pq.size() !== 0) {
    // 우선순위 큐가 비어있지 않다면
    // 가장 최단 거리가 짧은 노드에 대한 정보 꺼내기
    let [dist, now] = pq.deq();
    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now] < dist) continue;
    // 현재 노드와 연결된 다른 인접한 노드들을 확인
    for (let i of graph[now]) {
      let cost = dist + [1];
      // 현재 노드를 거쳐서, 다른 노드로 이동하는 거리가 더 짧은 경우
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
  }
};

let INF = 1e9; // 무한을 의미하는 값을로 10억을 설정
let n = 7; // 노드의 개수
let start = 1; // 시작 노드 번호
// 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트를 만들기
// 각 간선은 [노드, 비용] 형태]
let graph = [
  [],
  [
    [2, 3],
    [3, 1],
    [4, 2],
  ],
  [
    [1, 3],
    [3, 1],
    [5, 1],
  ],
  [
    [1, 1],
    [2, 1],
    [4, 3],
    [6, 5],
  ],
  [
    [1, 2],
    [3, 3],
    [7, 1],
  ],
  [
    [2, 1],
    [6, 2],
  ],
  [
    [3, 5],
    [5, 2],
  ],
  [[4, 1]],
];

// 최단 거리 테이블을 모두 무한으로 초기화
let distance = new Array(n + 1).fill(INF);

dijkstra();

for (let i = 1; i <= n; i++) {
  if (distance[i] === INF) console.log("INFINITY");
  else console.log(distance[i]);
}
