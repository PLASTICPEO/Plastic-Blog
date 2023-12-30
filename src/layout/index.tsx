import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex-grow">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
