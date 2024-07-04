import { FC, useContext, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LoadingContext, { LoadingContextType } from '@/contexts/LoadingContext';

import MainLayout from '@/layouts/MainLayout';

import Table from '@/components/table/Table';

import { ClientsSerice } from '@/services/ClientsService';
import { selectClientsList } from '@/store/selectors/clientsSelectors';
import { setClients } from '@/store/actions/clientsActions';

const MainPage: FC = () => {
  const dispatch = useDispatch();

  const clientList = useSelector(selectClientsList);

  const { setIsLoading } = useContext<LoadingContextType>(LoadingContext);

  useEffect(() => {
    getClientList();
  }, []);

  const getClientList = async () => {
    setIsLoading(true);
    try {
      const { data } = await ClientsSerice.getAll();
      dispatch(setClients(data));
    } catch {}
    setIsLoading(false);
  };

  return (
    <MainLayout>
      {clientList.count > 0 ? (
        <Table clientList={clientList} />
      ) : (
        <div className="m-auto">No any client yet...</div>
      )}
    </MainLayout>
  );
};

export default MainPage;
