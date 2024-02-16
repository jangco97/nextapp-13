"use client";

import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const ToastProvider = () => {
  return <ToastContainer position="bottom-right" theme="light" closeOnClick autoClose={2000} />;
};

export default ToastProvider;
