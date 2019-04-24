import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export const Text = ({ as: Tag = "span", className = "", ...props }) => {
  const classNames = `text ${className}`.trim();
  return <Tag className={classNames} {...props} />;
};

Text.propTypes = {
  as: PropTypes.oneOf(["p", "span", "strong"])
};

export default Text;
