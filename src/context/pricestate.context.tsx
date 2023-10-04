"use client";
//가격 필터링
import React, { Dispatch, useReducer, createContext } from "react";

interface State {
  pricestate: string;
}

interface Action {
  type: string;
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "0":
      return { ...state, pricestate: action.type };
    case "1":
      return { ...state, pricestate: action.type };
    case "2":
      return { ...state, pricestate: action.type };
    case "3":
      return { ...state, pricestate: action.type };
    case "4":
      return { ...state, pricestate: action.type };
    default:
      return state;
  }
};

export const PriceContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({
  state: { pricestate: "0" },
  dispatch: () => null,
});

export const PriceProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { pricestate: "0" });
  return (
    <PriceContext.Provider value={{ state, dispatch }}>
      {children}
    </PriceContext.Provider>
  );
};
