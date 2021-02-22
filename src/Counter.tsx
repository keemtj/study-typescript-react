import React, { useReducer } from 'react';

// reducer action에 대한 type을 준비해준다
type ActionType = { type: 'INCREASE' } | { type: 'DECREASE'};

const initialState = 0;
function reducer(state: number , action: ActionType): number {
  switch (action.type) {
    // Action타입을 지정해주었기 때문에 case 자동완성
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default: 
      throw new Error('Unhandled action type');
  }
}

function Counter() {
  // 제너릭 생략 가능
  const [count, dispatch] = useReducer(reducer, initialState);
  const onIncrease = () => dispatch({ type: 'INCREASE' });
  const onDecrease = () => dispatch({ type: 'DECREASE' });

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
}

export default Counter;