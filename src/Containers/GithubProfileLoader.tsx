import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GithubProfileInfo from '../Components/GithubProfileInfo';
import GithubUsernameForm from '../Components/GithubUsernameForm';
import { RootState } from '../Modules';
// import { getUserProfileThunk } from '../Modules/github';
import { getUserProfileAsync } from '../Modules/github';

function GithubProfileLoader() {
  const { data, loading, error } = useSelector((state: RootState) => state.github.userProfile);
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    // thunk
    // dispatch(getUserProfileThunk(username));
    // saga
    dispatch(getUserProfileAsync.request(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: 'center' }}>로딩중...</p>}
      {error && <p style={{ textAlign: 'center' }}>에러 발생!...</p>}
      {data && (
      <GithubProfileInfo
        name={data.name}
        thumbnail={data.avatar_url}
        bio={data.bio}
        blog={data.blog} />
      )}
    </>
  )
};

export default GithubProfileLoader;