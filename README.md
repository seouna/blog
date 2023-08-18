<h1>✅react study</h1>
<hr>

리액트 사용이유
- html을 함수, array, object 이런 곳에 보관하고 재사용가능 > 큰 프로젝트일 수록  html 관리 편해짐
- React Native를 쓰면 같은 리액트 문법으로 모바일 앱개발도 가능
<hr>

<h3>state</h3>
<p>
- 리액트에서 이벤트에 의해 변경되는 동적인 값 <br>
- 버튼을 클릭하는 onClick 이벤트, input 입력으로 인해 발생하는 onChange 이벤트에 의해 입력값이 변경된 경우 사용 <br>
- 함수형 컴포넌트는 'useState'라는 Hook 을 사용하여 state를 다룰 수 있습니다. <br>
- state변수는 html이 자동 재렌더링 됨 바로바로 변경되어야할경우 사용<br>
</p>
<h4>state 변경방법</h4>
<p>
 📌state 변경함수를 써서 state를 변경해야함 <br>
 ex) const [ state, setState ] = useState(초기값); <br>
       -> setState(새로운state)   <br>

</p>

<hr>
<h3>props</h3>
<p>
- props(property)란 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용하는 속성<br>
- 상위 컴포넌트가 하위 컴포넌트에 값을 전달하기 때문에  단방향 데이터 흐름을 갖습니다. <br>
- 부모 컴포넌트는 수정 가능하지만, 자식 컴포넌트는 읽기만 가능합니다. 
 
</p>
<h3>컴포넌트</h3>

<p></p>
<h3>동적 UI 만들기 STEP</h3>
<p></p>


<hr>
<h3>만든 리액트 사이트 build & Github Pages로 배포하는방법</h3>
<hr>
1. npm run build 를 해주면 build파일 생성

 
2. 해당 repository에 드래그앤드롭으로 원하는 HTML CSS JS 파일을 업로드하고 확인까지 누름


3. repository setting 메뉴에 들어가서 Github pages 클릭

![image](https://github.com/seouna/blog/assets/117568974/478fa01b-7986-4660-948e-7877b7338f2c)

4. 내아이디.github.io/repository이름/html파일명.html

<hr>
<b>메인페이지 말고 왜 특정 페이지로 접속하면 404 에러가 뜨는이유</b>
<p>
어쩌구.github.io/detail/1 이렇게 세부 페이지 URL을 주소창에 직접 입력하시면
찾는 페이지가 없어요~ 이렇게 404 에러가 날 수 있습니다.
이건 서버에서 "누군가 어쩌구.github.io/어쩌구 로 접속하면 메인페이지로 안내하세요~" 라고 API 개발을 해놔야합니다.
근데 github은 우리가 서버를 만지고 어찌할 수 있는게 아니고 그냥 HTML 파일 올린것만 보여주는 곳이기 때문에
사이트 메뉴에다가 페이지 이동버튼을 잘 만들어두시면 되겠습니다.
아니면 URL에 #기호가 붙는 hashRouter를 리액트 라우터 코드 사용
</p>

<h3>ajax 사용 옵션</h3>
<p>

    1. XMLHttpRequest 
    2. fecth() 
    3. axios ( npm install axios ) 
</p>

