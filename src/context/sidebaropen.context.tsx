"use client";

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
