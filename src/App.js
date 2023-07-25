/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '수영 맛집'; 
  let[글제목, 글제목변경] = useState(['남자 코트 추천','맛집추천','자바공부']);
  // state변수는 html이 자동 재렌더링 됨
  // 바로바로 변경되야할경우 state에다가 

  // 반복문 230723
  [1,2,3].map(function(a){
    console.log(a)
  })

  //state는 등호로 변경하면안됨
  let [like, likeUpdate] = useState([0,0,0]);


  //모달
  let [modal, setModal] = useState(false);

  //tit
  
  let [title, setTit] = useState(1);

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


        {/* <div className="list"> */}
       

          {/* onclick={} 안엔 함수 이름을 넣어야함 함수정의부분을 넣어도되고 위에다가 정의해도됨*/}
         {/* <h4>{ 글제목[0] }<span onClick={ () => { likeUpdate(like+1)  }}> 🧡 </span> { like } </h4>
         <p>7월 2
          1일</p>
        </div>

        <div className="list">
         <h4>{ 글제목[1] }</h4>
         <p>7월 2
          1일</p>
        </div>



        <div className="list">
         <h4 onClick={ () => { setModal(true) } }>{ 글제목[2] }</h4>
         <p>7월 2
          1일</p>
        </div> */}


        {/* 
        
        동적 UI 만들기 STEP
         1. html  css 로 미리 디자인 완성
         2.  UI의 현재상태를 state 저장
         3. state 따라 UI 가 어떻게 보일지 설정
        
        */}
        
        {/* 반복문 */}
        {
          //실제 글 갯수만큼 
          글제목.map(function(a, i){
            return (
              <div className="list" key={i}>
                <h4 onClick ={ () => { setModal(!modal); setTit(i)}}> { 글제목[i] }</h4>
                <span onClick={ () => {
                    let copy =[...like];
                    copy[i] = copy[i] + 1;
                    likeUpdate(copy)  
                   }}> 🧡 </span>{ like[i] }
                <p>7월 21일</p>
              </div>
             

            )
          })

        }

        
        {/* 
        <button onClick={()=>{setTit(0)}}>글제목0</button>
        <button onClick={()=>{setTit(1)}}>글제목1</button>
        <button onClick={()=>{setTit(2)}}>글제목2</button>
         */}


        {/* 컴포넌트 만들기 1.function 2. return() 안에 담기 3<함수명></함수명> */}
       

        {/* {} 안에는 if for같은 조건문 사용못함 if 대용의 삼항연산자사용
           조건식 ? 참일떄코드 : 거짓일때코드
        
        */}
        {
          modal == true ? <Modal 글제목변경={글제목변경} color={'skyblue'} 글제목={글제목} title={title}/> : '' 
         
        }

       
    </div>
  );
}

// 컴포넌트 단점 : state를 많이 만들때 생김 < 변수의 사용범위는 함수내니까
// 이런식으로 컴포넌트 생성해도됨
// let Modal = () => {
  
// }

function Modal(props){
  return (
    // 의미없는<div>대신 <></> 사용
    <> 
      <div className="modal" style={ {background: props.color} }>
        {/* 
        
        누른 리스트의 제목가져오기!!  props 사용
        
        
        */}
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={ () => { 
        
          let copy = [...props.tit];
          copy[0] = '여자코트 추천';
          props.글제목변경(copy) 

         }}>글수정하기</button>

        
      </div>
    </>
  )
}

export default App;
