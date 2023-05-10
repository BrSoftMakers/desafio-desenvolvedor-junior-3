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
}

const AppContext = React.createContext<AppContextType>({
  isLoading: false,
  setIsLoading: undefined,
  userInfo: undefined,
  setOrderBy: undefined,
  orderBy: 'true' || 'false',
});

export default AppContext;
