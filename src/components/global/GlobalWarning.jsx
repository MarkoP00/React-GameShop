import React from "react";

const GlobalWarning = ({ message, onClose }) => {
  return (
    <div
      onClick={() => onClose(false)}
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-background-200 p-5 rounded shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4 text-mainColors-200">Warning</h2>
        <p>{message}</p>
        <div className="flex justify-between">
          <button
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => onClose(false)}
          >
            Close
          </button>
          <button
            className="mt-4 bg-mainColors-300 text-white px-4 py-2 rounded"
            onClick={() => onClose(true)}
          >
            {" "}
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalWarning;
