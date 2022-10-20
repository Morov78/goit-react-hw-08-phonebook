import { useSelector } from 'react-redux';
import { Stack } from '@mui/system';

import { selectIsLogged } from 'redux/auth/selectors';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';

import { StyledLink, StyledLogo, StyledStack } from './AppBar.styled';

import logo from '../../Images/logo.png';

const AppBar = () => {
  const isLogged = useSelector(selectIsLogged);

  return (
    <StyledStack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <StyledLogo to="/" end>
        <img src={logo} alt="logo" />
      </StyledLogo>
      <Stack direction="row" spacing={3}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="contacts">Contacts</StyledLink>
      </Stack>

      <Stack direction="row" spacing={3}>
        {isLogged ? <UserMenu /> : <AuthNav />}
      </Stack>
    </StyledStack>
  );
};

export default AppBar;
