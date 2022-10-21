import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css/animate.min.css';

import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from 'redux/contacts/operations';

import { Box, Button, TextField } from '@mui/material';
import { Stack } from '@mui/system';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'yup-phone';
import { useContacts } from 'hooks/useContacts';

const schema = yup
  .object({
    name: yup.string().required('Required'),
    number: yup
      .string('Must be a valid phone number')
      .phone('UA')
      .required('Required'),
  })
  .required();

export default function ContactForm({ onSubmit }) {
  const dispatch = useDispatch();
  const { contacts } = useContacts();

  const inputNameRef = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      number: '',
    },
  });

  const handleForm = data => {
    let { name } = data;

    name = name[0].toUpperCase() + name.substring(1);

    if (contacts.find(contact => contact?.name === name)) {
      const warnToastId = 'toast-id';
      const bounce = cssTransition({
        enter: 'animate__animated animate__bounceIn',
        exit: 'animate__animated animate__bounceOut',
      });

      toast.warn(`${name} is already in contacts`, {
        transition: bounce,
        dragable: true,
        position: toast.POSITION.TOP_RIGHT,
        toastId: warnToastId,
        autoClose: 2000,
      });
      return;
    }

    dispatch(addContact({ ...data, name }));

    reset();
    inputNameRef.current.focus();
  };

  return (
    <>
      <Box
        component="form"
        autoComplete="off"
        noValidate
        maxWidth="500px"
        padding="16px 20px"
        border="2px solid #1384e7"
        align="center"
        marginBottom="16px"
        onSubmit={handleSubmit(handleForm)}
      >
        <Stack direction="row" gap="10px" justifyContent="space-between">
          <TextField
            {...register('name')}
            id="name"
            label="Name"
            variant="outlined"
            required
            size="small"
            inputRef={inputNameRef}
            error={errors.name ? true : false}
            helperText={errors.name?.message || ' '}
          />

          <TextField
            {...register('number')}
            id="number"
            label="Number"
            variant="outlined"
            required
            size="small"
            placeholder="0661234567"
            error={errors.number ? true : false}
            helperText={errors.number ? 'Must be a valid phone number' : ' '}
          />
        </Stack>

        <Button variant="contained" size="large" color="primary" type="submit">
          Add contact
        </Button>
      </Box>
      <ToastContainer style={{ fontSize: '18px' }} />
    </>
  );
}
