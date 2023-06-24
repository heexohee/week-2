import React from 'react'

function App() {

  //구조 분해 할당!
  const testObj = {
    name: 'wonjang',
    age: 21,
    company: 'naver'

  }
  const{name, age, company} =testObj;
  console.log('name', name)
  return (
    <div>App</div>
  )
}

export default App

