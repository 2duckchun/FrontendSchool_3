/*
생성자는 함수이기 때문에 기본적으로 함수가 필요함.
생성자 함수는 암묵적으로 대문자로 시작하는 이름을 가지는 것으로 약속되어 있음.
*/

function Factory() {}

let robot1 = new Factory()

/*
Factory 생성자 함수는 따로 return값을 가지지는 않지만
new 키워드가 앞에 붙게되면 실행되었을 때 자동적으로 객체를 생성하고 반환함.
이렇게 반환되어 만들어진 객체를 다른말로 인스턴스(instance)라고 함.
때문에 생성자 함수와 객체의 관계는 instanceof로 확인할 수 있음.
*/

console.log(robot1 instanceof Factory);

function NewFactory(name) {
    this.name = name;
}

NewFactory.prototype.sayYourName = function() {
    console.log(`삐리비리. 제 이름은 ${this.name} 입니다. 주인님`)
}

let robot2 = new NewFactory('브랜든')
console.log(robot2);

robot2.sayYourName()

/*
생성자 함수에서 인스턴스를 생성할 때
메서드를 생성자 함수 내부에 넣어놓으면 인스턴스마다 계속 같은 메서드가 생성되는 것임.
이는 비효율적이므로 프로토타입이란 것을 만들어서 같은 인스턴스가 하나의 프로토타입을 참조할 수 있도록 해서
메모리 효율을 증가시킴.
*/

/*
생성자 함수가 인스턴스를 생성하게 되면 그 안에는 숨겨진 프로퍼티인 [[prototype]]이 존재하게 됨.
코드상에서는 __proto__로 표현됨.
__proto__ 프로퍼티는 자신을 만든 생성자 함수의 prototype를 참조하는 역할을 함.
new 키워드를 통해 생성자 함수의 prototype와 인스턴스의 __proto__가 연결됨.
*/

function Test(){}

const obj = new Test();

console.log('ㅇㅇ');
console.log(obj.__proto__ === Test.prototype);
console.log(obj.prototype);
console.log(obj.__proto__);

/*
prototype과 __proto__는 다른건가? ㅇㅇ 다름.
prototype은 오직 function안에 존재하는 참조값이고
__proto__는 객체 안에 존재하는 숨겨진 프로퍼티임.
인스턴스는 __proto__를 통해 생성자 함수의 prototype에 접근하여 필요한 여러가지 값과 메서드를 사용할 수 있음.
*/

/*
프로토타입은 모든 인스턴스가 하나의 메서드를 공유하도록 만들어 자원을 더 효율적으로 사용하도록 도와줌.
생성된 객체끼리 메서드를 비교하여 같은 곳을 참조하는 지 살펴보는 것도 이해하는데 도움을 줌.
*/

