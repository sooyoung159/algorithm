let [n,m] = +input[0].split(' ').map(Number)
let arr = []
for(let i = 1;i <=n;i++) arr.push(i)
let visited = new Array(n).fill(false)
let selected = []

let answer = ''


// backtracking dfs(조합)
const dfs1 = (arr, depth) => {
  if(depth === m){
    let result = []
    for(let i of selected) result.push(arr[i])
    for(let x of result) answer += x + ''
    answer += '\n'
    return
  }
  for (let i = 0;i<arr.length;i++){
    if(visited[i]) continue
    selected.push(i)
    visited[i]=true
    dfs(arr, depth + 1) // 테스트
    selected.pop()
    visited[i]=false
  }
}


// backtracking dfs(중복 순열)
const dfs2 = (arr, depth, start) => {
  if(depth === n){
    let result = []
    for(let i of selected) result.push(arr[i])
    for(let x of result) answer += x + ''
    answer += '\n'
    return
  }
  for (let i = start;i<arr.length;i++){
    selected.push(i)
    dfs(arr, depth + 1, i )
    selected.pop()
  }
}

// backtracking dfs(중복 조합)
const dfs3 = (arr, depth, start) => {
  if(depth === n){
    let result = []
    for(let i of selected) result.push(arr[i])
    for(let x of result) answer += x + ''
    answer += '\n'
    return
  }
  for (let i = start;i<arr.length;i++){
    selected.push(i)
    dfs(arr, depth + 1, i )
    selected.pop()
  }
}
