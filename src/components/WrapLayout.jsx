import React from "react";
import { Provider } from "react-redux";
import { store } from "../reduxs/store";
import ResizeListener from "./ResizeListener";

const WrapLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <ResizeListener />
      <div>{children}</div>
    </Provider>
  );
};

export default WrapLayout;
