"use client";

import React from "react";
import { Breadcrumb, Divider, Layout, Menu, MenuProps, theme } from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import MainLayout from "../components/core/layouts/MainLayout";
import Sider from "antd/es/layout/Sider";
import Search from "../components/core/common/Search";
import Advertising from "../components/core/common/Advertising";
import Image from "next/image";
import Ads from "../../../public/images/ads.gif";
import Title from "antd/es/typography/Title";
import ScholarCard from "../components/scholar-card";
import SiderBar from "../components/core/common/SiderBar";

const Scholarships: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <MainLayout>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Học bổng</Breadcrumb.Item>
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
            display : "flex",
            flexDirection : "row",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <div className="border border-0 w-[25%] border-t-[8px]  rounded-t-[10px] border-t-primary-main mx-auto">
            <SiderBar></SiderBar>
          </div>
          <div className="px-[20px] w-[55%] h-[5000px] sticky top-[20px]">
            <div>
              <Title>Tìm kiếm học bổng</Title>
              <Search></Search>

              <Advertising></Advertising>
              <div className="mt-[100px] opacity-100">
                {" "}
                <Divider plain>
                  <Title level={4}>630 tìm kiếm học bổng liên quan</Title>
                </Divider>
              </div>
              <ScholarCard></ScholarCard>
              <ScholarCard></ScholarCard>
              <ScholarCard></ScholarCard>
            </div>
          </div>
          <div className="px-[20px] w-[20%]">
            <Image
              alt="ads"
              src={Ads}
              className="h-[700px] sticky w-[300px]"
            ></Image>
          </div>
        </Layout>
      </div>
    </MainLayout>
  );
};

export default Scholarships;
