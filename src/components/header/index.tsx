import CustomButton from "../button";
import Logo from "./logo";
import Menu from "./menu";
import Navigator from "./navigator";
import { FormOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <div className="flex items-center justify-between  px-5 space-x-6 w-full h-20 fixed bg-[#F8F8F8] z-40">
      <Logo />
      <Navigator />
      <CustomButton title="Write" path="add-blog">
        <FormOutlined />
      </CustomButton>
      <Menu />
    </div>
  );
};

export default Header;
