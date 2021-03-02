import { combineReducers } from 'redux';
import counter from './counter';
import github, { githubSaga } from './github';
import todos from './todos';
import { all } from 'redux-saga/effects';

// rootReducer도 결국 함수
const rootReducer = combineReducers({
  counter,
  todos,
  github,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
  yield all([githubSaga()]);
};