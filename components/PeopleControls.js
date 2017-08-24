import React from "react";
import { connect } from "react-redux";

export default ({ numPeople, increasePeople, decreasePeople }) =>
  (
    <div>
      <label>Number of people: {numPeople}</label>
      <button onClick={decreasePeople} className='btn btn-outline-dark'>-</button>
      <button onClick={increasePeople} className='btn btn-outline-dark'>+</button>

    </div>
  );
