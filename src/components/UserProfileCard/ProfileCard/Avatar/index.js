import React from "react";

import "./index.scss";

export const Avatar = ({ className = "", src, ...props }) => {
  const classNames = `avatar ${className}`.trim();
  return (
    <div className={classNames} {...props}>
      {src && <img src={src} alt="profile card profile" />}
    </div>
  );
};

export default Avatar;
