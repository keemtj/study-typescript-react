import { action, ActionType, createReducer, deprecated } from 'typesafe-actions';
const { createStandardAction } = deprecated;

const ADD_TODO = 'todos/Add_TODO' as const;
// const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
// const REMOVE_TODO = 'todos/REMOVE_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO';
const REMOVE_TODO = 'todos/REMOVE_TODO';

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

// type TodosAction = 
//   | ReturnType<typeof addTodo>
//   | ReturnType<typeof toggleTodo>
//   | ReturnType<typeof removeTodo>;

// ! typesafe-actions 라이브러리 설치 후
const actions = { addTodo, toggleTodo, removeTodo};
type TodosAction = ActionType<typeof actions>;

// 내보내는 이유는 컴포넌트에서 불러와 사용할 예정
export type Todo = {
  id: number;
  text: string;
  done: boolean;
}

type TodosState = Todo[];

const initialState: TodosState = [];

// function todos(state: TodosState = initialState, action: TodosAction): TodosState {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat({
//         id: action.payload.id,
//         text: action.payload.text,
//         done: false,
//       });
//     case TOGGLE_TODO:
//       return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done} : todo);
//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// ! typesafe-actions 라이브러리 설치 후
const todos = createReducer<TodosState, TodosAction>(initialState, {
  // [ADD_TODO]: (state, action) => state.concat({
  //   ...action.payload,
  //   done: false,
  // }),
  // concat() 대신에 spread operator 사용
  [ADD_TODO]: (state, action) => ([
    ...state, {...action.payload, done: false }
  ]),
  [TOGGLE_TODO]: (state, action) => state.map(
    todo => todo.id === action.payload
    ? { ...todo, done: !todo.done}
    : todo),
  [REMOVE_TODO]: (state, action) => state.filter(
    todo => todo.id !== action.payload
  ),
});

export default todos;