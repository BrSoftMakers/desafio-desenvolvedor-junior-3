import React, { useEffect, useMemo, useState } from 'react';
import AppContext, { AppContextType } from './AppContext';
import { UserInfo } from '../service/types/userInfo.type';
import AuthService from '../service/AuthService';

type AppProviderTypes = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderTypes) {
  const authService = useMemo(() => new AuthService(), []);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<UserInfo | undefined>();

  const [orderBy, setOrderBy] = useState<'true' | 'false'>('true');

  const [refetch, setRefetch] = useState<number>(0);

  useEffect(() => {
    setUserInfo(authService.getUserInfo());
  }, [authService]);

  const context: AppContextType = {
    isLoading,
    setIsLoading,
    userInfo,
    orderBy,
    setOrderBy,
    refetch,
    setRefetch,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
