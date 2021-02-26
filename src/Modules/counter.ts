// v5.x 최신버전에서 migration
// import { createStandardAction } from 'typesafe-actions';
import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// as const를 넣어주면 increase의 type이 'counter/INCREASE'로 바뀌게 된다
// const INCREASE = 'counter/INCREASE' as const;
// const DECREASE = 'counter/DECREASE' as const;
// const INCREASE_BY = 'counter/INCREASE_BY' as const;

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// export const increaseBy = (diff: number) => ({
//   type: INCREASE_BY,
//   payload: diff, // 작업의 통일성을 위해 payload로 통일
// });

// ! typesafe-actions 라이브러리 설치 후
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_BY = 'counter/INCREASE_BY';

export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
export const increaseBy = createStandardAction(INCREASE_BY)<number>();

type CounterState = {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

// action 타입을 지정할 때
// 1. useReducer와 같이 그대로 action type을 나열하는 방법
// type CounterAction = 
//   | { type: 'counter/INCREASE'};

// 2. 'counter/INCREASE'가 반복되기때문에 typeof INCREASE로 작성하는 방법
// type CounterAction = 
//   | { type: typeof INCREASE };

// 3. ReturnType이라는 유틸타입을 통해 특정 함수의 결과물(리턴값)을 받아올 수 있다
// type CounterAction = 
//   | ReturnType<typeof increase>
//   | ReturnType<typeof decrease>
//   | ReturnType<typeof increaseBy>

// ! typesafe-actions 라이브러리 설치 후
const actions = { increase, decrease, increaseBy };
type CounterAction = ActionType<typeof actions>;

// reducer의 리턴타입도 정해준다
// function counter(state: CounterState = initialState, action: CounterAction): CounterState {
//   switch (action.type) {
//     case INCREASE:
//       return { count: state.count + 1 };
//     case DECREASE:
//       return { count: state.count - 1 };
//     case INCREASE_BY:
//       return { count: state.count + action.payload };
//     default:
//       return state;
//   }
// }

// ! typesafe-actions 라이브러리 설치 후
// reducer 구현 방식1 - object map으로 구현
// const counter = createReducer<CounterState, CounterAction>(initialState, {
//   [INCREASE]: (state) => ({ count: state.count + 1}),
//   [DECREASE]: (state) => ({ count: state.count - 1}),
//   [INCREASE_BY]: (state, action) => ({ count: state.count + action.payload })
// });

// reducer 구현 방식2 - 메서드 체이닝 방식
// action type 대신 action creator를 바로 넣어주어 사용
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, state => ({ count: state.count + 1 }))
  .handleAction(decrease, state => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload
  }));

export default counter;