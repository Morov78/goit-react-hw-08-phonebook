import { FaUserPlus } from 'react-icons/fa';

import { Box, Button, TextField } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    email: yup.string().required('Required').email('Invalid format'),
    password: yup.string().required('Required'),
  })
  .required();

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleForm = data => {
    console.log('login=', data);
    reset();
  };

  return (
    <>
      <h2 style={{ fontSize: '1em' }}>Login</h2>
      <Box
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(handleForm)}
        sx={{
          border: '2px solid #1384e7',
          padding: '30px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px',
        }}
      >
        <TextField
          {...register('email')}
          id="email"
          label="Email"
          placeholder="example@mail.com"
          variant="outlined"
          required
          // aria-invalid={errors.email ? 'true' : 'false'}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
        />

        <TextField
          {...register('password')}
          id="password"
          label="Password"
          variant="outlined"
          required
          error={errors.password ? true : false}
          helperText={errors.password?.message}
        />

        <Button
          variant="contained"
          size="large"
          endIcon={<FaUserPlus style={{ marginLeft: '10px' }} />}
          color="primary"
          type="submit"
        >
          Add User
        </Button>
      </Box>
    </>
  );
};

export default Login;
