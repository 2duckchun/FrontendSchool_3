const obj = {
    name: 'test'
}
console.log(obj.hasOwnProperty('name'))

const arr = [1, 2, 3]
console.log(arr.hasOwnProperty('name'))

/*
자바스크립트의 상속은 기본적으로 prototype를 통해 일어남.

Array 함수의 __proto__가 Object 함수의 prototype을 참조하고 있기 때문에
Array의 prototype에 존재하지 않는 Object 객체의 프로퍼티와 메서드를 사용할 수 있음.

이처럼 자기 자신에게 존재하지 않는 프로퍼티나 메서드를 프로토타입을 통해 추적하는 과정을
프로토타입 체이닝이라고 함.

[ 자바스크립트 타입들은 기본적으로 Object 타입을 상속받고 있음. ]
*/

function Parent() {
    this.name = '재현'
}
Parent.prototype.rename = function (name) {
    this.name = name
}
Parent.prototype.sayName = function () {
    console.log(this.name)
}


function Child() {
    Parent.call(this)
}

Child.prototype = Object.create(Parent.prototype)
Child.prototype.canWalk = function() {
    console.log('now i can walk!');
}

/*
위의 코드에서 call 함수는 Child 함수의 this가 Parent함수의 this를 바라볼 수 있도록 함.
즉, Child를 통해 생성된 인스턴스의 this가 Parent 함수의 프로퍼티에 접근할 수 있게 함.
*/

/*
그리고 Object.create 함수는 주어진 인자를 Child.prototype에 연결하는 역할을 함.
즉, parent 객체의 프로토타입을 child 객체의 프로토타입이 참조하게 함.
두 가지 과정을 통해 Child 객체는 Parent 객체의 모든 것을 상속받게 됨.
*/