/*
class 키워드 + 이름 + 중괄호로 이루어짐.
클래스의 결과물은 인스턴스를 생성하는 것 = 생성자를 이용한 타입 생성과 그 결과가 정확하게 일치함.
*/

function Robot(name) {
    this.name = name;
}

Robot.prototype.sayYourName = function() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`)
}

class Robot {
    // 생성자함수는 new 키워드가 호출될 떄 자동으로 실행됨.
    constructor(name) {
        this.name = name
    }
    sayYourName() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`)
    }
}


/*
클래스의 상속은 extends 키워드를 사용한다.
상속을 받는 클래스는 파생 클래스(derived classes) 라고 부른다.

부모 클래스의 프로퍼티를 상속받기 위해 super 함수를 사용한다.
이 때 super는 부모 생성자를 참조한다.

생성자 함수에서 this 값을 사용할 경우 super 함수는 반드시 this 보다 먼저 실행되어야 한다.
파생 클래스가 아닌 클래스에서 사용하려고 해도 에러가 발생한다.
*/

class BabyRobot extends Robot {
    constructor(name) {
        super(name)
        this.ownName = '아이크'
    }

    sayBabyName() {
        this.sayYourName()
        console.log('Suceeding you, Father!')
    }
}



/*



*/