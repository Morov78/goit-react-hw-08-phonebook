import { FaUserPlus } from 'react-icons/fa';

import { Box, Button, TextField } from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const schema = yup
  .object({
    email: yup.string().required('Required').email('Invalid format'),
    password: yup.string().required('Required'),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'morov78@ukr.net',
      password: '10101010',
    },
  });

  const handleForm = async data => {
    await dispatch(logIn(data));
    navigate('/contacts');
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
          type="password"
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
