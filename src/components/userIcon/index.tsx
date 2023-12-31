import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";
import LoadingAnimationComponent from "../loading";
import { UserIconSize } from "./index.enum";

const UserIcon: React.FC<{ size?: UserIconSize }> = ({ size }) => {
  const { authUserInfo } = useContext(AppContext);

  return (
    <div className="cursor-pointer">
      {authUserInfo ? (
        <div
          className={`flex items-center justify-center ${size} rounded-full bg-[#DEC1FF]`}
        >
          <p className="text-[#797E77]">{authUserInfo?.username[0]}</p>
          <p className="text-[#797E77]">
            {authUserInfo?.username[authUserInfo?.username.length - 1]}
          </p>
        </div>
      ) : (
        <div
          className={`flex items-center justify-center ${size} rounded-full bg-[#E2E2DF]  animate-pulse`}
        >
          <LoadingAnimationComponent />
        </div>
      )}
    </div>
  );
};

export default UserIcon;
