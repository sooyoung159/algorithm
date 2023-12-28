let [n,m] = +input[0].split(' ').map(Number)
let arr = []
for(let i = 1;i <=n;i++) arr.push(i)
let visited = new Array(n).fill(false)
let selected = []

let answer = ''

const dfs = (arr, depth) => {
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
    dfs(arr, depth + 1)
    selected.pop()
    visited[i]=false
  }
}
