import React from "react";
import { ReactComponent as TickCircle } from "../../assets/icons/icon-tick-circle.svg";
import { ReactComponent as People } from "../../assets/icons/icon-people.svg";

const Notification = ({ message, isError = false }) => {
  return (
    <div className="form-notification">
      {isError ? (
        <People className="icon-error" />
      ) : (
        <TickCircle className="icon-success" />
      )}
      {message}
    </div>
  );
};

export default Notification;
