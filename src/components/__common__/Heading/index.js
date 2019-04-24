import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export const Heading = ({ as: Tag = "h1", className = "", ...props }) => {
  const classNames = `heading ${className}`.trim();
  return <Tag className={classNames} {...props} />;
};

Heading.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4"])
};

export default Heading;
