import { createReducerFunction, ImmerReducer } from 'immer-reducer';

import { ClientList } from '@/dtos/ClientList';
import { Client } from '@/dtos/Client';

export interface ClientsState {
  clients: ClientList;
}

const initialState: ClientsState = {
  clients: { count: 0, data: [] },
};

export class ClientsReducer extends ImmerReducer<ClientsState> {
  setClients(data: ClientList) {
    this.draftState.clients = data;
  }

  addNewClient(client: Client) {
    const tempClients = this.draftState.clients;
    tempClients.count += 1;
    tempClients.data.push(client);
    this.draftState.clients = tempClients;
  }
}

export default createReducerFunction(ClientsReducer, initialState);
