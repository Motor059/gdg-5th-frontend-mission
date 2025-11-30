# HTTP & 네트워크 기본 개념

---

## HTTP의 핵심 개념

### **Request/Response 구조**
- HTTP는 클라이언트와 서버 간의 통신 규칙으로 이 통신은 항상 요청과 응답의 쌍으로 이루어짐

* **`Request`**: 클라이언트가 서버에게 "이것 좀 해줘"라고 보내는 메시지로
Method, URL, Headers 등의 정보가 담겨있음
* **`Response`**: 서버가 클라이언트의 요청을 처리한 후 결과에 대한 답을 보내는 메시지로 요청이 Status Code, Body 등의 정보가 담겨있음

### **주요 Method: GET/POST** 
- 메서드는 클라이언트가 서버에 수행하려는 동작을 지정하는 동사와 같음

* **`GET`**
    * 서버로부터 정보를 조회할 때 사용 (웹페이지 보기)
    * 데이터를 URL의 쿼리 스트링(예: `...search?q=http`)에 담아 보냄

* **`POST`**
    * 서버에 데이터를 제출할 때 사용합니다. (회원가입, 글쓰기 등)
    * 데이터를 HTTP 요청의 `Body`에 담아 보냅니다.

* **`기타 주요 메서드`**: PUT(리소스 전체를 수정), PATCH(리소스 일부를 수정), DELETE(리소스를 삭제)

### **주요 Status Code**

* **`2xx - 성공`**
    * **200 OK**: 요청이 성공적으로 처리 (GET, POST 등이 성공했을 때)
    * **201 Created**: 요청이 성공하여 새로운 리소스가 생성 (POST, PUT)

* **`3xx - 리다이렉션`**
    * **301 Moved Permanently**: 요청한 리소스의 주소가 영구적으로 변경

* **`4xx - 클라이언트 오류`**
    * **400 Bad Request**: 클라이언트의 요청 자체가 잘못되었을 때 (예: 문법 오류)
    * **401 Unauthorized**: 인증이 필요함 (로그인 안 됨)
    * **403 Forbidden**: 인증은 되었지만 해당 자원에 접근할 권한이 없음
    * **404 Not Found**: 요청한 리소스(페이지, 파일 등)를 서버에서 찾을 수 없음

* **`5xx - 서버 오류`**
    * **500 Internal Server Error**: 서버 내부에서 알 수 없는 오류가 발생 (서버 코드 오류 등)
    * **503 Service Unavailable**: 서버가 일시적으로 요청을 처리할 수 없음 (과부하, 점검 중)

---

## **브라우저는 서버 주소를 어떻게 찾는가? (DNS로 찾음)**
- www.google.com을 쳤을 때, 컴퓨터는 google.com이 어디에 있는지 몰라서 IP 주소를 알아내야 함

### DNS가 동작하는 과정

1) www.google.com 주소를 요청

2) PC에 설정된 DNS 서버에게 https://www.google.com/의 IP 주소가 뭔지 물어봄

3) Local DNS 서버가 캐시(누군가 최근에 물어봄)에 답이 없다면 Root DNS 서버에 물어봄

4) Root DNS 서버(.com, .org 등의 최상위 도메인 서버들의 주소 목록 보유) -> TLD DNS 서버(.com) -> Authoritative DNS(google.com) 서버 순으로 물어봄

5) Local DNS 서버가 PC에 IP주소를 알려주면 브라우저는 이제 172.217.14.228로 가면 된다고 인지함

---

## **데이터는 어떻게 안전하게 전달되는가? (TCP/IP 프로토콜 이용)**
- IP 주소를 알았으면 그곳에 HTTP 요청 메시지를 보낼 때 핵심 프로토콜 TCP/IP이 사용됨 

**`IP (Internet Protocol)`**: 데이터 조각(패킷)에 주소(출발지/도착지 IP)를 붙여서 보내는 역할을 함 (편지 봉투에 주소 쓰기)

**`TCP (Transmission Control Protocol)`**

- `연결 지향`: 데이터를 보내기 전에 서버와 "지금부터 데이터 보낼게 준비됐어?"라고 확인하는 과정(3-Way Handshake(sync/ack))을 거침

- `신뢰성 보장`: 데이터를 쪼개서 보낼 때 번호를 매겨서 보내고, 서버가 "나 3번 못 받았어"라고 하면 다시 보내줌

- `HTTP와의 관계`: 우리가 보낼 HTTP 메시지는 TCP에 의해 잘 포장되고, IP 주소가 붙어서 인터넷으로 전송

---

## **브라우저 렌더링 과정 (웹사이트를 구현하는데 알아두면 좋음)**

### 브라우저 주소창에 www.google.com을 치면 일어나는 일 (프론트엔드 면접 단골 질문)

1) 사용자가 브라우저에 www.google.com 입력

2) 브라우저가 DNS를 통해 google.com의 IP 주소를 찾음

3) 브라우저가 해당 IP 주소를 사용하는 서버와 TCP 연결을 맺음 (3-Way Handshake)

4) 연결이 완료되면, 브라우저가 서버에게 HTTP Request (요청) 메시지를 보냄 (예: GET / HTTP/1.1)

5) 서버가 요청을 처리하고 브라우저에게 HTTP Response (응답) 메시지를 보냄 (예: 200 OK와 함께 index.html 파일 내용)

6) TCP 연결 종료

---

## 네트워크에서 프론트엔드의 핵심 
- 브라우저가 응답으로 받은 HTML/CSS/JS 파일을 렌더링해서 사용자에게 화면을 보여줌

**`개발자 도구 활용`**: 브라우저에서 F12를 눌러 Network 탭을 켜보고, **Timing** 탭을 보면 Initial Connection(TCP), Request/Response 등 확인 가능

---

## 참고 문헌

**`HTTP`**
http://www.tcpschool.com/html/html_intro_basic

https://developer.mozilla.org/ko/docs/Web/HTTP

**`네트워크`**
https://mangkyu.tistory.com/91

https://developer.mozilla.org/ko/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works

---

## HTTP 및 네트워크 공부할 때 알면 좋은 개념

### **HTTP 및 네트워크 기본 개념**

**`HTTP/HTTPS 개념`**
- HTTP(HyperText Transfer Protocol)란?
- HTTPS(SSL/TLS를 이용한 보안 HTTP)란?
- HTTP 1.1 vs HTTP/2 vs HTTP/3 비교

**`HTTP 메서드`**
- GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD 등

**`HTTP 상태 코드`**
- 2xx (성공): 200 OK, 201 Created
- 3xx (리다이렉션): 301 Moved Permanently, 302 Found
- 4xx (클라이언트 오류): 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
- 5xx (서버 오류): 500 Internal Server Error, 502 Bad Gateway

**`CORS (Cross-Origin Resource Sharing)`**
-동일 출처 정책(Same-Origin Policy) 개념
-Preflight Request와 OPTIONS 메서드

**`쿠키 & 세션 & 토큰`**
-쿠키(Cookie): 상태 유지 및 보안 이슈
-세션(Session): 서버 측에서 관리하는 사용자 상태
-JWT (JSON Web Token) vs 세션 방식 차이
**`캐시 & CDN`**
-HTTP 캐싱(Cache-Control, ETag, Last-Modified)
-브라우저 캐시 vs 서버 캐시
-CDN(Content Delivery Network)의 역할

### **DNS & 도메인 관련 개념**

**`DNS(Domain Name System)`**
- DNS가 하는 역할과 작동 방식
- DNS Lookup 과정
- A, CNAME, TXT, MX, NS 레코드

**`도메인 & URL 구조`**
- URL의 구성 요소 (프로토콜, 도메인, 경로, 쿼리 파라미터)
- www.example.com에서 ‘www’, ‘example’, ‘.com’ 각각의 의미

### **TCP/IP 및 네트워크 프로토콜**

**`TCP/IP 개념`**
- TCP(Transmission Control Protocol) vs UDP(User Datagram Protocol)
- 3-way Handshake 및 4-way Handshake

**`IP 주소와 포트`**
- 공인 IP vs 사설 IP
- IPv4 vs IPv6
- 포트(80, 443, 3000, 8080 등) 개념 및 역할

**`DNS over HTTPS (DoH) & DNS over TLS (DoT)`**
- 네트워크 보안 관련 최신 트렌드