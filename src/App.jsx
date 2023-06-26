import React, { useState } from 'react'
import Child from 'Child'//import해줘야 함!

function App() {
  

  // hook
  // 구조 분해 할당으로
  // const [state, useState] = useState('initial Value');
 
  //const [count, setCount] = useState(0); 
  //const [todoList, setTodoList] = useState([]);
  //const [name, setName] = useState("김할아부지");



  // onChange 속성에는 항상 event가 매개변수로 딸려온다!
// 우리가 입력하는 값들이 매개변수로 event.target.value에 들어온다!
//input 태그와 state와 값을 동기화 했다!  
const [fruit, setFruit]=useState('');
  return (
  <div>
   과일 : <input 
   value={fruit} 
   onChange={function(event){
    //console.log("event", event.target.value);
   setFruit(event.target.value);
   }}/>
   <br/> <br/>
  
   </div>)
}

export default App

