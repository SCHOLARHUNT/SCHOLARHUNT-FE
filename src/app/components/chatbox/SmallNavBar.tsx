import React from "react";
import { MdClose } from "react-icons/md";

function SmallNabBar() {
  return (
    <div className=" absolute w-full top-0 w-full rounded-[10px] bg-none h-[50px] bg-[#F2F3F5]">
      <div className="absolute w-full left-1 top-1 flex gap-5">
        <div className="w-[99%]  h-[42px] rounded-[10px] bg-black/30">
          <div className="flex justify-between mt-1 px-2">
            <div className="text-white italic  text-[18px] mt-1 truncate  w-[90%] text-nowrap">
              Bạn đang tìm kiếm thông tin về học bổng đại học bách khoa Đà Nẵng
            </div>
            <div className="">
              <MdClose className="text-[30px] mt-[2px]  bg-white text-black/50 rounded-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmallNabBar;
