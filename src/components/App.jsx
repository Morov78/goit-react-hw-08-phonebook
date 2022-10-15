import { Route, Routes } from 'react-router-dom';

import Contacts from 'pages/Contacts';
import AppBar from './AppBar/AppBar';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
// import AppBar from './AppBar/AppBar';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      {/* <AppBar /> */}
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
};
