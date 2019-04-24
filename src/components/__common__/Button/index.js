import React from "react";

import "./index.scss";

export const Button = ({ className = "", ...props }) => {
  const classNames = `button ${className}`.trim();
  return <button className={classNames} {...props} />;
};

export default Button;
