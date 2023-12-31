import React, { Children, ReactNode } from "react";
import { ConfigProvider, MenuProps } from "antd";
import { Button, Dropdown } from "antd";

const CardDropDown: React.FC<{
  as?: any;
  blogId: string;
  triggerProps?: any;
  children?: ReactNode;
}> = ({ as, triggerProps, children, blogId }) => {
  const Trigger = as ? as : "div";
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <p
          className="text-[black]"
          onClick={() => console.log("სტატიის ჩასწორება", blogId)}
        >
          Edit story
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <p
          className="text-[#C63805] hover:text-[black]"
          onClick={() => console.log("სტატიის წაშლა", blogId)}
        >
          Delete story
        </p>
      ),
    },
  ];
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            controlItemBgHover: "none",
            borderRadiusLG: 4,
            controlPaddingHorizontal: 30,
          },
        }}
      >
        <Dropdown
          menu={{ items }}
          trigger={["click"]}
          placement="bottom"
          arrow={{ pointAtCenter: true }}
        >
          <Trigger {...triggerProps}>{children}</Trigger>
        </Dropdown>
      </ConfigProvider>
    </>
  );
};

export default CardDropDown;
