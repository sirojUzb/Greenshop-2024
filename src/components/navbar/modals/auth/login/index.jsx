import { Form, Input, notification } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  ScanOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../../../../configs/auth";
import { useState } from "react";
import { useAxios } from "../../../../../hooks/useAxios";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../redux/generic-slices/modals";
// import { signInWithGoogle } from "../../../../../configs/firebase";

const Login = () => {
  const { singIn } = useAuth();
  const axios = useAxios();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const onFinish = async (e) => {
    if (loading) return;

    setLoading(true);
    try {
      const { data } = await axios({
        method: "POST",
        url: "/user/sign-in",
        data: e,
      });

      const { token, user } = data.data;

      singIn({
        token,
        user,
      });

      notification.success({
        message: "Logged in..",
        description: "You have logged in success",
      });

      dispatch(setAuthModal());
      window.location.reload();
    } catch (error) {
      notification.error({
        message: "Something went wrong",
        description: error?.response?.data?.extraMessage,
      });
      console.log(error);
    }

    setLoading(false);
  };

  const singInGoogle = async () => {
    try {
      // const { user } = await signInWithGoogle();

      const { data } = await axios({
        url: "/api/user/sign-in/google",
        method: "POST",
        // data: user.email,
      });

      const { token, user: authUser } = data.data;

      singIn({
        token,
        user: authUser,
      });

      notification.success({
        message: "Logged in ",
        description: "Congratulations",
      });

      dispatch(setAuthModal());
      window.location.reload();
    } catch (error) {
      notification.error({
        message: "Try one more time",
        description: error?.response?.data?.extraMessage,
      });
    }
  };

  return (
    <div className="w-[80%] m-auto">
      <h3 className="text-sm  mt-8 font-normal">
        Enter your userName and password to login.
      </h3>
      <Form
        onFinish={onFinish}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 32,
        }}
        style={{
          maxWidth: "100%",
          marginTop: 16,
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Your email..." />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Your password..." />
        </Form.Item>
        <h3 className="text-[#46A358] font-normal mt-[14px] cursor-pointer w-fit ml-auto">
          Forgot Password?
        </h3>
        {loading ? (
          <button className="bg-[#46A358] mt-4 flex rounded-md w-full items-center justify-center gap-1 h-9 text-base text-white cursor-pointer">
            <LoadingOutlined />
          </button>
        ) : (
          <button className="bg-[#46A358] mt-4 flex rounded-md w-full items-center justify-center gap-1 h-9 text-base text-white cursor-pointer">
            Login
          </button>
        )}
      </Form>

      <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] mt-4">
        <FacebookOutlined className="ml-[15px]" />
        Login with Facebook
      </button>
      <button
        onClick={singInGoogle}
        className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] mt-4"
      >
        <GoogleOutlined className="ml-[15px]" />
        Login with Google
      </button>
      <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] mt-4">
        <ScanOutlined className="ml-[15px]" />
        Login with Qr Code
      </button>
    </div>
  );
};

export default Login;
