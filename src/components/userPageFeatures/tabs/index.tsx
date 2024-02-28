import React from "react";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import UserBlogs from "./user-blogs";

const UserPageTabs: React.FC = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Home",
      children: <UserBlogs />,
    },
    {
      key: "2",
      label: "List",
      children: <div>List</div>,
    },
  ];
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily:
            "Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif",
        },
        components: {
          Tabs: {
            inkBarColor: "#97989F",
            itemHoverColor: "#97989F",
            itemSelectedColor: "#97989F",
          },
        },
      }}
    >
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </ConfigProvider>
  );
};

export default UserPageTabs;
