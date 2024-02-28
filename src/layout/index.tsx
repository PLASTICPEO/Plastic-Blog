import { ReactNode } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const DefaultLayout: React.FC<{ children: ReactNode; isHome?: boolean }> = ({
  children,
  isHome = false,
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow ">
        <Header isHomeFixed={isHome} />
        <>{children}</>
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
