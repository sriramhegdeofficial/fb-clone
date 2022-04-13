import React from 'react';
import { useSession } from '../hooks/useSession';
import { useRouter } from 'next/router';

const Feed = () => {
  const router = useRouter();
  const isAuth = useSession();

  React.useEffect(() => {
    if (!isAuth) {
      router.push('/');
    }
  });

  if (!isAuth) {
    return <div></div>;
  }

  return <div>feed</div>;
};

export default Feed;
