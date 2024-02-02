"use client";
import MainLayout from "../../../components/core/layouts/MainLayout";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Title from "antd/es/typography/Title";

import React from "react";
import { Breadcrumb, Divider, Layout, Menu, MenuProps, theme } from "antd";
import PlateEditor from "@/app/components/editor/plate-editor";

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
            justifyContent: "center",

            borderRadius: borderRadiusLG,
          }}
        >
          <div>
            <Title>Editor</Title>
            <div className="max-w-[1336px] text-black rounded-lg border bg-background shadow">
              <PlateEditor />
            </div>
          </div>
        </Layout>
      </div>
    </MainLayout>
  );
}
