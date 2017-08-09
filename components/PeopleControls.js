import React from "react";
import { connect } from "react-redux";

export default ({ numPeople, increasePeople, decreasePeople }) =>
  (
    <div>
      <label>Number of people: {numPeople}</label>
      <button onClick={decreasePeople}>-</button>
      <button onClick={increasePeople}>+</button>

    </div>
  );
