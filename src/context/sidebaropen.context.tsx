"use client";
import BgColorContainer from "@/components/sidebar/BgColorContainer";
//navbar의 햄버거 버튼을 클릭하면 모바일 화면에서는 사이드바가 나타도록 context api를 사용
import React, { Dispatch, useReducer, createContext } from "react";

interface State {
  isSidebarOpen: boolean;
}

interface Action {
  type: string;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    default:
      return state;
  }
};

export const SidebarContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: { isSidebarOpen: false },
  dispatch: () => null,
});

export const SidebarProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, { isSidebarOpen: false });
  return (
    <SidebarContext.Provider value={{ state, dispatch }}>
      {children}
    </SidebarContext.Provider>
  );
};
