import React, { useState } from 'react'
//import Child from 'Child'//import해줘야 함!

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
const [id, setId]=useState('');
const [password, setPassword]=useState('');


console.log('id',id);
console.log('password',password);
  // id 필드가 변경될 경우
const onIdChangeHandler = (event) => {
setId(event.target.value);
}
// pw 필드가 변경될 경우
const onPwChangeHandler = (event) => {
  setPassword(event.target.value);
}

return (
  <div>
    <div>
   아이디 : <input type='text' value={id} onChange={onIdChangeHandler}/>
  </div>

  <div>
   비번 : <input type='password' value={password} onChange={onPwChangeHandler}/>
  </div>
     <button 
     onClick={()=>{
      alert(`님이 입력하신 아이디는 ${id}비번은${password} 임당.`);
     setId('');
     setPassword('');
    
    }}
     >
      로그인</button>
   <br/> <br/>
  
   </div>)

}
export default App

