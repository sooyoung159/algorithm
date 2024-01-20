// 메모리를 사용하여 시간복잡도를 줄이고자 하는방법
// 점화식을 만들어 최적 부분구조를 만족한다

// ex) fibo

let d = new Array(100).fill(0)

// 하향식
const fibo = (x) => {
    if(x === 1|| x === 2) return 1

    if(d[x] !== 0) return d[x]

    d[x] = fibo(x-1) + fibo(x-2)
    return d[x]
}

console.log(fibo(99))


상향식

d[1] = 1;
d[2] = 2
n = 99

for(let i = 3; i <= n; i++){
    d[i] = d[i - 1] + d[i -2]
}