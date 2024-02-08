import { SidebarContext } from "@/context/sidebaropen.context";
import React, { ReactNode, useContext } from "react";

const BgColorContainer = ({ children }: { children: React.ReactNode }) => {
  const { state, dispatch } = useContext(SidebarContext);
  return (
    <div className={`${state.isSidebarOpen ? "bg-black/60 -z-[100px] h-auto" : "white"} `}>
      {children}
    </div>
  );
};

export default BgColorContainer;
