import React from "react";
import Header from "../layout/Header";
import { Outlet } from "react-router";

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
