import { Stack } from '@mui/system';
import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Stack direction="row" spacing={3}>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="contacts">Contacts</StyledLink>
      </Stack>
    </>
  );
};
