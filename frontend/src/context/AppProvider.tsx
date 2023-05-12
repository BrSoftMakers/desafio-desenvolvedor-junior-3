import React, { useEffect, useMemo, useState } from 'react';
import AppContext, { AppContextType } from './AppContext';
import { UserInfo } from '../service/types/userInfo.type';
import AuthService from '../service/AuthService';
import useWindowSize from '../hooks/useWindowSize';
import { PostResponseType } from '../service/types/postResponse.type';

type AppProviderTypes = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderTypes) {
  const authService = useMemo(() => new AuthService(), []);

  const windowSize = useWindowSize();

  const [allPosts, setAllPosts] = useState<PostResponseType[] | []>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<UserInfo | undefined>();

  const [orderBy, setOrderBy] = useState<'true' | 'false'>('true');

  const [refetch, setRefetch] = useState<number>(0);

  const [myPosts, setMyPosts] = useState<PostResponseType[] | []>([]);

  const [filterPosts, setFilterPosts] = useState<boolean>(false);

  useEffect(() => {
    setUserInfo(authService.getUserInfo());
  }, [authService]);

  useEffect(() => {
    if (!allPosts?.length) {
      return;
    }

    if (filterPosts) {
      setMyPosts(
        allPosts.filter((post) => {
          return post.userId === userInfo?.id;
        })
      );
    } else {
      setMyPosts([]);
    }
  }, [allPosts, userInfo?.id, filterPosts]);

  const context: AppContextType = {
    isLoading,
    setIsLoading,
    userInfo,
    orderBy,
    setOrderBy,
    refetch,
    setRefetch,
    windowSize,
    posts: myPosts?.length ? myPosts : allPosts,
    filterPosts,
    setFilterPosts,
    setAllPosts,
    setUserInfo,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
