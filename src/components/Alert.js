import React from "react";

const Alert = (props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>{props.title}</strong> {props.msg}
      <button
        type="button"
        onClick={props.onDismiss}
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
