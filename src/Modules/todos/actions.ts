import { deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

export const ADD_TODO = 'todos/Add_TODO' as const;
// const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
// const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
export const TOGGLE_TODO = 'todos/TOGGLE_TODO';
export const REMOVE_TODO = 'todos/REMOVE_TODO';

let nextId = 1;

// nextId라는 값이 parameter로 받아오는 값이 아니기 때문에
// createStandardAction이 아닌 craeteAction을 사용한다
// createStandardAction만 사용하려면 아래의  addTodo는 그대로 둔채 작성한다
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: {
    id: nextId++,
    text,
  }
});

// export const toggleTodo =  (id: number) => ({
//   type: TOGGLE_TODO,
//   payload: id
// });

// export const removeTodo =  (id: number) => ({
//   type: REMOVE_TODO,
//   payload: id
// });

// ! typesafe-actions 라이브러리 설치 후
export const toggleTodo = createStandardAction(TOGGLE_TODO)<number>();
export const removeTodo = createStandardAction(REMOVE_TODO)<number>();