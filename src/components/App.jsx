import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Contacts from 'pages/Contacts';
import AppBar from './AppBar/AppBar';
import RegisterForm from 'pages/RegisterForm';
import Login from 'pages/LoginForm';
import Home from 'pages/Home';

import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

// Переробити AppBar в Loyaout

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return;
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e5e5e5',
        flexDirection: 'column',
      }}
    >
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};
