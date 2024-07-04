import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';

import { addNewClient } from '@/store/actions/clientsActions';

import SubmitButton from '@/components/ui/SubmitButton';
import Input from '@/components/ui/Input';

import validation from '@/constants/validation';

import { ClientsSerice } from '@/services/ClientsService';

import { ClientBase } from '@/dtos/ClientBase';
import { Client } from '@/dtos/Client';

const ClientForm: FC = () => {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientBase>({
    mode: 'onChange',
  });

  const onSubmit = async (input: ClientBase) => {
    setIsLoading(true);
    try {
      const { data } = await ClientsSerice.create(input);

      const newClientData: Client = {
        id: data.id,
        ...input,
      };

      dispatch(addNewClient(newClientData));

      toast(data.message);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (!error.response) return;

        toast.error(error.response.data.message);
      }
    }
    setIsLoading(false);
  };

  const refresh = () => {
    window.location.reload();
  };

  return (
    <div className="px-6 my-6">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="First name"
          placeholder="John"
          register={register('firstName', validation.name)}
          error={errors.firstName}
        />
        <Input
          label="Last name"
          placeholder="Doe"
          register={register('lastName', validation.name)}
          error={errors.lastName}
        />
        <Input
          label="Email"
          placeholder="john.doe@gmail.com"
          register={register('email', validation.email)}
          error={errors.email}
        />

        <SubmitButton title="Create client" isLoading={isLoading} />

        <hr className="my-6" />

        <button
          type="button"
          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray"
          onClick={refresh}
        >
          Refresh?
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
