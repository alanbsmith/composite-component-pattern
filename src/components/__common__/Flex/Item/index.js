import React from "react";

import "./index.scss";

export const Item = ({ className = "", ...props }) => {
  const classNames = `flex-item ${className}`.trim();
  return <div className={classNames} {...props} />;
};
