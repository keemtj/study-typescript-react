import { createReducer } from 'typesafe-actions';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './actions';
import { TodosState, TodosAction } from './types';

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