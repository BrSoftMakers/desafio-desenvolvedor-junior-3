import React, { useState } from 'react';
import AppContext, { AppContextType } from './AppContext';

type AppProviderTypes = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderTypes) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const context: AppContextType = {
    isLoading,
    setIsLoading,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
