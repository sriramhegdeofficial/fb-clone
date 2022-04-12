import { AppShell, Box } from '@mantine/core';

import Head from 'next/head';
import React, { FC } from 'react';

import LoginForm from '../components/LoginForm';
import LogoWrapper from '../components/LogoWrapper';
import axios from 'axios';

const index: FC = ({ children }) => {
  const loginHandler = async (values) => {
    const res = await axios.post('http://localhost:4000/register', {
      email: values.email,
      password: values.password,
    });
    console.log(res);
  };
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

export default index;
