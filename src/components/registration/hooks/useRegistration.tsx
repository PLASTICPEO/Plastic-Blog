import { Form, message } from "antd";
import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/ContextProvider";
import { useCreateUser } from "../../../api/services/registration";
import { MehFilled } from "@ant-design/icons";

export const useRegistration = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { setRegSuccess } = useContext(AppContext);
  const { mutate: userCreate, data: res, error: err } = useCreateUser();
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const interests = values.interests || [];
    form.setFieldsValue({ interests });

    userCreate({
      email: values.email,
      username: values.name,
      password: values.password,
      interests,
    });
  };

  useEffect(() => {
    if (res) {
      form.resetFields();
      setRegSuccess(res);
    }
  }, [res, form]);

  const onFinishFailed = () => {
    messageApi.open({
      type: "error",
      content: err.response.data.error,
      icon: <MehFilled style={{ color: "#C9DCB3" }} />,
    });
  };

  return {
    form,
    onFinish,
    onFinishFailed,
    contextHolder,
  };
};
