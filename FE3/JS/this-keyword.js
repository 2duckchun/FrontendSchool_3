function a() {
    console.log(this)
}
// a() // 함수를 호출해준 것이 this가 됨. (node에서는 global, 브라우저에서는 window)
// 변수를 등록하면 최상위 노드에 적혀짐.


// this의 값은 함수를 호출한 방법에 의해 결정된다.
// let myObj = {
//     val1: 100,
//     func1: function() {
//         console.log(this)
//     }
// }
// myObj.func1()

function sayName() {
    console.log(this.name)
}

var name = 'Hero'
// 전역으로 선언한 name 변수 앞에는 window가 생걁되어 있음.
// 따라서 window.name === 'Hero'가 성립

let peter = {
    name: 'Peter Parker',
    sayName: sayName
}

let bruce = {
    name: 'Bruce Wayne',
    sayName: sayName
}

sayName();
peter.sayName();
bruce.sayName();

function a() {
    console.log(this.name);
    function b() {
        console.log(this.name);
    }
    b()
}
a()


// this는 한마디로 정의는 잘 되지 않습니다.
// 다만,,,, 자신을 부른 대상을 참조할 때 쓰이는게 this다.
// 이 this를 쓰는 경우는
// 내가 메서드를 창조하거나,,, 
// 복잡하게 만들지 않는 이상은
// 잘 쓰지 않는다...


// this는 한마디로 정의는 잘 되지 않습니다.
// 다만,,,, 자신을 부른 객체를 참조할 때 쓰이는게 this다.

Object.prototype.남은_방 = function() {
    return this.방의개수 - this.예약자수
}