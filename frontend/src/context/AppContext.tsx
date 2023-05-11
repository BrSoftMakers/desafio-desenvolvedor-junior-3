import React from 'react';
import { UserInfo } from '../service/types/userInfo.type';

export interface AppContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  userInfo: UserInfo | undefined;
  orderBy: 'true' | 'false';
  setOrderBy:
    | React.Dispatch<React.SetStateAction<'true' | 'false'>>
    | undefined;
  refetch: number;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
}

const AppContext = React.createContext<AppContextType>({
  isLoading: false,
  setIsLoading: undefined,
  userInfo: undefined,
  setOrderBy: undefined,
  orderBy: 'true' || 'false',
  refetch: 0,
  setRefetch: () => 0,
});

export default AppContext;
