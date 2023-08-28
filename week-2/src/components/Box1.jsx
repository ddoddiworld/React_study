import React from 'react'

function Box1() {
  console.log('Box1 랜더링');
  const style = {width:'100px',height:'100px',backgroundColor:'#01c49f',color:'#fff'}

  return (
    <div style={style}>Box1</div>
  )
}

export default React.memo(Box1)