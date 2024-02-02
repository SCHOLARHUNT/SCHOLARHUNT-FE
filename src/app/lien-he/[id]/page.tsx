"use client";

import React, { useEffect, useState } from "react";
import { Breadcrumb, theme } from "antd";
import MainLayout from "@/app/components/core/layouts/MainLayout";
import Sider from "@/app/components/modules/messages/Sider";
import BoxChat from "@/app/components/modules/messages/BoxChat";
import { USER_DEMO } from "@/app/constants/users";
import { contactPreviewInterface } from "@/app/models/user";

const Contacts: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [users, setUsers] = useState<contactPreviewInterface[]>([]);

  useEffect(() => {
    setUsers(USER_DEMO);
  }, []);

  return (
    <MainLayout>
      <Breadcrumb
        style={{ margin: "16px 0" }}
        items={[{ title: "Trang chủ" }, { title: "Liên hệ" }]}
      >
        {/* <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Liên hệ</Breadcrumb.Item> */}
      </Breadcrumb>
      <div className="flex">
        <Sider users={users}></Sider>
        <BoxChat users={users}></BoxChat>
      </div>
    </MainLayout>
  );
};

export default Contacts;
