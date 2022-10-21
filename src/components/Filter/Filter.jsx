import {
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  OutlinedInput,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { setSort } from 'redux/contacts/sortSlice';

import {
  FcAlphabeticalSortingAz,
  FcAlphabeticalSortingZa,
} from 'react-icons/fc';
import { RiCloseCircleLine } from 'react-icons/ri';

import { CustomIcon } from './Filter.styled';
import { useContacts } from 'hooks/useContacts';

export default function Filter() {
  const dispatch = useDispatch();
  const { filter } = useContacts();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  const handleSortChange = event => {
    dispatch(setSort(event.currentTarget.value));
  };

  return (
    <Stack direction="row" justifyContent="space-between" width="100%">
      <FormControl variant="outlined" size="small" sx={{ maxWidth: '260px' }}>
        <InputLabel htmlFor="input-filter">Find contacts by name</InputLabel>
        <OutlinedInput
          id="input-filter"
          label="Find contacts by name"
          value={filter}
          onChange={handleChange}
        />
      </FormControl>
      <FormControl>
        <Stack direction="row" alignItems="center" spacing={2}>
          <FormLabel id="sorted-contacts">Sorted:</FormLabel>
          <RadioGroup
            row
            aria-labelledby="sorted-contacts"
            defaultValue="nosort"
            name="radio-button-group"
            onChange={handleSortChange}
          >
            <Stack direction="row" spacing={1}>
              <FormControlLabel
                value="nosort"
                control={<Radio size="small" />}
                label={
                  <CustomIcon>
                    <RiCloseCircleLine size="2em" />
                  </CustomIcon>
                }
              />

              <FormControlLabel
                value="asc"
                control={<Radio size="small" />}
                label={
                  <CustomIcon>
                    <FcAlphabeticalSortingAz size="2em" />
                  </CustomIcon>
                }
              />

              <FormControlLabel
                value="desc"
                control={<Radio size="small" />}
                sx={{ display: 'flex', alignItems: 'center' }}
                label={
                  <CustomIcon>
                    <FcAlphabeticalSortingZa size="2em" />
                  </CustomIcon>
                }
              />
            </Stack>
          </RadioGroup>
        </Stack>
      </FormControl>
    </Stack>
  );
}
