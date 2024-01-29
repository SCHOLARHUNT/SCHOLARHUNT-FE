"use client";
import React, { useState } from "react";
import { AutoComplete, Button, Input, Tooltip } from "antd";
import { FaBrain } from "react-icons/fa";
const { Search } = Input;
import { CloseSquareFilled } from "@ant-design/icons";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import Chatbox from "../../chatbox";

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});

const getPanelValue = (searchText: string) =>
  !searchText
    ? []
    : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];

const App: React.FC = () => {
  const [isProsearch, setIsProSearch] = useState(false);
  const [isOpenChatbox, setIsOpenChatbox] = useState(true);
  const [options, setOptions] = useState<{ value: string }[]>([]);
  return (
    <>
      <div className="flex space-x-[10px]">
        <div className="flex gap-[10px]">
          <div className="h-[50px] w-[60px] rounded-[10px] flex justify-center pt-1  border border-1 border-gray">
            <Tooltip placement="top" title={"Tính năng tìm kiếm thông minh"}>
              <div className="relative">
                <div
                  className="absolute top-[-5px] left-[-5px] w-[50px] h-[50px] z-20"
                  onClick={() => {
                    setIsProSearch(!isProsearch);
                  }}
                ></div>
                <Button
                  className="absolute top-0 z-0"
                  type="primary"
                  disabled={isProsearch}
                  icon={<FaBrain />}
                  size={"large"}
                />
              </div>
            </Tooltip>
          </div>
          <div className={isProsearch ? "hidden" : "block"}>
            <div className="h-[50px] w-[60px] rounded-[10px] flex justify-center pt-1  border border-1 border-gray">
              <Tooltip placement="top" title={"Tính năng tìm kiếm thông minh"}>
                <div className="relative">
                  <div
                    className="absolute top-[-5px] left-[-5px] w-[50px] h-[50px] z-20"
                    onClick={() => {
                      setIsOpenChatbox(!isOpenChatbox);
                    }}
                  ></div>
                  <Button
                    className="absolute top-0 z-0"
                    type="primary"
                    disabled={isOpenChatbox}
                    icon={
                      isOpenChatbox ? (
                        <MdOutlineKeyboardDoubleArrowUp className="text-[25px]" />
                      ) : (
                        <MdOutlineKeyboardDoubleArrowDown className="text-[25px]" />
                      )
                    }
                    size={"large"}
                  />
                </div>
              </Tooltip>
            </div>
          </div>
        </div>
        <AutoComplete
          options={options}
          style={{ width: "100%", height: "50px" }}
          onSearch={(text) => setOptions(getPanelValue(text))}
          placeholder="Nhập để tìm kiếm"
          allowClear={{ clearIcon: <CloseSquareFilled /> }}
        />
       
      </div>
       <div className="rounded-[10px] mt-5">
       <Chatbox></Chatbox>
       </div>
    </>
  );
};

export default App;
