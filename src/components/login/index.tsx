import { Form, Input, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  LockOutlined,
} from "@ant-design/icons";
import CustomButton, { ButtonSize } from "../button";
import { FieldType } from "../registration/registration.types";

import { useAuth } from "./hooks/useLogin";

const LogIn = () => {
  const { onFinish, onFinishFailed } = useAuth();
  const [form] = Form.useForm();

  return (
    <div>
      <Form
        form={form}
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
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

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password
            placeholder="Enter Password"
            prefix={
              <LockOutlined className="site-form-item-icon text-[#7EC11F]" />
            }
          />
        </Form.Item>

        <div className="flex items-center justify-center mt-20 ">
          <CustomButton title="Sing in" size={ButtonSize.DEFAULT} />
        </div>
      </Form>
    </div>
  );
};
export default LogIn;
