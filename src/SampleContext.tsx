import React, { createContext, Dispatch, useContext, useReducer } from 'react';

// context안에서 관리할 값을 위한 type 선언
// type FooValue = {
//   foo: number;
// };

// const FooContext = createContext<FooValue | null>(null);

type Color = 'red' | 'orange' | 'yellow';
type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
}
type Action = 
  | { type: 'SET_COUNT'; count: number }
  | { type: 'SET_TEXT'; text: string }
  | { type: 'SET_COLOR'; color: Color }
  | { type: "TOGGLE_GOOD" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_COUNT':
      return {
        ...state,
        count: action.count,
      };
    case 'SET_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SET_COLOR':
      return {
        ...state,
        color: action.color,
      };
    case 'TOGGLE_GOOD':
      return {
        ...state,
        isGood: !state.isGood
      }
    default:
      throw new Error('Unhandled action type');
  }
}

// context를 만들어 줄때 편하게 사용하기 위해
// 상태를 다루기 위한 컨텍스트, useReducer를 사용하게 됐을 때 dispatch를 관리하는 컨텍스트를 각각 설정

// type SampleDispatch = Dispatch<Action>;
const SampleStateContext = createContext<State | null>(null);
// Dispatch함수를 value로 가지고 있을 것이기 때문에 제너릭으로 dispatch 함수에 대한 타입을 넣어주어야 한다
// Dispatch의 경우 'react'에 내장되어 있다
// Dispatch 제너릭으로 Action 타입을 넣어주어야 한다
const SampleDispatchContext = createContext<Dispatch<Action> | null>(null);

type SampleProviderProps = {
  children: React.ReactNode
}
export function SampleProvider({ children }: SampleProviderProps) {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    text: 'hello',
    color: 'red',
    isGood: true,
  });

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  )
}

export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}

// ReducerSample에서 커스텀 훅 불러와 적용
// App에서 SampleProvider를 불러와 적용