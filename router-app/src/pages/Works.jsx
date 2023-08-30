import React from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

function Works() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      Works<br/>

      {/* 버튼을 이용해서 이동하기 */}
      <button onClick={()=>{
        navigate('/');
      }}>Home 이동</button>

      {/* a href 랑 동일한 기능 */}
      <Link to='/contact'>contact 이동</Link>
    </div>
  )
}

export default Works