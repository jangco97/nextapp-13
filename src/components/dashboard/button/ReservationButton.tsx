import React from "react";

const ReservationButton = ({
  setStatus,
  status,
  name,
}: {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  status: string;
  name: string;
}) => {
  return (
    <button
      className={`text-xs md:text-lg mr-2 border-2 text-white bg-gray-400 rounded-xl p-2 ${
        status === name && "bg-indigo-800"
      }`}
      onClick={() => setStatus(name)}
    >
      {name}
    </button>
  );
};

export default ReservationButton;
