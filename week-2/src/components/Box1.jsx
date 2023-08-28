import React from 'react'

function Box1({reset}) {
  console.log('Box1 랜더링');
  const style = {width:'100px',height:'100px',backgroundColor:'#01c49f',color:'#fff'}

  return (
    <div style={style}><button onClick={()=>{reset()}}>초기화</button></div>
  )
}

export default React.memo(Box1)