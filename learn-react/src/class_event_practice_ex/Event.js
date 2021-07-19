import React, { Component } from "react";
import EventPractice from "./EventPractice";
import EventPractice2 from "./EventPractice2";
import EventPractice3 from "./EventPractice3";

class Event extends Component {
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <EventPractice />
        <EventPractice2 />
        <EventPractice3 />
      </div>
    );
  }
}

export default Event;
