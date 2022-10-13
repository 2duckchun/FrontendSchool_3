// // callback function

// // function sum(x, y, 콜백함수){
// //     // 1000 줄
// //     콜백함수(x + y);
// //     // 1000 줄
// //     // return x + y
// // }

// // function documentWriter(s){
// //     document.write('콜백함수', s)
// // }

// // // sum(10, 20, console.log)
// // sum(10, 20, documentWriter)

// // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// // 구문 : arr.map(callback(currentValue[, index[, array]])[, thisArg])

// // function sum(x, y, 콜백함수){
// //     콜백함수(x + y)
// //     // return x + y
// // }

// // function documenter(s) {
// //     document.write('콜백함수', s)
// // }

// // sum(10, 20, documenter)

// let arr = [10, 20, 30, 40, 50]
// arr.map(제곱)

// function 제곱(x){
//     return x ** 2
// }

// const b = arr.map(x => x ** 2)

// const bb = []
// arr.forEach((x, i, arr) => {
//     return bb.push(x ** 2)
// })

// console.log(bb);

// // 노드에서의 forEach는 IE에서 작동하지 않음.

// Array.prototype.cForEach = (cb, i = 0) => {
//     if (this.length <= i) return
//     cb(this[i], i, this)
//     return this.cForEach(cb, i + 1)
// // }

const arr = [1, 2, 3, 4, 5]

const 콜백 = (e, i, 어레이) => {
    console.log(e, i, 어레이);
    return e * 2
}

Array.prototype.cMap = function(callback, result = [], i = 0) {
    if (this.length <= i) return result
    result.push(callback(this[i], i, this))
    return this.cMap(callback, result, i + 1)
}

const b = [1, 2, 3, 4, 5].cMap(콜백)

console.log(b);