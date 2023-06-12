import React from 'react';
import { UserInfo } from '../service/types/userInfo.type';
import { PostResponseType } from '../service/types/postResponse.type';

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
  windowSize: {
    width: number | undefined;
    height: number | undefined;
  };
  posts: PostResponseType[] | [];
  setAllPosts:
    | React.Dispatch<React.SetStateAction<PostResponseType[]>>
    | undefined;
  filterPosts: boolean;
  setFilterPosts: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setUserInfo:
    | React.Dispatch<React.SetStateAction<UserInfo | undefined>>
    | undefined;
}

const AppContext = React.createContext<AppContextType>({
  isLoading: false,
  setIsLoading: undefined,
  userInfo: undefined,
  setUserInfo: undefined,
  setOrderBy: undefined,
  orderBy: 'true' || 'false',
  refetch: 0,
  setRefetch: () => 0,
  windowSize: {
    width: undefined,
    height: undefined,
  },
  posts: [],
  setAllPosts: undefined,
  filterPosts: false,
  setFilterPosts: undefined,
});

export default AppContext;
