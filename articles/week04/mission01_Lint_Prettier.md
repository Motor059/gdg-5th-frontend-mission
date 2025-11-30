# ESLint & Prettier 핵심 개념 정리

---

## ESLint vs Prettier
- 협업 시 **일관된 코드 규칙**을 유지하기 위해 사용하는 두 가지 필수 도구의 차이점

* **`ESLint`**
    - **핵심 역할**: **Code Quality**를 관리
    - 문법 에러, 논리적 오류, 잠재적 버그, 코딩 컨벤션(구현 방식)을 검사함
    - `예: function vs const 화살표 함수, === 사용 강제, 안 쓰는 변수 경고`

* **`Prettier`**
    - **핵심 역할**: **Code Style** 관리
    - 코드의 실행 로직과는 상관없는 줄 바꿈, 공백, 들여쓰기 등을 강제로 통일함
    - `예: 탭 사이즈(2칸 vs 4칸), 세미콜론 유무, 따옴표(Single vs Double)`

---

## .eslintrc 핵심 설정 (ESLint)
- 프로젝트 루트에 위치하하면서 어떤 규칙을 검사할지 상세하게 정의하는 파일

* **`parser`**
    - 작성된 코드를 ESLint가 이해할 수 있도록 변환하는 **해석기**
    - `예: @typescript-eslint/parser`

* **`plugins`**
    - 특정 환경(React, TS 등)에 필요한 **규칙 세트**를 가져오는 역할
    - 단순히 가져오기만 하고 바로 규칙이 활성화되는 것은 아님

* **`extends`**
    - 플러그인에서 제공하는 **추천 규칙을 실제로 적용**하는 설정
    - `예: plugin:@typescript-eslint/recommended`

* **`rules`**
    - extends로 적용된 규칙 중 특정 규칙을 끄거나(`off`), 경고(`warn`), 에러(`error`)로 변경할 때 사용

---

## Prettier 설정 우선순위
- Prettier는 설정할 수 있는 곳이 두 군데이고 적용 우선순위가 존재함

* **`1순위: .prettierrc 파일`**
    - 프로젝트 루트에 생성하는 설정 파일
    - 협업 시 팀원 모두에게 동일한 규칙을 강제할 수 있어 권장되는 방식

* **`2순위: VSCode Settings`**
    - 내 컴퓨터의 에디터 환경 설정
    - 프로젝트 내에 `.prettierrc` 파일이 있으면 이 설정은 무시됨

---

## ESLint와 Prettier 연결 (충돌 해결)
- 두 도구를 같이 쓰면 포매팅 규칙이 충돌하므로 **Prettier의 규칙을 ESLint에 통합**하는 방식을 사용

* **`eslint-config-prettier`**
    - ESLint가 가지고 있는 포매팅 관련 규칙을 모두 **비활성화**하여 충돌을 방지함

* **`eslint-plugin-prettier`**
    - Prettier의 규칙을 위반하면 **ESLint 에러로 감지**하여 출력해 줌

* **`통합 설정 (Best Practice)`**
    - `.eslintrc`의 `extends` 항목에 아래 설정을 추가하여 한 번에 해결
    - ```javascript
      module.exports = {
        extends: [
          "plugin:prettier/recommended"
        ],
      };
      ```

---

## VSCode 자동화 설정 (settings.json)
- 코드를 저장(`Ctrl + S`)할 때마다 두 도구가 자동으로 코드를 수정하도록 설정

* **`editor.codeActionsOnSave`**
    - 저장 시 **ESLint 규칙(구현 품질)**에 맞춰 코드를 자동 수정함 (`source.fixAll.eslint`)

* **`editor.formatOnSave`**
    - 저장 시 **Prettier 규칙(스타일)**에 맞춰 텍스트를 재정렬함
    - `editor.defaultFormatter`를 반드시 `esbenp.prettier-vscode`로 지정

---

## 참고 문헌
- https://velog.io/@imkkuk/Prettier-ESLint-이해하고-사용하기
- https://helloinyong.tistory.com/325