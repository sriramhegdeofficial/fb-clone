import { useForm, zodResolver } from '@mantine/form';
import {
  PasswordInput,
  Group,
  Button,
  Box,
  TextInput,
  Checkbox,
  Divider,
} from '@mantine/core';
import Link from 'next/link';
import { theme } from '../theme';
import React, { FC } from 'react';
import { z } from 'zod';

interface RegisterType {
  email: string;
  password: string;
}

interface loginFormTypes {
  loginHandler: (values: RegisterType) => void;
}

const LoginForm: FC<loginFormTypes> = ({ loginHandler }) => {
  const emailRef = React.useRef(null);

  const schema = z.object({
    email: z
      .string()
      .email({ message: 'Invalid email' })
      .nonempty(`Email can't be empty`),
    password: z
      .string()
      .min(6, 'Password must be minimum 6 characters')
      .nonempty("Password can't be empty"),
  });

  const form = useForm({
    schema: zodResolver(schema),
    initialValues: {
      email: '',
      password: '',
    },
  });

  React.useEffect(() => {
    emailRef.current.focus();
  }, []);

  return (
    <Box
      sx={{
        boxShadow: '-1px 0px 18px -10px rgba(0,0,0,0.75)',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '3rem',
        width: '85%',
        maxWidth: '400px',
        '@media (min-width: 992px)': {
          width: '400px',
        },
      }}
      mx="auto"
    >
      <form onSubmit={form.onSubmit((values) => loginHandler(values))}>
        <TextInput
          id="email input"
          size="lg"
          placeholder="Email address"
          {...form.getInputProps('email')}
          value={form.values.email}
          onBlur={() => form.validateField('email')}
          styles={{
            error: {
              fontSize: '0.7rem',
            },
          }}
          onChange={(event) =>
            form.setFieldValue('email', event.currentTarget.value)
          }
          ref={emailRef}
        />

        <PasswordInput
          id="password input"
          styles={{
            rightSection: { display: 'none', width: '0px' },
            innerInput: { width: '95%' },
            error: {
              fontSize: '0.7rem',
            },
          }}
          sx={(theme) => ({
            margin: '1.6rem 0px',
          })}
          value={form.values.password}
          size="lg"
          placeholder="Password"
          {...form.getInputProps('password')}
          onBlur={() => form.validateField('password')}
          onChange={(event) =>
            form.setFieldValue('password', event.currentTarget.value)
          }
        />

        <Group mt="xl">
          <Button fullWidth size="lg" type="submit">
            Log In
          </Button>
        </Group>
        <Box
          sx={(theme) => ({
            textAlign: 'center',
            marginTop: '20px',
            background: 'none',
            color: theme.colors.primary[0],
          })}
        >
          <Link href="/feed">
            <Button
              sx={(theme) => ({
                color: theme.colors.primary[0],
                fontWeight: 400,
              })}
              component="a"
              variant="white"
            >
              Forgotten password?
            </Button>
          </Link>
        </Box>
        <Divider my="sm" />
        <Group position="center" mt="xl">
          <Button
            size="lg"
            styles={(theme) => ({
              root: {
                background: theme.colors.primary[3],

                '&:hover': {
                  background: theme.colors.primary[3],
                },
              },
            })}
          >
            Create New Account
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default LoginForm;
