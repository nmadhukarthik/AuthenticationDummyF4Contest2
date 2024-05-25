import { Alert, Button, Form, Input } from "antd";
import React from 'react';
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
//import Auth from "./Auth"
//import ReactDOM from 'react-dom/client';


const Login = ({auth}) =>
{
    const [apiStatus, setApiStatus] = useState("init");
    const [form] = useForm();

    const onSubmitForm = async (loginInfo) => {
    // loginInfo = {email, password}
    setApiStatus("pending");
    let { success } = await auth.login(loginInfo);
    setApiStatus(success ? "success" : "error");
  };

  useEffect(() => {
    if (apiStatus === "success") {
      form.resetFields();
    }
  }, [form,apiStatus]);

    return(
        <div className="form">
        {apiStatus === "success" && (
            <Alert
              type="success"
              showIcon
              message="Logged in successfully.."
              closable
            />
          )}
          {apiStatus === "error" && (
            <Alert type="error" showIcon message="Invalid credentials" closable />
          )}


        <Form onFinish={onSubmitForm} layout="vertical">
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {type: "text", message: "Please enter valid email"},
                    {required: true, message: "Please enter email"},
                ]}
            >
               <Input placeholder="Enter Email"/>
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {required: true, message: "Password is required"},
                    {type: "password", message: "Please enter valid password"}
                ]}       
            >
                <Input placeholder="Enter password"/>
            </Form.Item>

            <Button 
                loading = {apiStatus === "pending"}
                htmlType="submit" type="primary">Submit</Button>
        </Form>

        </div>
    )
}

export default Login