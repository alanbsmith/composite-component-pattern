import React from "react";

import { Flex } from "../../../__common__";

import "./index.scss";

export const Bio = ({ className = "", ...props }) => {
  const classNames = `profile-card__bio ${className}`.trim();
  return <Flex.Item className={classNames} {...props} />;
};
