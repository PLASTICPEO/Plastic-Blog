import { Dispatch, ReactNode, SetStateAction } from "react";

export interface CardObject {
  title: string;
  userName: string;
  article: string;
  category: string;
  uploadDate: string;
  _id: string;
}

export interface blogObject {
  title: string;
  article: string;
  category: string;
  userId: any;
}

export interface ContextTypes {
  selectedCard: CardObject;
  setSelectedCard: Dispatch<SetStateAction<CardObject>>;
  newBlogObject: blogObject;
  setNewBlogObject: Dispatch<SetStateAction<blogObject | null>>;
  handleSentNewBlog: () => void;
  regSuccess: any;
  setRegSuccess: Dispatch<SetStateAction<any>>;
  logSuccess: boolean;
  setLogSuccess: Dispatch<SetStateAction<any>>;
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<any>>;
  authorizedUser: any;
  setAuthorizedUser: Dispatch<SetStateAction<any>>;
  authUserInfo: any;
  setAuthUserInfo: Dispatch<SetStateAction<any>>;
  handleLogout: () => void;
  selectedTags: string[];
  setSelectedTags: Dispatch<SetStateAction<string[]>>;
  setChangeCategory: Dispatch<SetStateAction<any>>;
  changeCategory: string;
  scrollY: number;
  scrollPositionTop: () => void;
  setForYou: Dispatch<SetStateAction<any>>;
  forYou: boolean;
}

export interface ContextProviderTypes {
  children: ReactNode;
}
