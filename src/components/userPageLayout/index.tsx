import { Children, ReactNode, useContext, useEffect } from "react";
import { AppContext } from "../../context/ContextProvider";
import CustomTabs from "./tabs";
import UserIcon from "../userIcon";
import { UserIconSize } from "../userIcon/index.enum";
import { useParams } from "react-router-dom";

const UserPageLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { authUserInfo } = useContext(AppContext);

  return (
    <div className="w-full h-full mt-28 flex  mx-auto container xl:grid xl:grid-cols-8 grid-cols-1 gap-4">
      <div className="border-r-[1px] xl:col-span-5 ">
        <div className="text-4xl py-4">
          <p>{authUserInfo?.username}</p>
        </div>
        <div>
          <CustomTabs />
        </div>
      </div>
      <div className="xl:col-span-3">
        <div className="sticky top-20 space-y-4">
          <div>
            <div>
              <UserIcon size={UserIconSize.MEDIUM} />
            </div>
            <div className="text-4xl py-4">
              <p>{authUserInfo?.username}</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-Letters text-[green]">Edit profile</p>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default UserPageLayout;
