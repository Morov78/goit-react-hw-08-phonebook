import { Route, Routes } from 'react-router-dom';

import Contacts from 'pages/Contacts';
import AppBar from './AppBar/AppBar';
import RegisterForm from 'pages/RegisterForm';
import Login from 'pages/Login';
import Home from 'pages/Home';

// Переробити AppBar в Loyaout

export const App = () => {
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
