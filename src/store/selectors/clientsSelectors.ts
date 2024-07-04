import { Selector, createSelector } from 'reselect';

import { State } from '@/store';

import { ClientList } from '@/dtos/ClientList';

const clientsState = (state: State) => state.clients;

export const selectClientsList: Selector<State, ClientList> = createSelector(
  clientsState,
  (state) => state.clients,
);
