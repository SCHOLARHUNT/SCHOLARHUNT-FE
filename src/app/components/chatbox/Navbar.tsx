import React from "react";
import { MdClose } from "react-icons/md";

function Navbar() {
  return (
    <div className=" absolute top-0 w-full rounded-[10px] bg-none h-[100px] bg-[#F2F3F5]">
      <div className="absolute left-5 top-5 flex gap-5">
        <div className="w-[230px]  h-[50px] rounded-[10px] bg-black/30">
          <div className="flex justify-between mt-1 px-2">
            <div className="text-white italic  text-[18px] mt-2 truncate  w-[180px] text-nowrap">
              Học bổng bách khoa đà nẵng
            </div>
            <div className="">
              <MdClose className="text-[25px] mt-[10px] mr-2 bg-black rounded-[50px]" />
            </div>
          </div>
        </div>

        <div className="w-[230px]  h-[50px] rounded-[10px] bg-white">
          <div className="flex justify-between mt-1 px-2">
            <div className="text-black  italic  text-[18px] mt-2 truncate  w-[180px] text-nowrap">
              Học bổng sư phạm
            </div>
            <div className="">
              <MdClose className="text-[25px] mt-[10px] mr-2 bg-black rounded-[50px]" />
            </div>
          </div>
        </div>

        <div className="w-[230px]  h-[50px] rounded-[10px] bg-white">
          <div className="flex justify-between mt-1 px-2">
            <div className="text-black italic  text-[18px] mt-2 truncate  w-[180px] text-nowrap">
              Học bổng fpt
            </div>
            <div className="">
              <MdClose className="text-[25px] mt-[10px] mr-2 bg-black rounded-[50px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
