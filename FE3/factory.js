function Factory(arr) {
    const i = Math.floor(Math.random() * arr.length)
    this.유닛명 = arr[i].유닛
    this.체력 = arr[i].체력
    this.공격력 = arr[i].공격력
}

Factory.prototype.attack = function () {
    console.log(`${this.공격력}의 데미지를 입혔습니다!`)
}

const unit1 = new Factory([{유닛: '벌쳐', 체력: 75, 공격력: 20}, {유닛: '탱크', 체력: 150, 공격력: 30}, {유닛: '골리앗', 체력: 125, 공격력: 12}])
console.log(unit1);
unit1.attack()

