import React from "react";

const Notification = ({ message, isError = false }) => {
  return (
    <div
      style={{
        height: "64px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        background: "#141e30",
        color: `${isError ? "red" : "green"}`,
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
