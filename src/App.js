import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '수영 맛집'; 
  let[글제목,b] = useState(['남자 코트 추천','맛집추천','자바공부']);
  // state변수는 html이 자동 재렌더링 됨
  // 바로바로 변경되야할경우 state에다가 
  
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBLOG</h4>
      </div>
      {/* <h4 style={ {color : 'red' , fontSize : '16px'} }>{ post }</h4> */}
      {글제목.map((title, index) => (
          <div className="list">
          <h4 key={index}>{title}</h4>
          <p>7월 21일</p>
          </div>
    ))}

    </div>
  );
}

export default App;
