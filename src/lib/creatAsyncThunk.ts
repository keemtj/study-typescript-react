import { Dispatch } from 'redux';
import { AsyncActionCreatorBuilder } from 'typesafe-actions';

type AnyAsyncActionCreator = AsyncActionCreatorBuilder<any, any, any>;
type AnyProimseCreator = (...params: any[]) => Promise<any>;

export default function createAsyncThunk<
  A extends AnyAsyncActionCreator,
  F extends AnyProimseCreator
>(asyncActionCreator: A, promiseCreator: F) {
  type Params = Parameters<F>;
  return function thunk(...params: Params) {
    console.log('input값:', arguments[0]);
    return async (dispatch: Dispatch) => {
      const { request, success, failure } = asyncActionCreator;
      console.log('요청중');
      dispatch(request());
      try {
        const result = await promiseCreator(...params);
        console.log('성공!');
        dispatch(success(result));
      } catch (e) {
        console.log('실패...');
        dispatch(failure(e));
      }
    };
  };
};