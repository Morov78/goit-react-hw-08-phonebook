import { FaUserPlus } from 'react-icons/fa';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { registerUser } from '../redux/auth/operations';

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
// import { Box } from '@mui/system';

import { useState } from 'react';
import { StyledLink } from 'components/StyledLink';

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
  const [isShowPassword, setIsShowPassword] = useState(false);
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

  const handleForm = async data => {
    dispatch(registerUser(data));

    reset();
  };

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container align="center">
      <Typography variant="h2" gutterBottom>
        Registration
      </Typography>

      <Box
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit(handleForm)}
        sx={{
          width: '300px',
          border: '2px solid #1384e7',
          padding: '30px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <TextField
          {...register('name')}
          id="name"
          label="Name"
          required
          error={errors.name ? true : false}
          helperText={errors.name?.message || ' '}
        />

        <TextField
          {...register('email')}
          id="email"
          label="Email"
          placeholder="example@mail.com"
          variant="outlined"
          required
          error={errors.email ? true : false}
          helperText={errors.email?.message || 'example@mail.com'}
        />

        <FormControl variant="outlined">
          <InputLabel
            htmlFor="outlined-adornment-password"
            required
            error={errors.password ? true : false}
          >
            Password
          </InputLabel>
          <OutlinedInput
            {...register('password')}
            id="outlined-adornment-password"
            label="Password"
            type={isShowPassword ? 'text' : 'password'}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {isShowPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                </IconButton>
              </InputAdornment>
            }
          ></OutlinedInput>
          <FormHelperText
            error={errors.password ? true : false}
            id="outlined-adornment-password"
          >
            {errors.password?.message || ' '}
          </FormHelperText>
        </FormControl>

        <Button
          variant="contained"
          size="large"
          endIcon={<FaUserPlus style={{ marginLeft: '10px' }} />}
          color="primary"
          type="submit"
        >
          Add User
        </Button>

        <Typography
          variant="caption"
          display="flex"
          justifyContent="center"
          gap="5px"
        >
          Already have an account?
          <StyledLink to="/login">Sign in</StyledLink>
        </Typography>
      </Box>
    </Container>
  );
};
export default RegisterForm;
