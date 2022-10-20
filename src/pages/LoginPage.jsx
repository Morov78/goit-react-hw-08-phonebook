import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';
import { StyledLink } from 'components/StyledLink';

const schema = yup
  .object({
    email: yup.string().required('Required').email('Invalid format'),
    password: yup.string().required('Required'),
  })
  .required();

const Login = () => {
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
      email: 'morov78@ukr.net',
      password: '',
    },
  });

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleForm = data => {
    dispatch(logIn(data));
    reset();
  };

  return (
    <Container align="center">
      <Typography variant="h2" gutterBottom>
        Login
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
          {...register('email')}
          id="email"
          label="Email"
          placeholder="example@mail.com"
          variant="outlined"
          required
          error={errors.email ? true : false}
          helperText={errors.email?.message || ' '}
        />

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" required>
            Password
          </InputLabel>
          <OutlinedInput
            {...register('password')}
            id="outlined-adornment-password"
            label="password"
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
        </FormControl>

        <Button variant="contained" size="large" color="primary" type="submit">
          Log In
        </Button>

        <Typography
          variant="caption"
          display="flex"
          justifyContent="center"
          gap="5px"
        >
          Not have an account?
          <StyledLink to="/register">Register</StyledLink>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
