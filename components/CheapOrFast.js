import React from "react";
import { connect } from "react-redux";
import GoeeyRadio from './GoeeyRadio';

export default ({ preference, setPreferenceCheap, setPreferenceFast }) =>
  (
    <div>
      <GoeeyRadio height="100" width="100" selected={preference === 'cheap'} clicked={setPreferenceCheap} />
      Cheap<br />
      <GoeeyRadio height="100" width="100" selected={preference === 'fast'} clicked={setPreferenceFast} />
      Fast<br />

    </div>
  );
