"use client";
import { FC } from "react";

interface ScholarRenderProps {
  content: any;
}

const ScholarRender: FC<ScholarRenderProps> = ({ content }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </>
  );
};

export default ScholarRender;