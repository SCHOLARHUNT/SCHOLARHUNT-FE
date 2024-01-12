"use client";

import React from "react";
import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const BlankLayout = ({ children }: IProps) => {

  return (
    <>
    {children}
    </>
  );
};

export default BlankLayout;
