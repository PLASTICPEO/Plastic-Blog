import { ReactNode } from "react";
import { AUTH_TOKEN } from "../api/constants/constants";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  if (!token) {
    return (
      <>
        <Navigate to="/" />
      </>
    );
  }
  return <>{children}</>;
};

export default ProtectedRoute;
