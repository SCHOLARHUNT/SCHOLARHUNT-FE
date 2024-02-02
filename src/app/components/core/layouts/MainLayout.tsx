"use client";

import React from "react";
import { ReactNode } from "react";

import {
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Card,
  Dropdown,
  Flex,
  Layout,
  Menu,
  MenuProps,
  theme,
  Typography,
} from "antd";
import Image from "next/image";
const { Text } = Typography;
import {
  SearchOutlined,
  TeamOutlined,
  MessageOutlined,
  BellOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  {
    label: <Link href={"/hoc-bong"}>Học bổng</Link>,
    key: "0",
    icon: <SearchOutlined />,
  },
  {
    label: <Link href={"/tai-nang"}>Tài năng</Link>,
    key: "1",
    icon: <TeamOutlined />,
  },
  {
    label: <Link href={"/lien-he/1"}>Liên hệ</Link>,
    key: "2",
    icon: <MessageOutlined />,
  },
];

interface IProps {
  children: ReactNode;
}

const MainLayout = ({ children }: IProps) => {
  const pathName = usePathname();

  const HighlightKey = () => {
    if (pathName === "/hoc-bong") {
      return 0;
    } else if (pathName === "/tai-nang") {
      return 1;
    } else if (pathName === "/lien-he") {
      return 2;
    } else return 0;
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Flex justify="space-between" flex={1} align="center">
          <Link href={"/"}>
            <Flex gap="small" align="center">
              <Image
                src={"/images/logo.png"}
                alt=""
                height={40}
                width={40}
              ></Image>
              <Text
                strong
                color="link"
                style={{ color: "#1777FF", fontSize: 20 }}
              >
                SCHOLARHUNT
              </Text>
            </Flex>
          </Link>

          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={[`${HighlightKey()}`]}
            items={items}
            style={{ minWidth: 0 }}
          />
          <Flex gap={20} align="center">
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <Flex
                style={{
                  borderRadius: "50%",
                  border: "1px solid #ddd",
                  padding: 10,
                }}
              >
                <Badge dot>
                  <BellOutlined
                    height={40}
                    style={{
                      fontSize: "16px",
                    }}
                  />
                </Badge>
              </Flex>
            </Dropdown>
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <Avatar
                src={
                  <Image
                    src={
                      "https://scontent.fdad1-4.fna.fbcdn.net/v/t39.30808-6/375450211_3436974949966280_2185542790878411125_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=FQyFBWFVydkAX9DJGPr&_nc_ht=scontent.fdad1-4.fna&oh=00_AfBifFiZ0z4gJ5XZmXbBs1mvopVntR7whL6eUGYomU4new&oe=65A0B7CA"
                    }
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                }
                size={"large"}
              />
            </Dropdown>
          </Flex>
        </Flex>
      </Header>
      <Content style={{ padding: "0 48px" }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        Scholar Hunt ©{new Date().getFullYear()} Created by Life Tech
      </Footer>
    </Layout>
  );
};

export default MainLayout;
