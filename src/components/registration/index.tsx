import { ConfigProvider, Form, Input, Tooltip } from "antd";
import {
  MailOutlined,
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import CustomButton, { ButtonSize } from "../button";
import { useRegistration } from "./hooks/useRegistration";
import Topics from "../topics";
import { useContext } from "react";
import { AppContext } from "../../context/ContextProvider";

const Registration: React.FC = () => {
  const { onFinish, onFinishFailed, form, contextHolder } = useRegistration();
  const { selectedTags, setSelectedTags } = useContext(AppContext);

  return (
    <div className="flex items-center justify-center  ">
      {contextHolder}
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email...",
              type: "email",
            },
          ]}
        >
          <Input
            placeholder="Enter Email"
            prefix={
              <MailOutlined className="site-form-item-icon text-[#7EC11F]" />
            }
            suffix={
              <Tooltip title="Enter your email">
                <InfoCircleOutlined style={{ color: "#B0B3BF" }} />
              </Tooltip>
            }
          />
        </Form.Item>
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input
            prefix={
              <UserOutlined className="site-form-item-icon text-[#7EC11F]" />
            }
            suffix={
              <Tooltip title="Enter your username">
                <InfoCircleOutlined style={{ color: "#B0B3BF" }} />
              </Tooltip>
            }
            placeholder="Enter name"
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            { min: 8 },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Enter-Password"
            prefix={
              <LockOutlined className="site-form-item-icon text-[#7EC11F]" />
            }
          />
        </Form.Item>

        <Form.Item
          name="confirm"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            { min: 8 },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The new password that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password
            placeholder="Confirm-Password"
            prefix={
              <LockOutlined className="site-form-item-icon text-[#7EC11F]" />
            }
          />
        </Form.Item>
        <ConfigProvider
          theme={{
            token: {
              colorError: "green",
            },
          }}
        >
          <Form.Item
            rules={[
              {
                required: true,
                message:
                  "Choose topics that will be presented on your website in the future",
              },
            ]}
            name="interests"
          >
            <Topics selectedTags={selectedTags} onChange={setSelectedTags} />
          </Form.Item>
        </ConfigProvider>

        <div className="flex items-center justify-center mt-20 ">
          <CustomButton title="Sing up" size={ButtonSize.DEFAULT} />
        </div>
      </Form>
    </div>
  );
};

export default Registration;
