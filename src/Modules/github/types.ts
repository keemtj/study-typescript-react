import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { GithubProfile } from '../../Api/github';
import { AsyncState } from '../../lib/reducerUtils';

export type GithubAction = ActionType<typeof actions>;
export type GithubState = {
  // userProfile: {
  //   loading: boolean;
  //   error: Error | null;
  //   data: GithubProfile | null;
  // };
  userProfile: AsyncState<GithubProfile, Error>;
};