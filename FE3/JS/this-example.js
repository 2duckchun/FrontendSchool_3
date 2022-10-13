Object.prototype.남은_방 = function() {
    return this.방의개수 - this.예약자수
}

// this는 자기를 호출한 **객체**를 참조하는 녀석이다.

// (그 외에도 많은 용법이 있겠지만... <무시한다>)

// [{하나호텔1}, {하나호텔2}, {하나호텔3}, {하나호텔4}]
//        0             1             2            3

let 호텔 = [
    {
        '이름': '하나호텔1',
        '방의개수': 50,
        '예약자수': 25,
    },    
    
    {
        '이름': '하나호텔2',
        '방의개수': 40,
        '예약자수': 25,
    },     
    
    {
        '이름': '하나호텔3',
        '방의개수': 30,
        '예약자수': 25,
    },     
    
    {
        '이름': '하나호텔4',
        '방의개수': 25,
        '예약자수': 25,
    },
]

const 하나호텔1남은방 = 호텔[0].남은_방()
const 하나호텔2남은방 = 호텔[1].남은_방()
const 하나호텔3남은방 = 호텔[2].남은_방()
const 하나호텔4남은방 = 호텔[3].남은_방()

console.log(하나호텔1남은방);
console.log(하나호텔2남은방);
console.log(하나호텔3남은방);
console.log(하나호텔4남은방);