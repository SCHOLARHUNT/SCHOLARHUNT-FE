import { contactPreviewInterface } from "@/app/models/user";
import { Image } from "antd";
import { useParams } from "next/navigation";
import React from "react";

interface IProps {
  users: contactPreviewInterface[];
}

function BoxChat({ users }: IProps) {
  const { id } = useParams();
  const information = users[+id];
  return (
    <>
      <div className="bg-white flex-1 border-[1px]">
        <div className="flex flex-row border-b-[1px] h-[65px] items-center px-4">
          <Image
            src={information?.avatar}
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default BoxChat;
