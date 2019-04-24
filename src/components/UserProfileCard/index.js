import React from "react";
import PropTypes from "prop-types";
// common components
import { Badge, Button, Flex, Heading, Text } from "../__common__";
// profile card components
import { ProfileCard } from "./ProfileCard";
// connector
import { withConnector } from "./Connector";
// utils
import { formatNumber } from "./utils";

const UserProfileCard = props => {
  return (
    <ProfileCard>
      <ProfileCard.Header src={props.backgroundPic} />
      <ProfileCard.Body>
        <ProfileCard.Avatar src={props.profilePic} />
        <Flex.Item className="justify-content-flex-end">
          {props.isFriend
            ? <Button className="primary">Following</Button>
            : <Button>Follow</Button>}
        </Flex.Item>
        <Heading as="h3">
          {props.name}
        </Heading>
        <Flex.Item>
          <Text>
            {props.username}
          </Text>
          {props.isFollowing && <Badge>Follows you</Badge>}
        </Flex.Item>
        <ProfileCard.Bio className="flex-1">
          <Text className="stretch">
            {props.bio}
          </Text>
        </ProfileCard.Bio>
      </ProfileCard.Body>
      <ProfileCard.Footer>
        <Flex.Item className="column flex-1">
          <Text className="small bold">Tweets</Text>
          <Text className="xlarge bold">
            {formatNumber(props.tweetCount)}
          </Text>
        </Flex.Item>
        <Flex.Item className="column flex-1">
          <Text className="small bold">Following</Text>
          <Text className="xlarge bold">
            {formatNumber(props.friendsCount)}
          </Text>
        </Flex.Item>
        <Flex.Item className="column flex-1">
          <Text className="small bold">Followers</Text>
          <Text className="xlarge bold">
            {formatNumber(props.followerCount)}
          </Text>
        </Flex.Item>
      </ProfileCard.Footer>
    </ProfileCard>
  );
};

UserProfileCard.propTypes = {
  profilePic: PropTypes.string.isRequired,
  backgroundPic: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  isFriend: PropTypes.bool.isRequired,
  tweetCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  friendsCount: PropTypes.number.isRequired
};
export default withConnector(UserProfileCard);
