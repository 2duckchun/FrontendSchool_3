const me = {
    name: '김태수',
    address: '서울시 강동구 성내동',
    phoneNum: '010-8001-6536',
    canWalk: function() {
        console.log('태수가 걷는다.')
    },
    teaching: function(student) {
        student.levelUp()
    }
}

const student = {
    level: 1,
    levelUp: function() {
        this.level++;
    }
}

me.teaching(student)
me.teaching(student)
me.teaching(student)

console.log(student.level);