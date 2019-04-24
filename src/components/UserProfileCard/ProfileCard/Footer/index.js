import React from "react";

import { Flex } from "../../../__common__";

import "./index.scss";

export const Footer = ({ className = "", ...props }) => {
  const classNames = `profile-card__footer ${className}`.trim();
  return <Flex.Container className={classNames} {...props} />;
};
