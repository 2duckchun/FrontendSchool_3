const a = [1, 2, 3, 4]
a.name = '김태수'
console.log(a) // [ 1, 2, 3, 4, name: '김태수' ]


console.log(a[0]);  // 1
console.log(a[1]);  // 2
console.log(a[2]);  // 3
console.log(a[3]);  // 4
console.log(a[4]);  // undefined
console.log(a['name']);  // '김태수'

const b = Object.entries(a)  // Array 메서드가 아닌 Object 메서드를 사용해도 먹힘..
console.log(b); // [ [ '0', 1 ], [ '1', 2 ], [ '2', 3 ], [ '3', 4 ], [ 'name', '김태수' ] ]