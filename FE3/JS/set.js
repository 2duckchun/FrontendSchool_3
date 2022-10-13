let s = new Set('abcdeeeeee'.split(''))
let ss = new Set('abcdeeeeee')
console.log(s);
console.log(ss);
console.log(s.size);

const 회사게시판 = ['이호준', '이호준', '이호준', '김은하', '김은하', '이준근']

// set = 번역 자체가 수학의 집합 개념이고,
// 집합은 원소의 중복을 허용하지 않습니다.
// 그래서... set으로 배열을 넣어서 변수에 할당을 하면
// 수학의 집합 개념이기 때문에, 중복된  값을 다~~ 지워준다.
{'이호준', '김은하', '이준근'}

//문제1
let set = new Set(회사게시판)
set.size;



//문제2
for (const i of set) {
    console.log(i, 회사게시판.filter(e => e === i).length);
}

let map = new Map();
for (const i of 회사게시판) {
    map.set(i, (map.get(i) || 0) + 1);
}