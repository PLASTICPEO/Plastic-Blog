import { useContext } from "react";
import { AppContext } from "../../../context/ContextProvider";
import CustomTabs from "../tabs";

const UserMain = () => {
  const { authUserInfo } = useContext(AppContext);

  return (
    <div className="border-r-[1px] xl:col-span-5 xl:px-0 px-4">
      <p className="text-4xl xl:py-4 py-0 xl:visible invisible">
        {authUserInfo?.username}
      </p>
      <CustomTabs />
    </div>
  );
};

export default UserMain;
