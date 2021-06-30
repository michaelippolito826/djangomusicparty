import React, { Component } from "react";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import {
  BrowserRouter as Router,
  Swtich,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <p>This is the 1home page</p>;
  }
}
