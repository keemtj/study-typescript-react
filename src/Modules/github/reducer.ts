import { createReducer } from 'typesafe-actions';
import { asyncState, createAsyncReducer } from '../../lib/reducerUtils';
// import { GET_USER_PROFILE, GET_USER_PROFILE_ERROR, GET_USER_PROFILE_SUCCESS } from './actions';
import { getUserProfileAsync } from './actions';
import { GithubAction, GithubState } from './types';

// initialState
const initialState: GithubState = {
  // userProfile: {
  //   loading: false,
  //   error: null,
  //   data: null,
  // },
  userProfile: asyncState.initial(),
};

// const github = createReducer<GithubState, GithubAction>(initialState, {
//   [GET_USER_PROFILE]: (state) => ({
//     ...state,
//     // userProfile: {
//     //   loading: true,
//     //   error: null,
//     //   data: null
//     // },
//     userProfile: asyncState.load(),
//     // 기존 상태를 유지하고 싶을 때
//     // userProfile: asyncState.load(state.userProfile.data)
//   }),
//   [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//     ...state,
//     // userProfile: {
//     //   loading: false,
//     //   error: null,
//     //   data: action.payload,
//     // },
//     userProfile: asyncState.success(action.payload),
//   }),
//   [GET_USER_PROFILE_ERROR]: (state, action) => ({
//     ...state,
//     // userProfile: {
//     //   loading: false,
//     //   error: action.payload,
//     //   data: null,
//     // },
//     userProfile: asyncState.error(action.payload),
//   }),
// });

const github = createReducer<GithubState, GithubAction>(initialState)
  .handleAction(
    [
    getUserProfileAsync.request,
    getUserProfileAsync.success,
    getUserProfileAsync.failure
    ],
    createAsyncReducer(getUserProfileAsync, 'userProfile'));

export default github;