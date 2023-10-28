/* eslint-disable no-unused-vars */
import React from "react";

// eslint-disable-next-line react/prop-types
const LoginAdminLayout = ({ children }) => (
  <div className="flex">
    <div className="bgLoginKiri w-1/2 h-screen flex justify-center items-center"></div>
    <div className="bgLoginKanan w-1/2 h-screen flex flex-col justify-center items-center gap-y-4">
      {children}
    </div>
  </div>
);

export default LoginAdminLayout;
