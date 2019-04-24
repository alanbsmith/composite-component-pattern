import React from "react";
import mockData from "./mockData";

const initialState = {
  profilePic: "",
  backgroundPic: "",
  username: "",
  name: "",
  bio: "",
  isFollowing: false,
  isFriend: false,
  tweetCount: 0,
  followerCount: 0,
  friendsCount: 0
};

export function withConnector(WrappedComponent) {
  return class Connector extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        profileData: initialState
      };
    }

    componentDidMount() {
      this.fetchProfileCardData();
    }

    fetchProfileCardData() {
      this.setState({
        profileData: mockData
      });
    }

    render() {
      return <WrappedComponent {...this.state.profileData} />;
    }
  };
}
