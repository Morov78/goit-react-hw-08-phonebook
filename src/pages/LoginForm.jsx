import { FaUserPlus } from 'react-icons/fa';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { useState } from 'react';

const schema = yup
  .object({
    email: yup.string().required('Required').email('Invalid format'),
    password: yup.string().required('Required'),
  })
  .required();

const Login = () => {
  const [password, setPassword] = useState('');
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

  // useEffect(() => {
  //   console.log({ ...register('password') });
  // });

  const handleChange = event => {
    setPassword(event.currentTarget.value);
    // console.log({ ...register('password') });
  };

  const handleClickShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleForm = async data => {
    setPassword('');
    await dispatch(logIn(data));
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

        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" required>
            Password
          </InputLabel>
          <OutlinedInput
            {...register('password')}
            id="outlined-adornment-password"
            label="password"
            type={isShowPassword ? 'text' : 'password'}
            value={password}
            onChange={handleChange}
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
