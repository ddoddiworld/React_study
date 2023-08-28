import React from 'react'

function Box3() {
  console.log('Box3 랜더링');
  const style = {width:'100px',height:'100px',backgroundColor:'#c491be',color:'#fff'}
  return (
    <div style={style}>Box3</div>
  )
}

export default React.memo(Box3)