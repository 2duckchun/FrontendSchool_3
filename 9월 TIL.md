# 1주차

## 오리엔테이션
 - 일단 해보는 HTML (이두희 선생님)

## 1일차
 - 환경설정(Visual Studio Code), 코드 스니펫 설정, GitHub 잔디심기 등

## 2일차
 - HTML Semantic 작성법

## 3일차
 - git, GitHub 이용 실습

## 4일차
 - CSS 특강 (이종찬 선생님)
---

# 2주차

## 5일차 (9월 5일)
 - HTML의 Semantic한 작성법
 - 객체지향적으로 HTML을 짜야한다. (HTML을 사물(object)로써 바라보는 시각을 길러라)
 - 코드 한줄마다 명확한 의도가 있어야 한다. (필요없는 태그는 과감히 삭제)

## 6일차 (9월 6일)
 - text level semantic과 embedded contents에 대해 학습했다.
 - text level semantic은 단어 그대로 텍스트 단위의 엘리먼츠를 뜻한다.
 - 그러므로, 넓이(width)와 높이(height)를 가질 수 없으며, 엘리먼트 내부 컨텐츠의 길이 및 크기만큼의 영역을 가지게 된다.
 - embedded의 단어적 정의는 '내장된' 이라는 의미이다.
 - 단어 뜻 그대로, embedded content는 외부의 컨텐츠를 끌어다가 html 문서에 내장시켜주는 역할을 한다.
 - embedded 엘리먼트들은 css 스타일링과 겹치는 부분이 있고, 상당한 기능이 있어 자유도가 높은 편이다.
 - 그러므로 mdn 등 문서를 그때그때 잘 찾아서 사용하는 습관을 들여야 한다.

## 7일차 (9월 7일)
 - Forms (input, label, select, fieldset, legend, button, textarea, datalist)에 대해 학습했다.
 - Tabular data (table, caption, thead, tbody, tfoot, tr, th, td, colspan, rowspan, colgroup, col, scope)에 대해 학습했다.
 - 특강) css :: 과제 풀이 및 마진 병합 현상에 대해 학습했다. (빔캠프 CSS)
 - html이나 css나 대략적인 사용방법을 익힌 후, 필요할때마다 사용하면 될 것 같다.
 - 그러나 무엇이 있는지는 확실히 알아놓아야 하겠다.

## 8일차 (9월 8일)
 - 1만시간의 법칙이라는 홈페이지의 마크업 작업을 하였다.
 - 실무와 시맨틱의 괴리는 생각보다 클 것 같다는 생각을 했다.
 - 마크업 자체는 잘 되는 것 같아서 뿌듯했다.
 - CSS를 본격적으로 배웠는데, 셀렉터에 대해 특히 심도있이 공부했던 것 같다. (셀렉터의 종류, 우선순위)
 - box에서는 벅참을 느꼈다. 외부 display와 내부 display의 차이점과 컴퓨터가 css를 연산하는 순서를 잘 파악해야 할 것 같다.
 - 추석때를 잘 활용해서 공부를 해야한다. (견고한 CSS 강의 부분을 들을 예정)
---

# 3주차

## 9일차 (9월 13일)
 - css에 대해 좀 더 심화적으로 공부했다.
 - 다 외울 필요는 없다. 다만 인지하고 있고, 늘 찾아서 쓸 수 있을 정도의 기민함을 유지하자.
 - position : static, relative, absolute, fixed, sticky
 - z-index
 - float : 띄우다/둥둥떠있다. left, right. 
 - 자식요소가 모두 float일 경우, 부모가 자식의 넓이를 인식하지 못할 수도 있음. (이를 방지하기 위해 BFC를 이용함)
 - 가상 클래스 선택자 (.class:first-child ~ .class:nth-child() 등
 - 상호 작용을 위한 가상 클래스 (:hover, :active, :focus, :checked 등
 - 가상 요소 선택자 (::before, ::after, ::selection)

## 10일차 (9월 14일)
 - position, z-index, float에 대해 다시 공부했다.
 - 네거티브 마진이란 것을 새로이 배웠다.
 - 1만 시간의 법칙이라는 과제를 마무리했고, 로그인 위젯 화면을 하나 만들었다.
 - float와 position, text에 관해 명확히 알고있지 못해 제작에 어려움이 있었다.
 - 또한 markup에서 class명을 짓는 것이 상당히 어려웠다.
 - 마크업할때 class명을 마크마다 해주는 것이 오히려 나을 수도 있다.

## 11일차 (9월 15일)
 - flex에 대해 심화된 공부를 하였다.
 - flex는 axis가 제일 중요한 개념이다.
 - 축을 기반으로, 이리저리 머릿속에서 개념들을 굴릴줄 알면 될 것 같다.
 - 그와 별개로, 우리 동료들이 너무 공부를 열심히 한다.
 - 나는 그정도로 하고 있을까? 라는 생각을 하면...
 - 평균치이며 압도적이지는 못하다.
 - 압도적으로 되기위해 더욱 많은 노력을 해야한다.
 - 아침 일찍 일어나 코딩을 하면 괜찮을 것 같기도 하다.
