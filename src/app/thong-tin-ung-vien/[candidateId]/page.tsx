"use client";
import MainLayout from "@/app/components/core/layouts/MainLayout";
import ContactTalent from "@/app/components/modules/talentsModule/Contact-Talent/ContactTalent";
import Certifications from "@/app/components/modules/talentsModule/Profile/Certifications";
import Profile from "@/app/components/modules/talentsModule/Profile/Profile";
import SampleProfile from "@/app/components/modules/talentsModule/Profile/SampleProfile";
import Skills from "@/app/components/modules/talentsModule/Profile/Skills";
import { CandidateData } from "@/app/data/candidatedata";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Breadcrumb, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import React from "react";

function page({ params }: { params: { candidateId: number } }) {
  const { candidateId } = params;

  const selectedCandidate = CandidateData.find(
    (candidate) => candidate.candidateId == candidateId
  );
  console.log(params.candidateId);

  if (!selectedCandidate) {
    return <div>Không tìm thấy ứng viên</div>;
  }

  const { imageUrl, name } = selectedCandidate;

  return (
    <MainLayout>
      <Row gutter={20} className="mt-4">
        <Col span={17}>
          <Profile imageUrl={imageUrl} name={name} />
        </Col>
        <Col span={7}>
          <SampleProfile></SampleProfile>
        </Col>
      </Row>
      
      <Row gutter={20}>
        <Col span={17} className="mt-4">
          <Skills></Skills>
        </Col>
      </Row>

      <Row gutter={20}>
        <Col span={17} className="mt-4">
          <Certifications></Certifications>
        </Col>
      </Row>
    </MainLayout>
  );
}

export default page;
