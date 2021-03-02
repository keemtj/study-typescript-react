import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
// import { call, put, takeEvery } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga/effects';
// import { GithubProfile } from "../../Api/github";
import { getUserProfile } from "../../Api/github";
import createAsyncSaga from "../../lib/createAsyncSaga";

// call: 특정 함수를 호출해주는 명령
// put: 특정 액션을 디스패치
// takeEvery: 특정 액션을 모니터링하고 있다가 우리가 원하는 액션이 들어오면 우리가 사전에 정한 saga함수를 호출해주는 작업을 실행함
// function* getUserProfileSaga(action: ReturnType<typeof getUserProfileAsync.request>) {
//   try {
//     const userProfile: GithubProfile = yield call(getUserProfile, action.payload);
//     yield put(getUserProfileAsync.success(userProfile));
//   } catch (e) {
//     yield put(getUserProfileAsync.failure(e));
//   }
// };


const getUserProfileSaga = createAsyncSaga(getUserProfileAsync, getUserProfile);

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
};