import React, { useContext, useEffect, useState } from "react";
import { Button, ConfigProvider, Modal } from "antd";
import { ModalTypes } from "./modal.types";
import { AppContext } from "../../context/ContextProvider";

const CustomModal: React.FC<ModalTypes> = ({
  as,
  children,
  buttonValue,
  title,
  triggerProps,
}) => {
  const { regSuccess, isAuthenticated } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (regSuccess) {
      handleCancel();
    }
  }, [regSuccess]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     handleCancel();
  //   }
  // }, [isAuthenticated]);

  const Trigger = as ? as : Button;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Button: {
              borderColorDisabled: "#FF5964",
              defaultShadow: "0 0 0 rgba(255, 38, 5, 0.06)",
            },
          },
          token: {
            colorPrimaryHover: "text-[#FFFFFF]",
            lineWidthFocus: 0,
          },
        }}
      >
        <Trigger onClick={showModal} {...triggerProps}>
          {buttonValue}
        </Trigger>
      </ConfigProvider>
      <ConfigProvider
        theme={{
          components: {
            Modal: {
              contentBg: "#F5F5F5",
              borderRadiusLG: 3,
            },
          },
        }}
      >
        <Modal
          afterClose={() => console.log("check")}
          open={isModalOpen}
          onCancel={handleCancel}
          title={
            <div className="flex items-center justify-center my-5 bg-[#F5F5F5]">
              {title}
            </div>
          }
          footer={false}
        >
          {children}
        </Modal>
      </ConfigProvider>
    </>
  );
};

export default CustomModal;
