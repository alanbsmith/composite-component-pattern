import React from "react";

import "./index.scss";

export const Badge = ({ className = "", ...props }) => {
  const classNames = `badge ${className}`.trim();
  return <span className={classNames} {...props} />;
};
