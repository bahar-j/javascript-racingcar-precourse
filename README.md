# 🏎️ 자동차 경주 게임

## 프로젝트 소개

문자(-)로 진행되는 자동차 경주 게임입니다. 사용자가 원하는 갯수만큼 자동차를 입력하고, 원하는 라운드의 수를 입력하면 자동차들이 라운드 별로 경주한 결과와 최종 우승자가 출력됩니다.

## 프로젝트 디렉토리 구조

```sh
├─javascript-racingcar-precourse
│  │  README.md
│  │  index.html
│  ├─src
│  │  └─lib
│  │      ├─classes
│  │      │     car.js
│  │      │     racingCarGame.js
│  │      └─utils
│  │            constants.js
│  │            documentHandler.js
│  │            validator.js
│  └─images
│          result.gif
│          result.jpg
```

## 👩🏻‍💻 구현할 기능 목록

**전반적 게임 진행을 위한 기능**

- 첫 화면에서 보이지 않는 요소의 style 설정
  - DOM을 조작하여 숨길 경우 첫 화면에서 생성된 후 숨겨지므로 이 부분만 index.html을 수정하여 style 추가
- DOM을 조작하여 element에 id 추가
- 버튼 두 개의 이벤트 리스너 등록
- 사용자 입력을 받고, 이를 쉼표(,)를 기준으로 split하여 저장 => 유효성 검사
- 저장된 자동차 이름을 이용해서 car 인스턴스 생성
- 시도할 횟수를 입력받아 저장 => 유효성 검사
- 랜덤 값을 생성하여 `4 이상`이면 한 칸 전진, `3 이하`이면 정지
- 각 자동차의 경주 상황을 각 시도마다 (-)로 누적하여 출력
- 우승자를 가리기 위해 가장 멀리 간 거리를 매번 갱신해가며 저장
- 가장 멀리 간 거리를 기준으로 우승자를 선정
  - 우승자가 여러 명일 경우 쉼표(,)로 구분
- 자동차 종류를 입력받으면 시도 횟수 입력란이 생기고 시도 횟수까지 입력 받으면 실행 결과 출력 (DOM 조작)
  - 실행 결과: 레이싱 진행 상황 + 우승자 목록

**유효성 검사 기능**

- 잘못된 입력일 경우 alert를 이용해 메시지를 보여주고 재입력 받기
  - 자동차 이름이 `6자 이상` 혹은 `0자` 경우
  - 시도 횟수가 `1회 이상`이 아닌 경우

**예외 상황**

- 모든 자동차가 움직이지 않은 경우

## 구현시 고민했던 부분

- 모듈화의 범위
- constructor에 넣어야할 값과 아닌 값
- addEventListener를 할 때 그냥 메서드명을 써주면 this가 해당 메서드를 가리키는데, class의 property를 사용하기 위해서는 상위 객체를 가리켜야함. 이때 bind(this)를 쓰는 것과 arrow function을 쓰는 것 중 더 좋은 방법
  - arrow function의 this가 상위 객체를 가리키는 이유
- addEventListener의 위치
- DOM을 실행 중 동적으로 조작해서 id를 부여하고 element를 만드는데, 이때 querySelector의 위치 & DOM 조작이 제대로 끝나고 querySelector에서 해당 요소를 선택하도록 하기 위해서 async/await을 사용하는 것이 좋은지 여부

## 공부한 사항

- JavaScript로 객체지향 프로그래밍을 하는 방법
- 그 과정에서 프로토타입 기반 언어인 JavaScript에서 빼놓을 수 없는 개념인 prototype의 기능과 prototype chaining 등의 개념
- Prettier, ESLint 적용 방법

## 실행 화면

![실행이미지](images/result.gif)
