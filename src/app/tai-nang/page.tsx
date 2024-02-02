"use client";
import React from "react";
import { Breadcrumb, theme } from "antd";
import MainLayout from "../components/core/layouts/MainLayout";
import { CandidateData } from "../data/candidatedata";
import CandidateCard from "../components/modules/talentsModule/Card/CandidateCard";
import Searchbar from "../components/modules/talentsModule/SearchBar/SearchBar";
// import SearchBar from "../components/modules/talentsModule/SearchBar/SearchBar";

const Talents: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <MainLayout>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
        <Breadcrumb.Item>Tài năng</Breadcrumb.Item>
      </Breadcrumb>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        <div className="bg-white  p-8 rounded-lg mb-6">
            <h1 className="text-4xl text-yellow-300 font-bold mb-2">Danh sách ứng viên</h1>
            <p>Tại đây, bạn có thể tìm thấy thông tin về những sinh viên tuyệt vời của chúng tôi.</p>
            {/* <SearchBar></SearchBar> */}
            <Searchbar></Searchbar>
            
            <div className="flex flex-wrap">
                {CandidateData.map((candidate) => (
                    <CandidateCard key={candidate.candidateId} {...candidate}  />
                ))}
            S</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Talents;
