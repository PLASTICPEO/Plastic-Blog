import { DownOutlined } from "@ant-design/icons";
import { ConfigProvider, MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import UserIcon from "../userIcon";
import { Link } from "react-router-dom";
import { UserIconSize } from "../userIcon/index.enum";

interface CustomDropDownProps {
  titles: string[];
  paths: string[];
  icons: React.ReactNode[];
  triggerProps?: any;
}

const CustomDropDown: React.FC<CustomDropDownProps> = ({
  titles,
  paths,
  icons,
  triggerProps,
}) => {
  const items: MenuProps["items"] = titles.map((title, index) => ({
    label: (
      <Link
        to={paths[index]}
        key={index}
        {...(index === 3 ? triggerProps : {})}
      >
        <div className="flex space-x-2  mr-20">
          {icons[index]}
          <p>{title}</p>
        </div>
      </Link>
    ),
    key: index.toString(),
  }));

  return (
    <ConfigProvider
      theme={{
        token: {
          controlItemBgHover: "none",
          borderRadiusLG: 4,
          controlPaddingHorizontal: 30,
        },
      }}
    >
      <Dropdown menu={{ items }} trigger={["click"]}>
        <Space>
          <UserIcon size={UserIconSize.SMALL} />
          <div className="cursor-pointer">
            <DownOutlined />
          </div>
        </Space>
      </Dropdown>
    </ConfigProvider>
  );
};

export default CustomDropDown;
