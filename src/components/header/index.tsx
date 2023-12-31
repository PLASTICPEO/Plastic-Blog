import { useContext } from "react";
import LogIn from "../login";
import CustomModal from "../modal";
import Registration from "../registration";
import Logo from "./logo";
import {
  FormOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { AppContext } from "../../context/ContextProvider";
import CustomSearch from "./search";
import CustomDropDown from "../dropdown";

const Header = () => {
  const { logSuccess, authUserInfo, handleLogout } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between  px-5 xl:space-x-6 space-x-2 w-full h-16 fixed bg-[#FFFFFF] border-b-[1px] z-40">
      <div className="flex items-center space-x-4">
        <Logo />
        <CustomSearch />
      </div>
      {logSuccess ? (
        <div className="flex items-center justify-center xl:space-x-6 space-x-2">
          <CustomDropDown
            titles={["Write", "Profile", "Settings", "Logout"]}
            paths={["/add-blog", `/user-page/${authUserInfo?.id}`, "/", "/"]}
            icons={[
              <FormOutlined />,
              <UserOutlined />,
              <SettingOutlined />,
              <LogoutOutlined />,
            ]}
            triggerProps={{
              onClick: () => handleLogout(),
            }}
          />
        </div>
      ) : (
        <div
          className={`flex items-center jusity-center space-x-2 ${
            logSuccess ? "invisible" : "visible"
          }`}
        >
          <CustomModal
            triggerProps={{
              className: `flex items-center justify-center px-2.5 py-2 border-none text-[#8F8F8F] hover:text-[#272727] h-10`,
            }}
            buttonValue={"Log in"}
            title="Welcome Back."
          >
            <LogIn />
          </CustomModal>
          <CustomModal
            triggerProps={{
              className: `flex items-center justify-center px-2.5 py-2 text-[#8F8F8F] border-none hover:text-[#272727] h-10`,
            }}
            buttonValue={"Get started"}
            title="Join Stream Of Stories."
          >
            <Registration />
          </CustomModal>
        </div>
      )}
    </div>
  );
};

export default Header;
