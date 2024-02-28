import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../../context/ContextProvider";

import mainLogo from "../../../assets/StreamOfStoriesLogo.svg";

const Logo = () => {
  const { scrollPositionTop } = useContext(AppContext);

  return (
    <div className="flex items-center justify-center w-12 h-12 p-2 bg-[#D6D6D6] rounded-full">
      <Link to={"/"}>
        <div onClick={() => scrollPositionTop()}>
          <img
            src={mainLogo}
            alt="Stream Of Stories"
            className="text-3xl w-20 h-20 text-[#11151C] "
          />
        </div>
      </Link>
    </div>
  );
};

export default Logo;
