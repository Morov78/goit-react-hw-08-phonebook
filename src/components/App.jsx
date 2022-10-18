import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Contacts from 'pages/Contacts';
import AppBar from './AppBar/AppBar';
import RegisterForm from 'pages/RegisterForm';
import Login from 'pages/LoginForm';
import Home from 'pages/Home';

import { refreshUser } from 'redux/auth/operations';

import { useAuth } from '../hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// Переробити AppBar в Loyaout

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <b>Refreshing user</b>;
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

          <Route
            path="contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />

          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterForm />}
              />
            }
          />

          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
};
