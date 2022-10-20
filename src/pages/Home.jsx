import { Typography } from '@mui/material';
import { Stack } from '@mui/system';

const Home = () => {
  return (
    // <Container align="center" sx={{ height: '100%' }}>
    //   <h1>Manager your phoneBook </h1>
    // </Container>
    <Stack
      align="center"
      justifyContent="center"
      sx={{ height: 'calc(100vh - 102px - 16px)' }}
    >
      <Typography variant="h1" gutterBottom>
        Manager your phoneBook
      </Typography>
      {/* <h1>Manager your phoneBook </h1> */}
    </Stack>
  );
};
export default Home;
