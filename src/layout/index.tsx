import { ReactNode, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import HomeCategoryTab from "../components/home/blogsFlow/categoryTab";

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
