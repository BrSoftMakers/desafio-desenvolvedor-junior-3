import React from 'react';

export interface AppContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | undefined;
}

const AppContext = React.createContext<AppContextType>({
  isLoading: false,
  setIsLoading: undefined,
});

export default AppContext;
