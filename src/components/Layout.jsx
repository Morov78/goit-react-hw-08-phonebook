import { Box, Container, Stack } from '@mui/material';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css/animate.min.css';

import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

const warnToastId = 'toast-id';

const bounce = cssTransition({
  enter: 'animate__animated animate__bounceIn',
  exit: 'animate__animated animate__bounceOut',
});

const toastOptions = {
  transition: bounce,
  dragable: true,
  position: toast.POSITION.TOP_RIGHT,
  toastId: warnToastId,
  autoClose: 2000,
};

export const Layout = () => {
  const error = useSelector(state => state.auth.error);

  if (error) {
    toast.error(error, toastOptions);
  }

  return (
    <>
      <Box
        backgroundColor="#e5e5e5"
        fontSize="40px"
        minHeight="100vh"
        color="#010101"
      >
        <Container sx={{ width: '768px' }}>
          <Stack spacing={2}>
            <AppBar />
            <Container>
              <Suspense
                fallback={
                  <Stack alignItems="center">
                    <Loader />
                  </Stack>
                }
              >
                <Outlet />
              </Suspense>
            </Container>
          </Stack>
        </Container>
      </Box>
      <ToastContainer style={{ fontSize: '18px' }} />
    </>
  );
};
