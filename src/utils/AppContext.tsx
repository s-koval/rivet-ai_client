import React, { useMemo, useState } from 'react';

import LoadingContext from '@/contexts/LoadingContext';

interface Props {
  children: React.ReactNode;
}

const AppContext: React.FC<Props> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadingProviderValue = useMemo(
    () => ({ isLoading, setIsLoading }),
    [isLoading, setIsLoading],
  );

  return (
    <LoadingContext.Provider value={loadingProviderValue}>
      {children}
    </LoadingContext.Provider>
  );
};

export default AppContext;
