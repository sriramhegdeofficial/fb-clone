import { Image, Text, Box } from '@mantine/core';

function LogoWrapper() {
  return (
    <>
      <Box
        sx={{
          margin: '0px auto',
          marginTop: '3rem',

          width: '85%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          '@media (min-width: 992px)': {
            width: '500px',
            marginTop: '0px',
          },
        }}
      >
        <Image
          sx={{
            width: '330px',

            height: 'auto',
            '@media (min-width: 576px)': {
              fontSize: '1.3rem',
              width: '430px',
            },
            '@media (min-width: 768px)': {
              fontSize: '1.6rem',
              width: '520px',
            },

            '@media (min-width: 992px)': {
              position: 'relative',
              left: '-2.55rem',
            },
          }}
          src="/logo.svg"
          alt="With custom placeholder"
          placeholder={
            <Text align="center">This image contained the meaning of life</Text>
          }
        />
        <Text
          sx={(theme) => ({
            textAlign: 'center',
            fontSize: '1rem',
            width: '300px',
            fontWeight: 'bold',
            opacity: '0.7',
            lineHeight: '2rem',
            '@media (min-width: 576px)': {
              fontSize: '1.3rem',
              width: '430px',
            },
            '@media (min-width: 768px)': {
              fontSize: '1.6rem',
              width: '520px',
            },
            '@media (min-width: 992px)': {
              fontSize: '1.6rem',
              width: '100%',

              textAlign: 'left',
            },
          })}
        >
          Facebook helps you connect and share with the people in your life.
        </Text>
      </Box>
    </>
  );
}

export default LogoWrapper;
