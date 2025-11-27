# Hook의 기본 개념
- React Hooks는 함수형 컴포넌트에서 상태 관리나 생명주기 기능 등을 사용할 수 있게 해주는 핵심 기능

---

## useState (상태 관리)
- 컴포넌트 내에서 변하는 값을 저장하고 관리하는 함수
    - `예: const [state변수명, set함수명] = useState(초기값);`

### 변수 (let) 대신 state를 쓰는 이유

* **`변수 (let)`**: 값이 바뀌어도 React가 인지하지 못해 화면을 다시 그리지 않음 (render를 안함)

* **`State 변수`**: 값이 바뀌면 React가 이를 감지하고 화면을 새로 고침 (Re-render 함)

- 그러므로 화면에 즉각적인 변화를 보여줘야 하는 데이터는 반드시 useState를 사용해야함

---

## useEffect (부수 효과 처리)
- 컴포넌트가 렌더링 될 때마다 특정 작업을 실행하도록 하는 함수
    - `예: useEffect(() => {console.log('실행할 코드 작성');}, [dependencies]);`

### 의존성 배열에 따른 동작 차이

* **`배열이 아예 없을 때 useEffect(() => { ... })`**: 컴포넌트가 렌더링 될 때마다 매번 실행 (2, 3, 4, 5... 계속 실행)

* **`빈 배열일 때 useEffect(() => { ... }, [])`**: 처음 렌더링 될 때(Mount) 딱 한 번만 실행

* **`특정 변수가 있을 때 useEffect(() => { ... }, [state 변수])`**: 특정 state 변수가 바뀔 때마다 실행

---

## useNavigate (페이지 이동)
- 사용자를 특정 URL로 이동시킬 때 사용하는 함수
    - `예: const navigate = useNavigate();`
    - `예: navigate('/test'); // 도메인/test' 경로로 이동`

### 추가 옵션
- 단순 문자열뿐만 아니라 객체를 전달하여 구체적인 경로 설정이 가능
    - `예: navigate({pathname: '/hongik', search: '?sort=gdg', hash: 'week2'});`

- 이동 시 추가적인 옵션을 설정 가능 (두 번째 인자로 옵션 설정)
    - `예: navigate('/home', {replace: true, state: {from: 'computer'}});`
    - **`replace: true`**: 이동 후 '뒤로 가기'를 눌러도 이전 페이지로 돌아오지 못하게 함
    - **`state`**: URL에 노출되지 않고, 이동하는 페이지에 몰래 데이터를 전달 가능 (받는 쪽은 `useLoacation`을 이용해 받음)