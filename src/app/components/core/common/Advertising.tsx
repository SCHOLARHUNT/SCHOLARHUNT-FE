import React from "react";
import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "300px",
  color: "#fff",
  width : "100%",
  marginTop : "50px",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Advertising: React.FC = () => (
  <Carousel className="" autoplay>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);

export default Advertising;
