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
  changeCategory: "",
  selectedTags: [],
  regSuccess: false,
  logSuccess: false,
  isAuthenticated: false,
  scrollY: 0,
  setSelectedCard: () => null,
  setNewBlogObject: () => null,
  handleSentNewBlog: () => null,
  setRegSuccess: () => null,
  setLogSuccess: () => null,
  setIsAuthenticated: () => null,
  setAuthorizedUser: () => null,
  setAuthUserInfo: () => null,
  handleLogout: () => null,
  setSelectedTags: () => null,
  setChangeCategory: () => null,
  scrollPositionTop: () => null,
  forYou: true,
  setForYou: () => null,
});

const ContextProvider = ({ children }: ContextProviderTypes) => {
  const [selectedCard, setSelectedCard] = useState<any>(null);
  const [newBlogObject, setNewBlogObject] = useState<any>(null);
  const [regSuccess, setRegSuccess] = useState<any>(null);
  const [logSuccess, setLogSuccess] = useState<any>(false);
  const [authorizedUser, setAuthorizedUser] = useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<any>(false);
  const [authUserInfo, setAuthUserInfo] = useState<any>(null);
  const [selectedTags, setSelectedTags] = useState<any>([]);
  const [changeCategory, setChangeCategory] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [forYou, setForYou] = useState(true);

  const { mutate: blogSave } = useBlogSave();
  const { data: res }: any = useMeRequest({ enabled: !!logSuccess });
  // const queryClient = useQueryClient();

  useEffect(() => {
    if (logSuccess) {
      setAuthUserInfo(res);
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

  const scrollPositionTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollY = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    handleScrollY();
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, [scrollY]);

  const handleSentNewBlog = () => {
    blogSave(newBlogObject);
  };

  useEffect(() => {
    scrollPositionTop();
  }, []);

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
        selectedTags,
        setSelectedTags,
        setChangeCategory,
        changeCategory,
        scrollPositionTop,
        scrollY,
        setForYou,
        forYou,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
