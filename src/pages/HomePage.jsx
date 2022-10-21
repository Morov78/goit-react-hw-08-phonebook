import { Stack, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Stack
      align="center"
      justifyContent="center"
      sx={{ height: 'calc(100vh - 102px - 16px)' }}
    >
      <Typography variant="h1" gutterBottom>
        Manager your phoneBook
      </Typography>
    </Stack>
  );
};

export default HomePage;
