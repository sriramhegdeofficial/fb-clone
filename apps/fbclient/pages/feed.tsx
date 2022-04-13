import React from 'react';
import { useSession } from '../hooks/useSession';
import { useRouter } from 'next/router';
import { Button } from '@mantine/core';

const Feed = () => {
  const router = useRouter();
  const [isAuth, setIsAuth, token, setIsToken, user, setUser] = useSession();

  React.useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  });

  const logoutHandler = async () => {
    await setIsAuth(false);
    await setIsToken(null);
    await setUser(null);
    router.push('/');
  };

  if (!isAuth) {
    return <div></div>;
  }

  return <Button onClick={logoutHandler}>Logout</Button>;
};

export default Feed;
