import React, { Dispatch, SetStateAction } from 'react';

export type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const contextState: LoadingContextType = {
  isLoading: true,
  setIsLoading: () => {},
};

const LoadingContext = React.createContext<LoadingContextType>(contextState);

export default LoadingContext;
