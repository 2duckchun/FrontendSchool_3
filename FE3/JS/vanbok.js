// // for (let i = 0; i < 10; i++) {
// //     console.log(i)
// //     if (i > 3) {
// //         break;
// //     }
// // }

// // let data1 = ['a', 'b', 'c', 'd', 'e']
// // for (let i = 0; i < data1.length; i++) {
// //     console.log(data1[i])
// // }

// let data2 = [1, 3, 4, 8, 13, 17, 20];
// for (let i = 1; i < data2.length; i++) {
//     console.log(data2[i] - data2[i - 1]);
// }

// // let sum = 0;
// // for (let i = 0; i < 수학점수.length - 1; i++){
//     //     sum += 수학점수[i]
//     // }
//     // let average = sum / 수학점수.length
    
// let 수학점수 = [10, 99, 88, 85, 21, 35]

// const averageF = (arr, i = 0, sum = 0) => {
//     if (arr.length <= i) return (sum / arr.length)
//     sum = sum + arr[i]
//     return averageF(arr, i + 1, sum)
// }
// console.log(averageF(수학점수));

// const averageReduce = 수학점수.reduce((acc, e) => {
//     return acc + e
// }, 0) / 6
// console.log(averageReduce);

// const user = [
//     {
//       "_id": "633e5b1711926cc42d1fbb4b",
//       "index": 0,
//       "guid": "e6ef4abc-a6fc-4ed5-a9b0-8060240c48ab",
//       "age": 28,
//       "name": "Mai Montoya",
//       "gender": "female"
//     },
//     {
//       "_id": "633e5b1718d6c001d2f771c7",
//       "index": 1,
//       "guid": "9b07b16c-7a4a-4152-83cf-fb64625f52fe",
//       "age": 22,
//       "name": "Shelley Potts",
//       "gender": "female"
//     },
//     {
//       "_id": "633e5b17fecc26a897aa2283",
//       "index": 2,
//       "guid": "cfb29cc6-8381-4695-8c2f-0c273a9d33c2",
//       "age": 22,
//       "name": "Hensley Flores",
//       "gender": "male"
//     },
//     {
//       "_id": "633e5b17267fe16c24f00591",
//       "index": 3,
//       "guid": "6e189d90-0981-4086-9ee2-12242fda76d1",
//       "age": 20,
//       "name": "Holmes Morrow",
//       "gender": "male"
//     },
//     {
//       "_id": "633e5b17b30766b9c38594f5",
//       "index": 4,
//       "guid": "f1505113-9383-4249-bbb3-0e5f8ea634b2",
//       "age": 25,
//       "name": "Elisa Miller",
//       "gender": "female"
//     }
//   ]

// const femaleNumber = user.filter((e) => {
//   return (e["gender"] === "female")
// }).length
// console.log(femaleNumber);




// const maleNumber = user.filter((e) => {
//     return (e["gender"] === "male")
//   }).length
// console.log(maleNumber);



// let 여성 = 0;
// for (let i = 0; i < user.length; i++ ) {
//     console.log(user[i]);
//     if (user[i]['gender'] === 'female') {
//         여성 += 1;
//     }
// }
// console.log(여성);


// // 1. 구구단
// for (let 단 = 2; 단 < 10; 단++) {
//     for (let 곱 = 1; 곱 < 10; 곱++) {
//         console.log(`${단} X ${곱} = ${단 * 곱}`)
//     }
// }

// // 2. 문자열 뒤집기
// let txt = 'hello world'
// let result = '';
// for (let i = txt.length - 1; i>= 0; i--) {
//     result = result + txt[i]
// }
// console.log(result);

// let result2 = ''
// for (let i = 0; i < txt.length; i++) {
//     result2 = txt[i] + result;
// }

// // 3. 시그마
// let sum = 0
// for (let i = 0; i <= 100; i++) {
//     sum += i
// }
// console.log(sum);

// // 4. 팩토리얼
// let fac = 1
// for (let i = 1; i <= 5; i++) {
//     fac *= i
// }
// console.log(fac);


// // 문제1 : 다음 입력된 숫자들의 합을 구하라

// let x = '12345'
// let result10 = 0
// for (let i = 0; i < x.length; i++) {
//     result10 += parseInt(x[i])
// }
// console.log(result10);

// let x8 = Array(100).fill(0).map((_, index) => {return index + 1}).join('')
// let result8 = 0
// for (let i = 0; i < x8.length; i++) {
//     if(x8[i] === '8') {
//         result8 += 1;
//     }
// }

// console.log(result8);

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// const object = {
//     one: 1,
//     two: 2,
//     three: 3,
//     log2 : (data) => {
//         console.log(data);
//     } 
// }
// const 변수 = 'one'

// console.log(object.a); // undefined
// console.log(object.one) // 1
// console.log(object[변수]); // 1
// console.log(object["one"]) // 1
// object["log2"]('안녕하세요') // '안녕하세요' 가 출력됩니다.

// /* why?
// . 접근법은 object에 해당 키가 존재해야만 접근할 수 있습니다.
// [] 접근법은 변수를 이용할 수 있습니다.
// 즉 어딘가에서 계산하거나 구해진 자료를 넣었을 때, 그게 key 값과 같다면 출력됩니다.
// */
// .fill(0).map((_, index) => (index + 1));
const b = Array(100).fill(0).map((_, index) => (index + 1)).join()

console.log(b);
// map은 메서드인데
// 이 메서드는 원본 배열과 동일한 길이의 또 다른 배열을 리턴합니다. map()
// () => {} <-- map의 배열을 만들기 위해 작업을 친다.