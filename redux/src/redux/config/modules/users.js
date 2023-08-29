// 초기 상태 값이 필요함 (state)
const initialState = {
  userId: 123,
};
//  const [number, setNumber] = useState(0);

// 리듀서 : 'state에 변화를 일으키는'함수
// (1) state를 action type에 따라 변경하는 함수

// input : state와 action
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default users;
