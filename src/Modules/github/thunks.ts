import { Dispatch } from 'react'; // 꼼수 -> ThunkAction을 사용
import { getUserProfile } from '../../Api/github';
import { getUserProfileAsync } from './actions';
import { GithubAction } from './types';
// import { ThunkAction } from 'redux-thunk';
// import { RootState } from '..'; // getState()

// ThunkAction type
// R: thunk함수가 return하는 return type
// S: root state
// E: extra argument -> react-router history할 때 thunk.withExtraArgument에 대한 type
// A: actions type

// R: 따로 리턴하는 것이 없기 때문에 void
// E: 현재는 사용하지 않기 때문에 null
// export function getUsereProfileThunk(username: string): ThunkAction<void, RootState, null, GithubAction> {
export function getUserProfileThunk(username: string) {
  // return async (dispatch, getState) => {
  //   const state = getState();
  // }
  // return async (dispatch: Dispatch, getState: () => RootState) => {
  //   const state = getState();
  // }; // 꼼수, 현재 코드에서는 getState는 안쓰기 때문에 생략
  return async (dispatch: Dispatch<GithubAction>) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e) {
      dispatch(failure(e));
    }
  };
};