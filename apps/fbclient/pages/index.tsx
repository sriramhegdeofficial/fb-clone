import { AppShell, Box } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import axios from 'axios';

import Head from 'next/head';
import React from 'react';
import LoginForm from '../components/LoginForm';
import LogoWrapper from '../components/LogoWrapper';
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import { useSession } from '../hooks/useSession';

const Index = () => {
  const [user, setUser] = useLocalStorage({ key: 'user', defaultValue: null });
  const [token, setToken] = useLocalStorage({
    key: 'token',
    defaultValue: null,
  });
  const isAuth = useSession();
  const router = useRouter();

  const loginHandler = async (values) => {
    const res = await axios.post('http://localhost:4000/login', {
      email: values.email,
      password: values.password,
    });
    setToken(res.data.accessToken);
    await setUser(jwt.decode(res.data.accessToken).payload);
    console.log(user);
    router.push('/feed');
  };

  React.useEffect(() => {
    if (isAuth) {
      router.push('/feed');
    }
  });

  if (isAuth) {
    return <div></div>;
  }

  return (
    <>
      <Head>
        <title>Welcome | Facebook</title>
      </Head>
      <AppShell
        styles={(theme) => ({
          main: {
            ...theme.other.appShellDefaultStyles,
            background: theme.colors.primary[1],
            padding: '0px',
          },
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',

            minHeight: '100vh',
            width: '100%',
            '@media (min-width: 992px)': {
              flexDirection: 'row',

              alignItems: 'center',
            },
            '@media (min-width: 1200px)': {
              flexDirection: 'row',
              padding: '0px 2rem',
              alignItems: 'center',
            },
          })}
        >
          <LogoWrapper />
          <LoginForm loginHandler={loginHandler} />
        </Box>
      </AppShell>
    </>
  );
};

export default Index;
