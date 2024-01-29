import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Menu } from "antd";
import Search from "antd/es/input/Search";
import { MdOutlineLocationCity } from "react-icons/md";
import { Checkbox } from "antd";
import type { GetProp } from "antd";
import { AiOutlineClear } from "react-icons/ai";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const onChange: GetProp<typeof Checkbox.Group, "onChange"> = (
  checkedValues: any
) => {
  console.log("checked = ", checkedValues);
};

const cityOptions = ["Apple", "Pear", "Orange"];

const items: MenuProps["items"] = [
  getItem(
    <div className="font-bold text-xl">Thành phố 1</div>,
    "sub1",
    <MdOutlineLocationCity className="h-5 w-5" />,
    [
      getItem(
        <Search
          placeholder="Nhập tên thành phố"
          size="large"
          style={{ width: "100%", marginBottom: 20 }}
        />,
        "g1",
        null,
        cityOptions.map((option, index) =>
          getItem(
            <Checkbox key={index} value={option}>
              {option}
            </Checkbox>,
            `${index}`
          )
        ),
        "group"
      ),
    ]
  ),

  { type: "divider" },
  getItem(
    <div className="font-bold text-xl">Thành phố</div>,
    "sub2",
    <MdOutlineLocationCity className="h-5 w-5" />,
    [
      getItem(
        <Search
          placeholder="Nhập tên thành phố"
          size="large"
          style={{ width: "100%", marginBottom: 20 }}
        />,
        "g1",
        null,
        cityOptions.map((option, index) =>
          getItem(
            <Checkbox key={index} value={option}>
              {option}
            </Checkbox>,
            `${index}`
          )
        ),
        "group"
      ),
    ]
  ),

  { type: "divider" },

  getItem(
    <div className="font-bold text-xl">Thành phố</div>,
    "sub3",
    <MdOutlineLocationCity className="h-5 w-5" />,
    [
      getItem(
        <Search
          placeholder="Nhập tên thành phố"
          size="large"
          style={{ width: "100%", marginBottom: 20 }}
        />,
        "g3",
        null,
        cityOptions.map((option, index) =>
          getItem(
            <Checkbox key={index} value={option}>
              {option}
            </Checkbox>,
            `${index}`
          )
        ),
        "group"
      ),
    ]
  ),
  getItem(
    <div className="flex justify-center">
      {" "}
      <Button className="mx-auto  w-[30%] mt-5">Clear Filter</Button>
    </div>,
    "sub5"
  ),
];

const SiderBar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: "100%" }}
        className="border border-1"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default SiderBar;
