import { axiosInstance } from '@/interceptors/axiosInstance';

import { MessageAction } from '@/dtos/MessageAction';
import { ClientList } from '@/dtos/ClientList';
import { ClientBase } from '@/dtos/ClientBase';

export class ClientsSerice {
  public static getAll = async (pageNo?: number, perPage?: number) =>
    await axiosInstance.get<ClientList>('/clients', {
      params: {
        pageNo,
        perPage,
      },
    });

  public static create = async (input: ClientBase) =>
    await axiosInstance.post<MessageAction>('/clients', input);

  public static delete = async (id: string) =>
    await axiosInstance.delete<MessageAction>(`/clients/${id}`);
}
