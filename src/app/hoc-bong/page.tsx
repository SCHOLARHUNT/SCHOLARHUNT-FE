"use client";

import React from "react";
import { Breadcrumb, theme } from "antd";

import MainLayout from "../components/core/layouts/MainLayout";

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
          Học bổng
        </div>
      </MainLayout>
  );
};

export default Scholarships;
