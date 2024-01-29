"use client";
import MainLayout from "../../components/core/layouts/MainLayout";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import { Space, Typography } from 'antd';
const { Text, Link } = Typography;
import React from "react";
import {
  Breadcrumb,
  Button,
  Divider,
  Layout,
  Menu,
  MenuProps,
  theme,
} from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ScholarRender from "@/app/components/scholar-detail/ScholarRender";
export default function Page({ params }: { params: { slug: string } }) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <MainLayout>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Học bổng</Breadcrumb.Item>
        <Breadcrumb.Item>{params.slug}</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            display: "flex",
            flexDirection: "row",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="w-full flex flex-col  gap-5">
            <Title level={1}>HỌC BỔNG ĐẠI HỌC BÁCH KHOA ĐÀ NẴNG</Title>
            <div className="w-full flex justify-center min-h-[2000px] ">
              <div className="w-[70%]">
                <ScholarRender content={null}></ScholarRender>
              </div>
              <div className="w-[30%] relative min-h-[600px] border border-r-0 border-t-0 border-b-0 border-l-2 px-5 border-primary-main">
                <div className="w-[510px] px-5 py-5 rounded-[10px] h-[670px] drop-shadow-2xl border border-1 fixed">
                  <Title type="success" level={3}>Học bổng toàn phần</Title>
                  <Title type="success" level={3}>Tổng giá trị 100000 VND</Title>
                  <Title level={5}>GIÁ TRỊ : 1000000 VND</Title>
                  <Button size="large" className="absolute top-[450px]" type="primary">Đăng ký ngay</Button>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </MainLayout>
  );
}
