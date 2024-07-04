import { FC, ReactNode, useContext } from 'react';
import { ToastContainer } from 'react-toastify';

import LoadingContext, { LoadingContextType } from '@/contexts/LoadingContext';

import Navbar from '@/components/ui/Navbar';

import LoadingIcon from '@/icons/LoadingIcon';

interface Props {
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  const { isLoading } = useContext<LoadingContextType>(LoadingContext);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <ToastContainer />
      <Navbar />
      <div className="flex flex-col flex-1 w-full">
        <main className="h-full overflow-y-auto flex justify-center flex-col items-center">
          {isLoading ? (
            <LoadingIcon width="70" height="70" />
          ) : (
            <div className="container grid mx-auto mb-auto h-full">
              {children}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
