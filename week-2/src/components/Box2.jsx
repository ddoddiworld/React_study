import React from 'react'

function Box2() {
  console.log('Box2 랜더링');
  const style = {width:'100px',height:'100px',backgroundColor:'#4e93ed',color:'#fff'}
  return (
    <div style={style}>Box2</div>
  )
}

export default React.memo(Box2)