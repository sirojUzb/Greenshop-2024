import { Form, Input } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useAxios } from "../../../../../hooks/useAxios";
import { useAuth } from "../../../../../configs/auth";
import { useDispatch } from "react-redux";
import { setAuthModal } from "../../../../../redux/generic-slices/modals";
import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { singIn } = useAuth();
  const axios = useAxios();

  const onFinish = async (e) => {
    if (loading) return;

    setLoading(true);
    try {
      const { data } = await axios({
        url: "/user/sign-up",
        data: e,
        method: "POST",
      });

      const { token, user } = data.data;

      singIn({ token, user });
      dispatch(setAuthModal());
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className="w-[80%] m-auto">
      <h3 className="text-sm  mt-8 font-normal">
        Enter your email and password to register.
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
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input placeholder="name..." />
        </Form.Item>

        <Form.Item
          name="surname"
          rules={[
            {
              required: true,
              message: "Please input your surname",
            },
          ]}
        >
          <Input placeholder="surname..." />
        </Form.Item>

        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input placeholder="Enter your email address!" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password!" />
        </Form.Item>

        <Form.Item
          name="confirm_password"
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
          ]}
        >
          <Input.Password placeholder="Confirm your password!" />
        </Form.Item>

        <h3 className="font-normal mt-[14px] cursor-pointer w-full m-auto">
          Or register with
        </h3>
        <button className="bg-[#46A358] mt-4 flex rounded-md w-full items-center justify-center gap-1 h-9 text-base text-white cursor-pointer">
          {loading ? <LoadingOutlined /> : " Register"}
        </button>
      </Form>

      <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] mt-4">
        <FacebookOutlined className="ml-[15px]" />
        Login with Facebook
      </button>
      <button className="cursor-pointer flex items-center gap-2 border border-[#EAEAEA] h-[40px] w-full rounded-md mb-[15px] mt-4">
        <GoogleOutlined className="ml-[15px]" />
        Login with Google
      </button>
    </div>
  );
};

export default Register;
