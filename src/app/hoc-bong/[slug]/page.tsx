"use client";
import MainLayout from "../../components/core/layouts/MainLayout";
import Sider from "antd/es/layout/Sider";
import Image from "next/image";
import Title from "antd/es/typography/Title";
import { Space, Typography } from "antd";
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
import ProviderTinyCard from "@/app/components/provider/provider-tiny-card";
import ProviderMap from "@/app/components/provider/map";
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
                <ProviderTinyCard></ProviderTinyCard>
                <ProviderMap></ProviderMap>
                <div className="top-[720px] fixed h-[300px] w-[545px] translate-x-[-19px] bg-white"></div>
                <div className="w-[510px] translate-x-[-2px] px-5 py-2 bg-white rounded-[10px] top-[720px] h-[250px] drop-shadow-2xl border border-2  fixed">
                  <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="text-[24px]"> Học bổng toàn phần</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="text-[24px]">
                        {" "}
                        Tổng giá trị 100.000.000 VND
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      <span className="text-[24px]">
                        Hạn sơ tuyển : trước ngày{" "}
                        <span className="text-green">20/2/2024</span>
                      </span>
                    </li>
                  </ul>

                  <Button
                    size="large"
                    className="absolute top-[60px] left-[160px]"
                    type="primary"
                  >
                    Đăng ký ngay
                  </Button>
                  <div className="text-[16px] absolute right-[210px] bottom-[65px] text-black/40 font-bold">
                    Lượt còn lại 1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </MainLayout>
  );
}
