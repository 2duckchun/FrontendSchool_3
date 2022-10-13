2duckchun
#5443

4. 김현빈 — 오늘 오후 3:07
넹
4. 김대엽 — 오늘 오후 3:07
넵
4. 강풍윤 — 오늘 오후 3:07
네
4. 김태수 — 오늘 오후 3:07
넵
4. 고지연 — 오늘 오후 3:07
넵
4. 김현빈 — 오늘 오후 3:07
넹
4. 한혜지 — 오늘 오후 3:07
넵
4. 왕유린 — 오늘 오후 3:07
돼요
4. 백경현 — 오늘 오후 3:07
넹
4. 서현주 — 오늘 오후 3:07
넵
4. 임하연 — 오늘 오후 3:07
넵
4. 김대엽 — 오늘 오후 3:07
안됩니다
4. 김태수 — 오늘 오후 3:07
아니오
4. 왕유린 — 오늘 오후 3:07
안돼용
4. 고지연 — 오늘 오후 3:07
안돼요
4. 김현빈 — 오늘 오후 3:07
아니용
4. 임하연 — 오늘 오후 3:07
안돼요
4. 한혜지 — 오늘 오후 3:07
아뇹
4. 왕유린 — 오늘 오후 3:07
으아~~~
4. 김대엽 — 오늘 오후 3:07
넵 감사합니다
4. 장수민 — 오늘 오후 3:08
필요없는 문자들 정규식으로 제거하고, skill.indexof(i) === 0 일때 카운트해서 풀어도 되지 않을까요?
4. 김대엽 — 오늘 오후 3:09
ㅋㅋㅋㅋㅋㅋ
생각보다 재밌네요 정규표현식
4. 김민승 — 오늘 오후 3:09
ㅎㅎ
4. 김대엽 — 오늘 오후 3:09
감사합니다
4. 왕유린 — 오늘 오후 3:09
흥미로운데 못풀어서 답답해요
ㅠㅠ
4. 김세원 — 오늘 오후 3:10
와
4. 이시현 — 오늘 오후 3:11
ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
4. 왕유린 — 오늘 오후 3:11
푸는거보면 시원합니다
4. 김대엽 — 오늘 오후 3:11
익숙해지면 더 좋아질거같아요
4. 이시현 — 오늘 오후 3:11
아직 제게 안돼서 그런가봐요
4. 강세민 — 오늘 오후 3:11
혹시 알고리즘 풀이 코드 공유 해주실 수 있을까요?
4. 김대엽 — 오늘 오후 3:13
같이 보내주시면 좋을것 같습니다!!
(강사) 이호준 - Licat — 오늘 오후 3:13
// https://school.programmers.co.kr/learn/courses/30/lessons/49993

// ["BACDE", "CBADF", "AECB", "BDA"]

"CAZGBEUDKKCAEEEEEBEEEDEEEEEEEEE"

("CAZGBEUDKKA").match(/[CBD]/g)
("CEEEEEBEEEDEEEEEEEEE").match(/[CBD]/g)

let data = ["BACDE", "CBADF", "AECB", "BDA"]

for (i of data){
    // console.log(i)
    // console.log(i.match(/[CBD]/g))
    for (i of i.match(/[CBD]/g)) {

    }
}

// 코딩이 아니라 알고리즘만 설명한 것입니다.
// [원본, 매핑문자열]
[['C']['B']['D']]
[['C', 'B']['B', 'C']['D', 'D']]
[['C', 'C']['B', 'B']['D', 'D']] 결과 += 1
[['C', 'C']['B', 'B']['D', '']]  결과 += 1
[['C', 'B']['B', 'D']['D', '']]

const zip = (a, b) => a.map((v, i) => [v, b[i]])
zip([10, 20, 30], [1, 2, 3, 4])
zip([10, 20, 30], [1, 2])

/////////////////////

const zip = (a, b) => a.map((v, i) => [v, b[i]])

let data = ["BACDE", "CBADF", "AECB", "BDA"]

for (i of data){
    for ([x, y] of zip('CBD'.split(''), i.match(/[CBD]/g))) {
        console.log(x, y)
    }
    console.log('----------')
}
4. 김대엽 — 오늘 오후 3:13
감사합니다
4. 강세민 — 오늘 오후 3:13
감사합니다!
4. 이재호 — 오늘 오후 3:13
강사님 궁금한게 있습니다 알고리즘 테스트는 회사에서  왜 보는건가요
감사합니다!! ㅎㅎ!!!
4. 한유진 — 오늘 오후 3:17
엥
4. 김세원 — 오늘 오후 3:17
잉크부족 ㅠ
\
4. 임하연 — 오늘 오후 3:17
역슬래시
4. 정수현_2 — 오늘 오후 3:17
\
4. 김세원 — 오늘 오후 3:18
모든
4. 권지혜 — 오늘 오후 3:20
흥미로운데 다 뭔가 비슷하게 생겨서 처음에 실수하기 쉬울거같아요
4. 이재호 — 오늘 오후 3:21
많이 사용도 해봐야할거 같고  숙달도 많이 해봐야할거 같습니다.
당장은 한번에 이해하기 힘든거 같습니다..!
4.김민정 — 오늘 오후 3:22
전체코드 한번 공유가능하실까요 ..?
4. 정수현_2 — 오늘 오후 3:22
52번파일 전체코드 공유 가능한가요?
(강사) 이호준 - Licat — 오늘 오후 3:22
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC

("paullab CEO leehojun hello CEO").replace(/CEO/, "CTO")
("paullab CEO leehojun hello CEO").replace(/CEO/g, "CTO")

("paullab CEO leehojun hello CEO").match(/CEO/g)
확장
message.txt
6KB
﻿
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%A0%95%EA%B7%9C%EC%8B%9D-RegExp-%EB%88%84%EA%B5%AC%EB%82%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0-%EC%89%BD%EA%B2%8C-%EC%A0%95%EB%A6%AC

("paullab CEO leehojun hello CEO").replace(/CEO/, "CTO")
("paullab CEO leehojun hello CEO").replace(/CEO/g, "CTO")

("paullab CEO leehojun hello CEO").match(/CEO/g)

("paullab CEO leehojun hello CEO").split(/CEO/g)
/*
'!!!'.split('!')
(4) ['', '', '', '']
'a!a!a!a'.split('!')
(4) ['a', 'a', 'a', 'a']
'a!a!a!'.split('!')
(4) ['a', 'a', 'a', '']
'!a!a!'.split('!')
(4) ['', 'a', 'a', '']
*/

(/CEO/g).test("paullab CEO leehojun hello CEO")

// 3. 일반문자열
/hello/g

// 4. 처음과 끝
/^hello/g
/hello$/g
/^hello$/g

// 5. 모든문자 매핑
/hello/g
/h.llo/g
/hello..world/g

// 6. 모든문자 매핑
/h[eao]llo/g

// 7. 범위
/h[a-zA-Z0-9]llo/g

// 8. 부정
/h[^ae]llo/g

// 9. 그루핑 규칙
/(on|ues|rida)/gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
// /(?:on|ues)/gm
// /(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a|e|o)ll./gm
// /hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
// /hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)


("hello hallo hello").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.(a|e|o)ll./g)
("hello hallo hello hello hi").match(/.[eao]ll./g)

// 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/

// https://school.programmers.co.kr/learn/courses/30/lessons/49993

// ["BACDE", "CBADF", "AECB", "BDA"]

"CAZGBEUDKKCAEEEEEBEEEDEEEEEEEEE"

("CAZGBEUDKKA").match(/[CBD]/g)
("CEEEEEBEEEDEEEEEEEEE").match(/[CBD]/g)

let data = ["BACDE", "CBADF", "AECB", "BDA"]

for (i of data){
    // console.log(i)
    // console.log(i.match(/[CBD]/g))
    for (i of i.match(/[CBD]/g)) {

    }
}

// 코딩이 아니라 알고리즘만 설명한 것입니다.
// [원본, 매핑문자열]
[['C']['B']['D']]
[['C', 'B']['B', 'C']['D', 'D']]
[['C', 'C']['B', 'B']['D', 'D']] 결과 += 1
[['C', 'C']['B', 'B']['D', '']]  결과 += 1
[['C', 'B']['B', 'D']['D', '']]

const zip = (a, b) => a.map((v, i) => [v, b[i]])
zip([10, 20, 30], [1, 2, 3, 4])
zip([10, 20, 30], [1, 2])

/////////////////////

const zip = (a, b) => a.map((v, i) => [v, b[i]])

let data = ["BACDE", "CBADF", "AECB", "BDA"]

for (i of data){
    for ([x, y] of zip('CBD'.split(''), i.match(/[CBD]/g))) {
        console.log(x, y)
    }
    console.log('----------')
}

// 11. 캐릭터 클래스
/\w{5} /g
/\W/g
/\d/gm : 숫자
/\D/gm : not 숫자
/\s/gm : 스페이스
/\S/gm : not 스페이스

// 12. 이스케이프문자
/\[.*]/gm : 대괄호([]) 안에 감싸여진 문자열
/\(.*\)/gm : 소괄호 안에 감싸여진 문자열
/\\.*\//gm : 이미 사용되고 있는 특수문자로 감싸여진 문자열
/-.*-/gm : 이스케이프 문자를 사용할 필요가 없는 경우
/\^\^/gm : 이스케이프 문자가 필요한 경우
/:\)/gm : 이스케이프 문자가 필요한 경우

/*
- `^` : 문자열의 시작
- `$` : 문자열의 종료. 옵션에 따라 문장의 끝 또는 문서의 끝에 매치된다.
- `.` : 임의의 한 문자
- `[]`: 문자 클래스. 문자 클래스 안에 들어가 있는 문자는 그 바깥에서 하나의 문자로 취급된다.
- `^` : 문자 클래스 내에서 ^는 not
- `-` : ex) a-z는 a에서 z까지의 문자
- `|` : or를 나타냄
- `?` : 앞 문자가 없거나 하나 있음
- `+` : 앞 문자가 하나 이상임
- `*` : 앞 문자가 0개 이상임
- `{n,m}` : 앞 문자가 `n`개 이상 `m`개 이하. `{0,1}` 은 `?`와 같은 의미다.
- `{n,}` : 앞 문자가 `n`개 이상. 위의 형태에서 `m`이 생략된 형태이다. `{0,}` 이면 `*`와 같고 `{1,}` 이면 `+`와 같은 의미이다.
- `{n}` : 앞 문자가 정확히 `n`개. `{n,n}` 과 같은 의미이다.
- `()` : 하나의 패턴구분자 안에 서브 패턴을 지정해서 사용할 경우 괄호로 묶어주는 방식을 사용한다.
- `\s` : 공백문자
- `\b` : 문자와 공백 사이를 의미한다.
- `\d` : 숫자 [0-9]와 같다.
- `\t` : 탭문자
- `\w` : 단어 영문자+숫자+_(밑줄) [0-9a-zA-Z_]문자 이스케이프는 대문자로 적으면 반대를 의미한다.
[a-z] : a ~ z 사이의 문자를 찾음
[1-9] : 1 ~ 9 사이의 문자를 찾음
[abc] : a, b, c중 하나를 찾음
[^abc] : a, b, c를 제외한 문자를 찾음
.z : 아무 문자 하나를 . 기호로 찾으며 z로 끝남을 의미
a+ : a가 1개 이상을 의미함
a* : a가 0개 또는 그 이상을 의미함
s : 공백 문자를 찾음(스페이스, 탭 등), 대문자의 경우 아닌 문자를 찾음
d : 숫자를 찾음, 대문자의 경우 아닌 문자를 찾음
w : 알파벳 영문과 숫자와 언더바 _ 기호를 찾음, 대문자의 경우 아닌 문자를 찾음
t : 탭 공간을 찾음
g : 검색범위를 전역으로 확장
i : 대소문자를 구분하지 않음
gi : 검색 범위를 전역으로 확대하면서 대소문자를 구분하지 않음
m : 여러줄을 동시에 매칭함
*/