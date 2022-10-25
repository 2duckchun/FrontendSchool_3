const array = [1, 2, 2, 3, 3, 3, 4, 5];
const n = 5;

function solution(array, n) {
  let countarr = array.filter((i) => {
    return i === n
  }).length;
  return countarr;
}

solution(array, n)