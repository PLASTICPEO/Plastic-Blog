import { ReactNode } from "react";

export interface ModalTypes {
  title?: string;
  buttonValue?: string;
  children: ReactNode;
  triggerProps?: any;
  as?: string;
  ref?: any;
}
