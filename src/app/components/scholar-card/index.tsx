"use client";
import { Badge, Statistic } from "antd";
import React from "react";
import CountUp from "react-countup";

const scholarData = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const providerType = {
  normal: {
    color: "geekblue",
    name: "Học bổng uy tín",
  },
  golden: {
    color: "yellow",
    name: "Nhà tài trợ hàng đầu",
  },
};
const scholarInfor = {
  scholarName: "FPT",
  scholarDepcrip: "Học bổng tòan phần fpt",
};

const formatter = (value: number) => <CountUp end={value} separator="," />;

function ScholarCard() {
  return (
    <Badge.Ribbon
      style={{ fontSize: "18px", fontWeight: "bolder", padding: "5px" }}
      text={providerType.golden.name}
      color={providerType.golden.color}
    >
      <div className="drop-shadow-2xl">
        <div className="group border-4 border-white hover:drop-shadow-xl hover:shadow-primary-main  mx-auto border-l-4 hover:border-primary-main border-primary-main group mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="group-hover:drop-shadow-2xl p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              {scholarInfor.scholarName}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              {scholarInfor.scholarDepcrip}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {scholarData.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Học bổng toàn phần
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    <Statistic value={200000000} formatter={formatter} />
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    VND
                  </span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-primary-main px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Xem ngay
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Liên hệ ngay để biết thêm chi tiết
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Badge.Ribbon>
  );
}

export default ScholarCard;
