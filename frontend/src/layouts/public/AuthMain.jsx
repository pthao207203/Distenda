import React, { useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  const [headerHeightPublic, setHeight] = useState(0);
  return (
    <div className="bg-[url('Image/BG.png')] bg-cover bg-center bg-fixed flex flex-col justify-center pb-0 bg-[#131313] min-h-screen min-w-screen">
      <Header setHeight={setHeight} />
      <div
        style={{
          paddingTop: `${headerHeightPublic}px`,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
