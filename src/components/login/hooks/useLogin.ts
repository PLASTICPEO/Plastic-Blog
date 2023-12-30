import { useContext, useEffect } from "react";
import { useLogin } from "../../../api/services/login";
import { AppContext } from "../../../context/ContextProvider";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { mutate: logIn, data: res } = useLogin();
  const { setLogSuccess } = useContext(AppContext);

  const onFinish = (values: any) => {
    logIn({
      username: values.name,
      password: values.password,
    });
  };

  useEffect(() => {
    if (res) {
      setLogSuccess(true);
    }
  }, [res]);

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return {
    onFinishFailed,
    onFinish,
  };
};
