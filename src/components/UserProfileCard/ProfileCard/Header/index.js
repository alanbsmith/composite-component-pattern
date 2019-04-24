import React from "react";

import { Flex } from "../../../__common__";

import "./index.scss";

export const Header = ({ className = "", src, ...props }) => {
  const classNames = `profile-card__header ${className}`.trim();
  return (
    <Flex.Container className={classNames} {...props}>
      {src && <img src={src} alt="profile card header" />}
    </Flex.Container>
  );
};
