import { useForm } from '@mantine/form';
import {
  PasswordInput,
  Group,
  Button,
  Box,
  TextInput,
  Checkbox,
} from '@mantine/core';
import Link from 'next/link';
import { theme } from '../theme';

function LoginForm() {
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) =>
        value.length < 6 ? 'Password must be more 6 characters above' : null,
      termsOfService: (value) =>
        value === false ? 'Please check the terms of service' : null,
    },
  });

  return (
    <Box
      sx={{
        boxShadow: '-1px 0px 38px -10px rgba(0,0,0,0.75)',
        padding: '20px',
        borderRadius: '10px',
        marginTop: '3rem',
        width: '85%',

        '@media (min-width: 992px)': {
          width: '400px',
        },
      }}
      mx="auto"
    >
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          size="lg"
          label=" "
          placeholder="Email address"
          {...form.getInputProps('email')}
          onBlur={() => form.validateField('email')}
        />

        <PasswordInput
          styles={{
            rightSection: { display: 'none', width: '0px' },
            innerInput: { width: '95%' },
          }}
          size="lg"
          label=" "
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <Box
          sx={(theme) => ({
            textAlign: 'center',
            marginTop: '20px',
            color: theme.colors.primary[0],
          })}
        >
          <Link href="#">
            <a
              style={{
                marginTop: '',
              }}
            >
              Forgotten password?
            </a>
          </Link>
        </Box>

        <Group position="right" mt="xl">
          <Button fullWidth size="lg" type="submit">
            Submit
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default LoginForm;
