import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filter;
export const selectSortMethod = state => state.sortMethod;

export const selectSortedContacts = createSelector(
  [selectContacts, selectSortMethod],
  (contacts, sortMethod) => {
    switch (sortMethod) {
      case 'asc':
        return [...contacts].sort((a, b) => a.name.localeCompare(b.name));
      case 'desc':
        return [...contacts].sort((a, b) => b.name.localeCompare(a.name));

      default:
        return contacts;
    }
  }
);

export const selectFilteredContacts = createSelector(
  [selectSortedContacts, selectFilter],
  (selectSortedContacts, filter) => {
    const filteredContacts = !filter
      ? selectSortedContacts
      : selectSortedContacts.filter(({ name }) =>
          name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
        );

    return filteredContacts;
  }
);
