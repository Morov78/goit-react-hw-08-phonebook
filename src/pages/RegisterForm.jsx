import { FaUserPlus } from 'react-icons/fa';

import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { registerUser } from '../redux/auth/operations';

const schema = yup
  .object({
    name: yup.string().required('Required'),
    email: yup
      .string()
      .required('Required')
      .email('Invalid format (example@mail.com)'),
    password: yup.string().required('Required').min(6, 'minimum 6 symbol'),
  })
  .required();

const RegisterForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: 'Morov',
      email: 'morov78@ukr.net',
      password: '',
    },
  });

  const handleForm = data => {
    console.log(data);
    dispatch(registerUser(data));

    // reset();
  };

  return (
    <>
      <h2>Registration</h2>
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
          {...register('name')}
          id="name"
          label="Name"
          required
          error={errors.name ? true : false}
          helperText={errors.name?.message}
        />

        <TextField
          {...register('email')}
          id="email"
          label="Email"
          placeholder="example@mail.com"
          variant="outlined"
          required
          // aria-invalid={errors.email ? 'true' : 'false'}
          error={errors.email ? true : false}
          helperText={errors.email?.message || 'example@mail.com'}
        />

        <TextField
          {...register('password')}
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          autoComplete="off"
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
export default RegisterForm;
