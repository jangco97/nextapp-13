"use client";
import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import QRCode from "qrcode.react";

const Bottom = () => {
  const [buttonState, setButtonState] = useState(false);
  return (
    <div className="mt-20 mb-20">
      <button
        className="rounded-xl bg-purple-500 p-5 text-white"
        onClick={() => setButtonState(!buttonState)}
      >
        qrcode로 웹페이지 이동
      </button>
      {buttonState && (
        <div className="h-[25vh] flex items-center justify-center flex-col">
          <QRCode value="https://nextapp-13.vercel.app/" />
        </div>
      )}
    </div>
  );
};

export default Bottom;
