"use client";

import React from "react";

import { Button, Checkbox, Form, Grid, Input, theme, Typography } from "antd";

import { LockOutlined, MailOutlined } from "@ant-design/icons";
import Image from "next/image";
import AuthButton from "../components/AuthButton";

const { useToken } = theme;
const { useBreakpoint } = Grid;
const { Text, Title, Link } = Typography;

export default function SignInPage() {
  const { token } = useToken();
  const screens = useBreakpoint();

  const onFinish = (values: string) => {
    console.log("Received values of form: ", values);
  };

  const styles = {
    container: {
      margin: "0 auto",
      padding: screens.md
        ? `${token.paddingXL}px`
        : `${token.sizeXXL}px ${token.padding}px`,
      width: "380px",
    },
    section: {
      alignItems: "center",
      backgroundColor: token.colorBgContainer,
      display: "flex",
      height: screens.sm ? "100vh" : "auto",
      padding: screens.md ? `${token.sizeXXL}px 0px` : "0px",
    },
    title: {
      fontSize: screens.md ? token.fontSizeHeading2 : token.fontSizeHeading3,
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div
          style={{
            marginBottom: token.marginXL,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image src={"/images/logo.png"} alt="" height={40} width={40}></Image>
          <Title style={styles.title}>Đăng ký</Title>
          <Text
            style={{
              color: token.colorTextSecondary,
              textAlign: "center",
            }}
          >
            Tạo tài khoản để có trải nghiệm tốt hơn!
          </Text>
        </div>
        <Form
          name="normal_login"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          layout="vertical"
          requiredMark="optional"
        >
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a
              style={{
                float: "right",
              }}
              href=""
            >
              Forgot password?
            </a>
          </Form.Item>
          <Form.Item style={{ marginBottom: "0px" }}>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            <AuthButton></AuthButton>
            <div
              style={{
                marginTop: token?.marginLG,
                textAlign: "center",
                width: "100%",
              }}
            >
              <Text
                style={{
                  color: token.colorTextSecondary,
                  textAlign: "center",
                }}
              >
                Don&apos;t have an account?
              </Text>{" "}
              <Link href="">Sign up now</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
