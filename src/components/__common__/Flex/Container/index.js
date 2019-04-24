import React from "react";

import "./index.scss";

export const Container = ({ className = "", ...props }) => {
  const classNames = `flex-container ${className}`.trim();
  return <div className={classNames} {...props} />;
};
