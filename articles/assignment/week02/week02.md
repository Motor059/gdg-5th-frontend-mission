# Mission Course Week2
2주차 미션에 오신 것을 환영합니다! 🚀
지난주에는 웹의 기본기와 React 프로젝트 설정법을 익혔다면, 이번 2주차에는 웹이 소통하는 방식(HTTP)과 React의 핵심 기능(Hooks)을 배워 쇼핑몰 웹사이트에 실제 '기능'을 구현해 보는 시간입니다.
상태 관리를 통해 동적인 UI를 만들고, 페이지 이동을 구현하며, 목업(mock) 데이터를 연결해볼 예정입니다!


2주차 학습 목차 
- HTTP & 네트워크 기본 개념 공부하기
- React Hooks (useState, useNavigate, useEffect) 학습하기
- 목업(Mock) 데이터 연결하기
- 쇼핑몰 웹 기능 이어서 구현하기 (장바구니, 페이지 이동)

## 1번째 미션 : HTTP & 네트워크 기본 개념 학습하기 

### 왜 이 미션이 중요할까요?
웹사이트는 보이지 않는 곳에서 서버와 끊임없이 대화(통신)를 주고받습니다. HTTP는 이 대화의 규칙(프로토콜)이에요.
상품 데이터를 서버에 요청(Request)하고, 서버로부터 응답(Response)을 받아 화면에 표시하는 모든 과정이 HTTP를 통해 이루어져요. 프론트엔드 개발자가 서버와 데이터를 주고받기 위해 반드시 알아야 할 기본 지식입니다.

### 미션 내용
HTTP의 핵심 개념(Request/Response 구조, 주요 Method: GET/POST 등, 주요 Status Code: 200, 404, 500 등)과 네트워크 통신의 기본 흐름을 학습하고 정리해봐요! 
* [ ]: HTTP & 네트워크 핵심 개념 학습하고 정리하기 

## 2번째 미션 : React Hooks 심화 학습하기

### 왜 이 미션이 중요할까요?
React Hooks는 함수형 컴포넌트에서 상태(State) 관리나 생명주기(Lifecycle) 기능 등을 사용할 수 있게 해주는 핵심 기능이에요.

- **`useState`**: 컴포넌트가 기억해야 할 값(상태)을 관리합니다. (예: 장바구니 수량, 검색어)
- **`useEffect`**: 컴포넌트가 렌더링 될 때마다, 혹은 특정 값이 변경될 때마다 실행할 작업(Side Effect)을 정의합니다. (예: 서버에서 데이터 처음 불러오기, 상태에 따라 페이지 재구성하기)
- **`useNavigate`**: 사용자를 다른 페이지로 이동시킬 때 사용합니다.

이 세 가지 Hook은 React로 동적인 애플리케이션을 만드는 데 가장 기본이 되고 자주 사용돼요.

### 미션 내용
* [ ]: useState, useEffect, useNavigate 사용법과 작동 원리 학습하고 정리하기

## 3번째 미션 : 쇼핑몰 웹 기능 구현하기 (feat. Mock Data)

### 왜 이 미션이 중요할까요?
이제 배운 React Hooks와 목업 데이터를 활용하여 1주차에 만든 UI에 생명을 불어넣을 차례예요.
아직 실제 서버(백엔드)가 없어도, 목업 데이터를 사용하면 서버로부터 데이터를 받아오는 상황을 시뮬레이션하여 기능을 미리 구현해 볼 수 있어요! 

### 미션 내용
**1. 목업 데이터 적용하기**

* [ ]: 아래 제공되는 `mockData`를 프로젝트 내의 별도 파일(예: `src/data/mockData.js`)로 분리하여 관리하고, 필요한 컴포넌트에서 `import`하여 사용합니다.

```
// mockData.js

// 모든 상품 리스트 api
export const itemData = [
  { id: 1, itemName: "원피스", price: 1000, quantity: 13 },
  { id: 2, itemName: "상품2", price: 200, quantity: 7 },
  { id: 3, itemName: "상품3", price: 5000, quantity: 14 },
  { id: 4, itemName: "상품4", price: 8000, quantityk: 113 },
];

// 검색된 상품 리스트 api
export const searchedData = {
  id: 1,
  itemName: "원피스",
  price: 1000,
  quantity: 13,
};

// 장바구니 상품 페이지 api
export const cartList = {
  totalPrice: 20000,
  items: [
    { itemName: "구매된 상품1", count: 5, price: 1000 },
    { itemName: "구매된 상품2", count: 5, price: 7000 },
    { itemName: "구매된 상품3", count: 5, price: 500 },
  ],
};

// 의류로 카테고리 선택된 상품 리스트 api
export const categoryData = [
  {
    id: 1,
    category: "의류",
    itemName: "원피스",
    price: 1000,
    quantity: 13,
  },
  {
    id: 2,
    category: "의류",
    itemName: "청바지",
    price: 1000,
    quantity: 13,
  },
];

// 100~1000인 가격 검색된 데이터 리스트
export const priceSelectedData = {
  low: 100,
  high: 10000,

  items: [
    {
      id: 1,
      itemName: "원피스",
      price: 500,
      quantity: 13,
    },
    {
      id: 2,
      itemName: "청바지",
      price: 200,
      quantity: 13,
    },
  ],
};

// 정렬된 결과 리스트 api
export const sortedData = [
  {
    id: 1,
    itemName: "가나",
    price: 200,
    quantity: 13,
  },
  {
    id: 2,
    itemName: "나다다",
    price: 200,
    quantity: 13,
  },
  {
    id: 2,
    itemName: "다라",
    price: 200,
    quantity: 13,
  },
];
```

**2. 쇼핑몰 기능 구현하기**

1. **`useState` 이용** 
* [ ]: **장바구니 페이지 기능**
    - `useState`를 사용하여 각 상품의 수량(count)을 관리해요.
    - -, + 버튼 클릭 시 수량이 변경돼요.
    
    
    
2. **`useState`와 `useEffect`로 페이지 이동 구현하기**

`react-router-dom`의 `useNavigate`를 사용하면 페이지 이동을 쉽게 구현할 수 있지만, 이번 서브 미션에서는 React의 근본적인 작동 방식을 이해하기 위해 **`useState`와 `useEffect`를 조합**하여 페이지 이동을 직접 구현해 봐요.

* [ ]: 홈 화면에서 장바구니 화면으로 이동하기
    - `useState` 와 `useEffect` 를 사용해서 페이지 이동을 구현해주세요!
    
3. **Navbar에 있는 페이지 구현** 
* [ ]: 1주차에 만든 Navbar의 각 버튼(카테고리, 가격 범위 등)에 해당하는 페이지(컴포넌트)를 최소 2개 이상 생성해요. (3개 권장)



#### TODO
* [ ]: 300자 이내 WIL 작성하기
* [ ]: 1번째 미션 : HTTP & 네트워크 핵심 개념 학습하기
* [ ]: 2번째 미션 : `useState`, `useEffect`, `useNavigate` 심화 학습하기
* [ ]: 3번째 미션 : 쇼핑몰 웹 기능 구현하기
	* [ ]: 목업 데이터 적용하기
  * [ ]: 장바구니 페이지 수량 변경 기능 구현하기
  * [ ]: `useState`, `useEffect`로 페이지 이동 구현하기
  * [ ]: Navbar 페이지(최소 2개) 구현하기


## 폴더 구조
```
articles
 ┗ assignment
   ┣ week01          // [1주차 폴더 - 기존]
   ┃ ┣ mission01
   ┃ ┣ mission02
	 ┃ ┣ mission03     // (1주차에서 생성한) React 쇼핑몰 프로젝트 이어서 진행
	 ┃ ┣ src
	 ┃ ┃ ┣ assets
	 ┃ ┃ ┣ components
	 ┃ ┃ ┣ data           // <-- [2주차 신규] mockData.js 파일 위치
	 ┃ ┃ ┃ ┗ mockData.js
	 ┃ ┃ ┣ pages          //  <-- [2주차 신규] 페이지 컴포넌트 위치
	 ┃ ┃ ┃ ┣ Home.jsx
	 ┃ ┃ ┃ ┗ Cart.jsx
	 ┃ ┃ ┣ App.jsx        // <-- [2주차 수정] 페이지 이동 로직 구현
	 ┃ ┃ ┣ ...
	 ┃ ┣ ...
   ┃ ┣ week01
   ┃ ┃ ┗ WIL.md
   ┃ ┣ week01.md
   ┃ ┗ README.md
   ┗ week02          // [2주차 신규 폴더]
     ┣ mission01     // <-- 2주차 학습 1 (HTTP)
     ┃ ┗ HTTP.md
     ┣ mission02     // <-- 2주차 학습 2 (Hooks)
     ┃ ┗ Hooks.md
     ┣ week02        // <-- 2주차 WIL 폴더
     ┃ ┗ WIL.md
     ┗ week02.md   
```
