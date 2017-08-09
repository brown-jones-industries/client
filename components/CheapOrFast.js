import React from "react";
import { connect } from "react-redux";

export default ({ setPreferenceCheap, setPreferenceFast }) =>
  (
    <div>
      {/* <button onClick={this.props.locationFetchLocation}>Get Location</button> */}
      <input type="radio" name="cheapOrFast" value="cheap" onClick={setPreferenceCheap} />
      Cheap<br />
      <input type="radio" name="cheapOrFast" value="fast" onClick={setPreferenceFast} />
      Fast<br />
    </div>
  );
