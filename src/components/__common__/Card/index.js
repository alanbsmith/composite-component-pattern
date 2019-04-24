import React from "react";

import { Container } from "../Flex/Container";

import "./index.scss";

export const Card = ({ className = "", ...props }) => {
  const classNames = `card ${className}`.trim();
  return <Container className={classNames} {...props} />;
};
