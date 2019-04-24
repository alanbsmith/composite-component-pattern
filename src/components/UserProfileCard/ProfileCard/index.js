import React from "react";

import { Card } from "../../__common__";

import { Avatar } from "./Avatar";
import { Bio } from "./Bio";
import { Body } from "./Body";
import { Footer } from "./Footer";
import { Header } from "./Header";

import "./index.scss";

export const ProfileCard = props => {
  return <Card className="profile-card" {...props} />;
};

ProfileCard.Avatar = Avatar;
ProfileCard.Bio = Bio;
ProfileCard.Body = Body;
ProfileCard.Footer = Footer;
ProfileCard.Header = Header;
