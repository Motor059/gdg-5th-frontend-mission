# API 호출 방법 (Fetch vs Axios)

---

## Fetch API
- 자바스크립트 내장 함수로, 별도의 설치 없이 사용 가능하며 Promise 기반으로 동작함

* **GET 호출 (조회)**
- fetch() 함수는 기본적으로 GET 방식으로 작동하며 별도의 옵션 인자가 필요 없음 
- 응답(response) 객체의 .json() 메서드를 호출하여 JSON 형식을 자바스크립트 객체로 변환해야 함 
- ```javascript
      fetch("https://api.example.com/posts/1")
      .then((response) => response.json()) // JSON 변환 필요
      .then((data) => console.log(data));

* **POST 호출 (생성)**
- 새로운 리소스를 생성할 때 사용 
- method를 POST로 지정하고, headers는 Content-Type: "application/json" 설정하며 마지막으로 body에서 전송할 데이터를 JSON.stringify()로 직렬화 설정 
- ```javaScript
    fetch("https://api.example.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Test", body: "Testing" }), // JSON 문자열 변환
    }).then((response) => console.log(response));

* **PUT & DELETE 호출**
* **`PUT`**: 데이터 수정을 위해 사용하며 method 옵션만 다르고 POST와 흡사함 
* **`DELETE`**: 데이터 삭제를 위해 사용하며 보낼 데이터가 없으므로 headers와 body 옵션이 필요 없음

---

## Axios
- 브라우저와 Node.js에서 사용할 수 있는 Promise 기반의 HTTP 클라이언트 라이브러리

* **`GET (axios.get(url, [, config]))`**
- 서버에서 데이터를 가져와 보여주는 용도 (값이나 상태를 바꿀 수 없음) 
- res.data를 통해 서버에서 받은 데이터를 바로 사용할 수 있음 
- ```javaScript
    import axios from 'axios';
    axios.get('/api/users')
    .then((res) => {
    console.log(res.data); // 별도의 json() 변환 과정 없음
    });

* **`POST 호출 (axios.post("url", {data 객체}, [, config]))`** 
- 새로운 리소스를 생성하거나, 로그인/회원가입 시 사용 
- 주소창에 정보가 남지 않아 GET보다 안전하고, 두 번째 인자로 객체 리터럴을 바로 전달함 (JSON.stringify 불필요) 
- ```javaScript
    axios.post('/api/login', {
    email: 'test@example.com',
    password: '1234'
    }).then((res) => console.log(res.data));

* **`PUT & DELETE 호출`**
- **`PUT`**: `axios.put(url[, data[, config])`형태이며 DB 내용을 수정할 때 사용 
- **`DELETE`**: `axios.delete(url, [, config])` 형태이며 DB 내용을 삭제할 때 사용 

---

## 참고 문헌
- https://www.daleseo.com/js-window-fetch/
- https://ldd6cr-adness.tistory.com/306