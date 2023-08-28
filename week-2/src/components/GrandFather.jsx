import React from 'react'
import Father from './Father';
import { FamilyContext } from '../context/FamilyContext';

// GF -> child에게 어떤 정보를 알려줘서 child가 그 내용을 출력하도록
function GrandFather() {
  const houseName = '스파르타';
  const pocketMony = 10000;
  return(
  <FamilyContext.Provider value={{
    houseName,
    pocketMony
  }}>
    <Father></Father>
  </FamilyContext.Provider>
  )
}

export default GrandFather