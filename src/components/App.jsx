import { Route, Routes } from 'react-router-dom';

import Contacts from 'pages/Contacts';
import AppBar from './AppBar/AppBar';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';

// import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

// const fluentTheme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: {
//           solidBg: '#1384e7',
//           solidHoverBg: '#106EBE',
//           solidActiveBg: '#005A9E',
//           solidDisabledBg: '#F3F2F1',
//           solidDisabledColor: '#A19F9D',
//         },
//         neutral: {
//           outlinedBg: '#fff',
//           outlinedColor: '#201F1E',
//           outlinedDisabledBg: '#F3F2F1',
//           outlinedDisabledColor: '#A19F9D',
//           outlinedDisabledBorder: '#C8C6C4',
//           outlinedBorder: '#8A8886',
//           outlinedHoverBg: '#F3F2F1',
//           outlinedHoverBorder: undefined,
//           outlinedActiveBg: '#EDEBE9',
//         },
//         focusVisible: '#323130',
//       },
//     },
//   },
//   focus: {
//     default: {
//       outlineOffset: -1,
//       outlineWidth: '1px',
//     },
//   },
//   fontFamily: {
//     body: '"Segoe UI Variable", var(--fluent-fontFamily-fallback)',
//   },
//   components: {
//     JoyButton: {
//       styleOverrides: {
//         root: ({ ownerState }) => ({
//           '--Button-iconOffsetStep': 0,
//           ...(ownerState.variant === 'solid' && {
//             '&.Mui-focusVisible, &:focus-visible': {
//               outlineOffset: '-3px',
//               outlineColor: '#fff',
//             },
//           }),
//           ...(ownerState.variant === 'outlined' && {
//             '&.Mui-focusVisible, &:focus-visible': {
//               outlineOffset: '-3px',
//             },
//           }),
//           ...(ownerState.size === 'md' && {
//             '--Icon-fontSize': '20px',
//             fontSize: '14px',
//             fontWeight: 600,
//             minHeight: '32px',
//             borderRadius: '2px',
//             paddingLeft: 20,
//             paddingRight: 20,
//           }),
//         }),
//       },
//     },
//   },
// });

export const App = () => {
  return (
    // <CssVarsProvider>
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
    // </CssVarsProvider>
  );
};
