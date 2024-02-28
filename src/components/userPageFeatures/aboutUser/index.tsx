import { useContext } from "react";
import UserIcon from "../../userIcon";
import { AppContext } from "../../../context/ContextProvider";
import { UserIconSize } from "../../userIcon/index.enum";

const AboutUserSection: React.FC<{ blogerInformation: any }> = ({
  blogerInformation,
}) => {
  const { authUserInfo } = useContext(AppContext);
  return (
    <div className="xl:block flex items-center jutify-center sticky top-20 xl:space-y-4 space-x-4 xl:px-0 px-2">
      <UserIcon size={UserIconSize.MEDIUM} blogerInfo={blogerInformation} />
      <p className="xl:text-sm text-3xl py-4 ">{blogerInformation?.username}</p>
      {authUserInfo?.username === blogerInformation?.username ? (
        <p className="xl:visible invisible text-xs font-Letters text-[green]">
          Edit profile
        </p>
      ) : null}
    </div>
  );
};

export default AboutUserSection;
