import ApiCalendar from "react-google-calendar-api";
import React from "react";

export default class DoubleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(_, name) {
    if (name === "sign-in") {
      ApiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      ApiCalendar.handleSignoutClick();
    }
  }

  listEvents() {
    if (ApiCalendar.sign) {
      ApiCalendar.listUpcomingEvents(10).then(({ result }) => {
        console.log(result.items);
      });
    }
  }

  render() {
    return (
      <>
        <button onClick={(e) => this.handleItemClick(e, "sign-in")}>
          sign-in
        </button>
        <button onClick={(e) => this.handleItemClick(e, "sign-out")}>
          sign-out
        </button>
        <button onClick={this.listEvents}>log</button>
      </>
    );
  }
}
