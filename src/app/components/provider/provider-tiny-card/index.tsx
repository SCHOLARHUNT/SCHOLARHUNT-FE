import React from "react";
import Image from "next/image";
function ProviderTinyCard() {
  return (
    <div className="bg-gray-100 w-[500px]">
      <div className="max-w-lg w-full mx-auto my-5 bg-white rounded-lg shadow-md p-5">
        <Image
          className="w-32 h-24 rounded-full mx-auto"
          src=""
          alt="Profile picture"
          width={20}
          height={20}
        ></Image>
        <h2 className="text-center text-2xl font-semibold text-black mt-3">
          BÁCH KHOA ĐÀ NẴNG
        </h2>
        <p className="text-center text-gray-600 mt-1">
          Da Nang University of Science and Technology
        </p>
        <div className="flex justify-center mt-5">
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            Website
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            Chi tiết
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            Liên lạc
          </a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-gray-600 mt-2">
            Trường Đại học Bách khoa là một trong ba Trường Đại học Bách khoa
            của Việt Nam giữ vai trò là trung tâm đào tạo cán bộ kỹ thuật công
            nghệ và các nhà quản lý có trình độ cao, đồng thời là trung tâm
            nghiên cứu khoa học và chuyển giao công nghệ có vai trò chủ đạo
            trong việc triển khai, ứng dụng công nghệ tiên tiến phục vụ cho sự
            nghiệp công nghiệp hóa, hiện đại hóa đất nước, đặc biệt là khu vực
            miền Trung - Tây Nguyên.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProviderTinyCard;
