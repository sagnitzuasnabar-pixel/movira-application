import React from "react";
import { Navbar } from "./pages/browseHome/components/navbar";
import { BrowseHome } from "./pages/browseHome/browseHome";
import { TopTenPeru } from "./pages/browseHome/components/top-ten-peru";
import { Outlet } from "react-router";


export  function BrowseLayout() {
  return (
    <div className="bg-black">
      <Navbar/>
      <Outlet/>

    </div>
  )
}
