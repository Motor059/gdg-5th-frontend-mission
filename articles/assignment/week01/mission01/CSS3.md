# CSS의 기초

CSS는 HTML의 각 요소의 style을 정의하여 화면에 어떻게 렌더링하면 되는지 브라우저에게 설명하는 언어입니다.
`셀렉터 { 속성: 값 }` 형태로 구성되어 있습니다.

* **셀렉터 (Selector)**: 스타일을 적용하고자 하는 HTML 요소를 선택하기 위해 CSS에서 제공하는 수단입니다.
* **속성 (Property)**: `{ }` 내에서 다양한 스타일을 정의할 수 있고, 여러 개의 속성을 세미콜론(;)으로 구분하여 연속해서 지정 가능합니다.
* **값 (Value)**: 해당 속성에 사용할 수 있는 값을 키워드나 크기 단위 또는 색상 표현 단위 등의 특정 단위로 지정합니다.

---

## CSS와 HTML 연동 방법

* **Link Style (권장)**: HTML에서 외부에 있는 CSS 파일을 로드합니다.
    * 예: `<link rel="stylesheet" href="css/style.css">`

* **Embedding Style**: HTML 내부에 `<style>` 태그를 이용하여 CSS를 포함시킵니다.
    * 예: `<style> h1 { color: blue; } </style>`

* **Inline Style**: 사용하는 태그의 `style` 속성으로 직접 기술합니다. (권장되지 않음)
    * 예: `<h1 style="color: red">Hello World</h1>`

---

## Reset CSS

웹 브라우저마다 HTML 태그에 적용하는 기본 스타일이 조금씩 다릅니다.
Reset CSS는 이 제각각인 기본 스타일들을 모두 강제로 초기화하고 하나의 통일된 스타일로 덮어씌워서 어떤 브라우저에서든 동일한 모습으로 개발을 시작할 수 있게 도와줍니다.

* **Eric Meyer’s reset css**: 전통적이고 대중적인 방식입니다.
* **normalize.css**: 유용한 기본값은 유지하면서 브라우저 간 차이만 수정하는 방식으로, 요즘 많이 사용됩니다.

---

## CSS 셀렉터

### 기본 셀렉터

* **전체 셀렉터 (`*`)**: HTML 문서 내의 모든 요소를 선택합니다.

* **태그 셀렉터**: 셀렉터 자리에 태그명(`p`, `h1`, `div` 등)을 입력하여 일치하는 모든 요소를 선택합니다.

* **ID 셀렉터 (`#id`)**: `#id속성값` 형태로 사용합니다. ID는 페이지 내에서 중복될 수 없습니다.

* **클래스 셀렉터 (`.class`)**: `.class속성값` 형태로 사용합니다. 중복 가능하고 공백으로 구분하여 여러 개 지정 가능해 재사용에 유용합니다.

* **속성 셀렉터 (`[ ]`)**:
    * `태그[속성]`: 지정된 속성을 갖는 모든 요소를 선택합니다.
    * `태그[속성=값]`: 지정된 속성/값이 일치하는 모든 요소를 선택합니다.
    * `[attr^="값"]`: 값으로 시작하는 요소 선택
    * `[attr$="값"]`: 값으로 끝나는 요소 선택
    * `[attr*="값"]`: 값을 포함하는 요소 선택

### 복합 셀렉터

* **후손 셀렉터 ( `A B` )**: `셀렉터A`의 모든 하위 요소 중 `셀렉터B`와 일치하는 요소를 선택합니다. (공백 사용)

* **자식 셀렉터 ( `A > B` )**: `셀렉터A`의 직계 자식 요소 중 `셀렉터B`와 일치하는 요소를 선택합니다.

* **인접 형제 셀렉터 ( `A + B` )**: `셀렉터A` 바로 뒤에 위치하는 형제 `셀렉터B`를 선택합니다. (딱 하나)

* **일반 형제 셀렉터 ( `A ~ B` )**: `셀렉터A` 뒤에 위치하는 형제 `셀렉터B` 요소를 모두 선택합니다.

### 가상 셀렉터

* **가상 클래스 셀렉터 (`:`)**: 요소의 특정 상태에 따라 스타일을 정의합니다.
    * `:hover`: 마우스를 올렸을 때
    * `:focus`: 요소가 포커스되었을 때 (예: input 클릭 시)
    * `:nth-child(n)`: n번째 자식 요소

* **가상 요소 셀렉터 (`::`)**: 요소의 특정 부분**에 스타일을 적용하기 위하여 사용합니다.
    * `::before`: 요소의 콘텐츠 시작 부분 앞에 내용 삽입
    * `::after`: 요소의 콘텐츠 끝 부분 뒤에 내용 삽입
    * `::first-letter`: 첫 번째 글자

---

## 크기 및 색상 단위

### 크기 단위

* **`px`**: 모니터의 픽셀 하나 크기를 기준으로 하는 절대 단위
* **`%`**: 부모 요소의 크기에 상대적인 백분율 단위
* **`em`**: 부모 요소의 글꼴 크기를 1배수로 하는 배수 단위 (중첩 시 복잡해짐)
* **`rem`**: 최상위 요소(html)의 글꼴 크기를 기준으로 사이즈를 설정

### Viewport 단위
* **`vw`**: Viewport(브라우저 화면) 너비**의 1/100
* **`vh`**: Viewport 높이의 1/100
* **`vmin`**: Viewport 너비/높이 중 작은 쪽의 1/100
* **`vmax`**: Viewport 너비/높이 중 큰 쪽의 1/100

### 색상 표현 단위

* **HEX 코드**: `#RRGGBB` (예: `#FFFFFF`, `#000000`)
* **RGB**: `rgb(Red, Green, Blue)` (예:`rgb(255, 255, 0)`)
* **RGBA**: `rgba(Red, Green, Blue, Alpha(투명도))` (예: `rgba(255, 255, 0, 0.5)`)
* **HSL**: `hsl(Hue(색상), Saturation(채도), Lightness(명도))` (예: `hsl(0, 100%, 25%)`)
* **HSLA**: `hsla(Hue, Saturation, Lightness, Alpha)` (예: `hsla(60, 100%, 50%, 1)`)

---

## 박스 모델

### `width` / `height`
* 요소의 너비와 높이를 지정합니다. (기본적으로 `content` 영역을 대상으로 함)

### `margin` / `padding`
* **`margin`**: 요소의 바깥쪽 여백
* **`padding`**: 요소의 안쪽 여백
* 4개 방향(top, right, bottom, left)에 대해 지정 가능
* `margin: 0 auto;` : 블록 요소를 브라우저 중앙에 위치시킬 때 사용

### `border`
* **`border-style`**: 테두리 선의 스타일 (예: `solid`, `dotted`, `dashed`)
* **`border-width`**: 테두리의 두께 (예: `1px`)
* **`border-color`**: 테두리의 색상
* **`border` (단축 속성)**: `width`, `style`, `color` 순으로 한 번에 설정 (예: `border: 1px solid black;`)
* **`border-radius`**: 테두리 모서리를 둥글게 표현 (예: `5px`, `50%`)

### `box-sizing`
* 요소의 `width`/`height`가 계산되는 방식을 결정합니다.
* **`content-box` (기본값)**: `width` = 순수 콘텐츠 영역
* **`border-box` (권장)**: `width` = 콘텐츠 + Padding + Border (최종 크기 기준이라 레이아웃 잡기 훨씬 쉬움)

---

## 표시

### `display` 속성
* **`block`**: `div`, `p`처럼 한 줄 전체를 차지하고 (`width`, `height`, `margin`, `padding` 모두 적용 가능)
* **`inline`**: `span`, `a`처럼 자기 콘텐츠 크기만 차지하고 줄바꿈 없음 (`width`, `height`, `margin-top/bottom` 적용 불가)
* **`inline-block`**: `inline`처럼 한 줄에 배치되면서 `block`처럼 `width`, `height`, `margin`, `padding`을 모두 지정 가능
* **`none`**: 요소를 화면에서 완전히 제거 (차지하던 공간까지 사라짐)

### `visibility` 속성
* **`visible`**: 요소를 보이게 함 (기본값)
* **`hidden`**: 요소를 투명하게 만듦 (차지하던 공간은 그대로 남아있음)

### `opacity` 속성
* 요소의 투명도를 조절합니다.
* `1.0` (완전 불투명) ~ `0.0` (완전 투명)

---

## 배경

* **`background-image`**: 배경 이미지 지정 (`url("경로")`)
    * 복수 지정 시 먼저 설정된 이미지가 전면에 출력됩니다.
* **`background-repeat`**: 배경 이미지 반복 지정
    * `repeat-x` (x축 반복), `repeat-y` (y축 반복), `no-repeat` (반복 안 함)
* **`background-size`**: 배경 이미지 크기 지정
    * `px`, `%` 단위 사용
    * `cover`: 요소를 꽉 채우되 이미지가 잘릴 수 있음.
    * `contain`: 이미지가 잘리지 않게 요소 안에 맞춤
* **`background-attachment`**: 스크롤 시 배경 이미지의 동작 지정
    * `scroll` (기본값): 배경이 요소를 따라 스크롤됨
    * `fixed`: 배경이 뷰포트에 고정되어 스크롤되지 않음
* **`background-position`**: 배경 이미지의 시작 좌표 지정. (예: `center`, `top right`)
* **`background-color`**: 요소의 배경 색상 또는 `transparent`키워드 지정 가능

---

## 폰트 및 텍스트

* **`font-size`**: 텍스트 크기 (예: `16px`, `1.2rem`)
* **`font-family`**: 폰트(글꼴) 지정. (여러 개 지정 가능, 마지막엔 `serif`, `sans-serif` 같은 generic-family 지정 권장)
* **`font-style`**: 글씨체 (예: `italic`)
* **`font-weight`**: 폰트 굵기 (예: `bold`, `400`, `700`)
* **`line-height`**: 텍스트의 줄 높이 지정. (수직 중앙 정렬에도 응용)
* **`letter-spacing`**: 글자 사이의 간격 지정
* **`text-align`**: 텍스트의 수평 정렬 (예: `left`, `right`, `center`)
* **`text-decoration`**: 텍스트 장식 (예: `none`으로 링크 밑줄 제거, `underline`, `line-through`)
* **`white-space`**: HTML의 기본 공백/줄바꿈 처리 방식을 제어
* **`text-overflow`**: 부모 영역을 벗어난 텍스트 처리
    * `clip`: 영역 벗어나면 그냥 자름
    * `ellipsis`: 영역 벗어나면 말줄임표(...) 표시
* **`word-wrap` / `overflow-wrap`**: 한 단어 자체가 너무 길어 부모 영역을 벗어날 때 처리 (다음 줄로 넘김)
* **`word-break`**: 단어를 고려하지 않고 부모 영역에 맞춰 강제 개행

---

## 요소 정렬

### `position` 속성
* **`static` (기본값)**: HTML 문서의 기본 배치 순서(흐름)를 따름
* **`relative`**: 기본 위치(`static`)를 기준으로 `top`, `bottom`, `left`, `right` 속성을 이용해 상대적으로 위치 이동
* **`absolute`**: `static`이 아닌 가장 가까운 조상 요소를 기준으로 `top`, `bottom`, `left`, `right` 만큼 절대적으로 위치 이동
* **`fixed`**: 브라우저 Viewport만을 기준으로 `top`, `bottom`, `left`, `right` 만큼 고정된 위치에 배치(스크롤해도 움직이지 않음)

### `z-index` 속성
* 요소가 겹칠 때 쌓이는 순서(z축)를 정의합니다.
* 숫자 값이 클수록 화면 전면에 출력됩니다.
* `position` 속성이 `static` 이외인 요소에만 적용됩니다.

### `overflow` 속성
* 자식 요소가 부모 요소의 영역을 벗어났을 때 처리 방법 정의합니다.
* `visible` (기본값): 벗어나도 그냥 보여줌
* `hidden`: 벗어난 부분은 잘라서 숨김
* `scroll`: 무조건 스크롤바 생성
* `auto`: 벗어날 경우에만 스크롤바 생성

---

## Float

* 주로 레이아웃을 구성할 때 블록 레벨 요소를 가로 정렬하기 위해 사용되던 기법입니다.
* `float: left;`: 요소를 왼쪽으로 띄워 다음 요소가 오른쪽으로 흐르게 함
* `float: right;`: 요소를 오른쪽으로 띄워 다음 요소가 왼쪽으로 흐르게 함

---

## 상속과 캐스캐이딩

### 상속 (Inheritance)
* 상위 요소에 적용된 프로퍼티(속성)를 하위 요소가 물려받는 것입니다.
* 상속이 되는 속성 (예: `color`, `font-size`)과 안 되는 속성 (예: `border`, `margin`, `padding`)이 있습니다.

### 캐스캐이딩 (Cascading)
* 하나의 요소는 여러 개의 CSS 선언(규칙)에 영향을 받을 수 있습니다.
* 이때 충돌을 피하기 위해 CSS 적용 우선순위(중요도 > 명시도 > 선언 순서)가 필요하며 이를 캐스케이딩이라고 합니다.