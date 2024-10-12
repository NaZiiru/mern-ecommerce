import React from "react";
import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

const ShoppingLayout = () => {
  return (
    <div>
      <ShoppingHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShoppingLayout;
