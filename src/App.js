/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '수영 맛집'; 
  let[글제목, 글제목변경] = useState(['남자 코트 추천','맛집추천','자바공부']);
  // state변수는 html이 자동 재렌더링 됨
  // 바로바로 변경되야할경우 state에다가 


  //state는 등호로 변경하면안됨
  let [like, likeUpdate] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBLOG</h4>
      </div>
      {/* <h4 style={ {color : 'red' , fontSize : '16px'} }>{ post }</h4> */}

      <button onClick={ () => { 
          // array/object 다룰때 원본은 보존하는게 좋음
          // [state변경함수 특징] 기존state 변경state가 같으면 변경하지않음
          // [array/object 특징]  변수1 변수2의 화살표가 같으면 변수1==변수2 비교해도true 나옴
            let copy = [...글제목];
            copy[0] = '여자코트 추천';
            글제목변경(copy) 
          }}>글수정하기</button>
        <button onClick={ () => { 
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
            
        }}>가나다순정렬</button>


        <div className="list">
       

          {/* onclick={} 안엔 함수 이름을 넣어야함 함수정의부분을 넣어도되고 위에다가 정의해도됨*/}
         <h4>{ 글제목[0] }<span onClick={ () => { likeUpdate(like+1)  }}> 🧡 </span> { like } </h4>
         <p>7월 2
          1일</p>
        </div>
        <div className="list">
         <h4>{ 글제목[1] }</h4>
         <p>7월 2
          1일</p>
        </div>
        <div className="list">
         <h4>{ 글제목[2] }</h4>
         <p>7월 2
          1일</p>
        </div>
        
        
        {/* 컴포넌트 만들기 1.function 2. return() 안에 담기 3<함수명></함수명> */}
        <Modal/>
        
        {/* {글제목.map((title, index) => (
          <div className="list">
          <h4 key={index}>{title}</h4>
          <p>7월 21일</p>
          </div>
      ))} */}
    </div>
  );
}
// 컴포넌트 단점 : state를 많이 만들때 생김 < 변수의 사용범위는 함수내니까

// 이런식으로 컴포넌트 생성해도됨
// let Modal = () => {
  
// }

function Modal(){
  return (
    // 의미없는<div>대신 <></> 사용
    <> 
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;
