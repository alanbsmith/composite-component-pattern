import React from "react";

import { Flex } from "../../../__common__";

import "./index.scss";

export const Body = ({ className = "", ...props }) => {
  const classNames = `profile-card__body ${className}`.trim();
  return <Flex.Container className={classNames} {...props} />;
};
