import { createContext, useEffect, useState } from "react";
import { ContextTypes, ContextProviderTypes } from "./context.types";
import { useBlogSave } from "../api/services/blogSave";
import { AUTH_TOKEN } from "../api/constants/constants";
import { setAuthorizationHeader } from "../api/services";
import { useMeRequest } from "../api/services/me";
import { useQueryClient } from "react-query";

import { INTERESTEDBLOGS_QUERY_KEYS } from "../api/services/InterestedBlogs/index.enum";

export const AppContext = createContext<ContextTypes>({
  selectedCard: {
    title: "",
    article: "",
    userName: "",
    category: "",
    uploadDate: "",
    _id: "",
  },
  newBlogObject: {
    title: "",
    article: "",
    category: "",
    userId: "",
  },
  authorizedUser: "",
  authUserInfo: "",
  regSuccess: false,
  logSuccess: false,
  isAuthenticated: false,
  setSelectedCard: () => null,
  setNewBlogObject: () => null,
  handleSentNewBlog: () => null,
  setRegSuccess: () => null,
  setLogSuccess: () => null,
  setIsAuthenticated: () => null,
  setAuthorizedUser: () => null,
  setAuthUserInfo: () => null,
  handleLogout: () => null,
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const queryClient = useQueryClient();
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [newBlogObject, setNewBlogObject] = useState<any>(null);
  const [regSuccess, setRegSuccess] = useState<any>(null);
  const [logSuccess, setLogSuccess] = useState<any>(false);
  const [authorizedUser, setAuthorizedUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<any>(false);
  const [authUserInfo, setAuthUserInfo] = useState<any>(null);
  const { mutate: blogSave } = useBlogSave();
  const { data: res }: any = useMeRequest({ enabled: !!logSuccess });

  useEffect(() => {
    if (logSuccess) {
      setAuthUserInfo(res);
      console.log("ჩეკენცო");
      queryClient.prefetchQuery({
        queryKey: [INTERESTEDBLOGS_QUERY_KEYS.INTERESTEDBLOGS],
      });
    } else {
      setAuthUserInfo(null);
    }
  }, [res, logSuccess]);

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN);
    setIsAuthenticated(!!token);

    if (token) {
      setAuthorizationHeader(token);
      setLogSuccess(true);
    }
  }, []);

  const handleSentNewBlog = () => {
    blogSave(newBlogObject);
  };

  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setAuthorizationHeader("");
    setLogSuccess(false);
  };

  return (
    <AppContext.Provider
      value={{
        regSuccess,
        logSuccess,
        newBlogObject,
        selectedCard,
        setRegSuccess,
        handleSentNewBlog,
        setNewBlogObject,
        setSelectedCard,
        setLogSuccess,
        setIsAuthenticated,
        isAuthenticated,
        setAuthorizedUser,
        authorizedUser,
        setAuthUserInfo,
        authUserInfo,
        handleLogout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
