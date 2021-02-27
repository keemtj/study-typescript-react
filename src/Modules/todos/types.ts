import  { ActionType } from 'typesafe-actions';
import * as actions from './actions';

// type TodosAction = 
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof toggleTodo>
//   | ReturnType<typeof removeTodo>;

// ! typesafe-actions 라이브러리 설치 후
// const actions = { addTodo, toggleTodo, removeTodo};
// actions.ts 디렉터리에서 actions를 import해서 적용
export type TodosAction = ActionType<typeof actions>;

// 내보내는 이유는 컴포넌트에서 불러와 사용할 예정
export type Todo = {
  id: number;
  text: string;
  done: boolean;
}

export type TodosState = Todo[];