import { AxiosError } from 'axios'; // axios에서 에러가 발생했을 때 사용하는 에러 객체의 타입
import { GithubProfile } from '../../Api/github';
import { createAsyncAction } from 'typesafe-actions';
// import { deprecated, createAsyncAction } from 'typesafe-actions';
// const { createStandardAction } = deprecated;

// action type
export const GET_USER_PROFILE = 'github/GET_USER_PROFILE';
export const GET_USER_PROFILE_SUCCESS = 'github/GET_USER_PROFILE_SUCCESS';
export const GET_USER_PROFILE_ERROR = 'github/GET_USER_PROFILE_ERROR';

// action creator
// ! createStandardAction
// export const getUserProfile = createStandardAction(GET_USER_PROFILE)();
// export const getUserProfileSuccess = createStandardAction(GET_USER_PROFILE_SUCCESS)<GithubProfile>();
// export const getUserProfileError = createStandardAction(GET_USER_PROFILE_ERROR)<AxiosError>();

// ! createAsyncAction
export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>(); // 각 액션의 페이로드에 대한 타입을 순서대로 넣어준다
// lib/createAsyncThunk.ts 작성하면서 undefined로 컴파일 에러 발생 -> any타입으로 변경
// redux-saga에서는 어떤 사용자 계정을 조회해야할지 알기 위해서 액션에 payload를 참고하기 위해 string으로 변경