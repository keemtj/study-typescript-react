import { combineReducers } from 'redux';
import counter from './counter';

// rootReducer도 결국 함수
const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;