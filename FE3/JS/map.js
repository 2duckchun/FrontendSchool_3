// 오브젝트와 맵이 어디서 뭐가 다른건지?
// 

// Map 객체: 키-값 쌍을 가지는 객체 자료형의 한 종류
// 생성자 함수를 이용해서 Map()을 만듦.

const cc = [1, 2]
const dd = cc

let m = new Map(); 

m.set('하나', `나는 map '하나'의 값이라능`)
 .set(true, '트루')
 .set('string', () => {console.log(m.get('하나')); return 55555555555555})
 .set([1, 2], cc)


console.log(m.get([1, 2]) === cc); // false
console.log(dd === cc); // true
console.log(m.get('string')());
console.log(m.has('규와악'));
console.log(m.has('string'));

const mapMade = (input) => {
    if (!input.has('멋쟁이사자')) {
        console.log('map에 멋쟁이사자를 추가합니다.');
        input.set('멋쟁이사자', 9955544)
    } else {
        console.log('map에 멋쟁이사자가 이미 있네요');
    }
    return
}

mapMade(m)
mapMade(m)

console.log(m);
console.log(m.size);


// map은 이터러블하다.
// object는 순회가 안된다.

// let good1 = new Map([['one', 1], ['two',2]]) // O
// let good2 = new Map(Object.entries({'one':1, 'two':2})) // O
// let nope1 = new Map({'one':1, 'two':2}) // X
// let nope2 = new Map('hello world') // X
// let nope3 = new Map([10, 20, 30, 40]) // X

console.log(m.keys())
console.log(m.values())
console.log(m.entries)


// Map - Object 간의 형변환
let 맵 = new Map(Object.entries({'one':1, 'two':2}))
let 오브젝트 = Object.fromEntries(m)

function Person(name, age) {
    // new가 위의 Person 오브젝트와 함께 씌어졌을 때, 아래가 생략되어 동작한다.
    const this1 = Object.create(Person.prototype)
    
    this1.name = name
    this1.age = age
    
    // 이것도 생략되어서 동작한다.
    return this1
}

const lion = Person('2DC', 30)
console.log(lion);

lion.name // '2DC'