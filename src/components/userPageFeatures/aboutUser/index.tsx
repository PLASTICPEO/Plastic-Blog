import { useContext } from "react";
import UserIcon from "../../userIcon";
import { AppContext } from "../../../context/ContextProvider";
import { UserIconSize } from "../../userIcon/index.enum";

const AboutUserSection = () => {
  const { authUserInfo } = useContext(AppContext);
  return (
    <div className="xl:block flex items-center jutify-center sticky top-20 xl:space-y-4 space-x-4 xl:px-0 px-2">
      <UserIcon size={UserIconSize.MEDIUM} />
      <p className="xl:text-sm text-3xl py-4 ">{authUserInfo?.username}</p>
      <p className="xl:visible invisible text-xs font-Letters text-[green]">
        Edit profile
      </p>
    </div>
  );
};

export default AboutUserSection;
