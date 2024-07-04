import { createActionCreators } from 'immer-reducer';

import { ClientsReducer } from '@/store/reducers/clientsReducer';

import { ClientList } from '@/dtos/ClientList';
import { Client } from '@/dtos/Client';

export const clientsActions = createActionCreators(ClientsReducer);

export const setClients =
  (data: ClientList): any =>
  async (dispatch: (arg: any) => void) => {
    try {
      dispatch(clientsActions.setClients(data));
    } catch (e) {
      console.log(e);
    }
  };

export const addNewClient =
  (client: Client): any =>
  async (dispatch: (arg: any) => void) => {
    try {
      dispatch(clientsActions.addNewClient(client));
    } catch (e) {
      console.log(e);
    }
  };
