//rfce

import React from 'react'
// 헤더녀석을 항상 어느 페이지이던 들어와야 한다. 
function Layout(props) {
  return (
    <>
    <header style={{
        margin: '10px',
        border : '1px solid red'
    }}
    >항상 출력되는 머릿글 입니다.</header>
  {props.children}
  {/* 상위 컴포넌트로부터 항상 children을 받아서 쓰게 된다면
  //(컴포넌트를 하나 항상 받는다면) 밑으로 항상 body부분을 출력하는 (항상출력되도록) */}
  </>
    );
}

export default Layout