import React from "react";
import { connect } from "react-redux";
import GoeeyRadio from './GoeeyRadio';
import NewAnimatedPiggy from './NewAnimatedPiggy';
import AnimatedRocket from './AnimatedRocket';

import RadioContainer from './RadioContainer';

export default ({ preference, setPreferenceCheap, setPreferenceFast }) =>
  (
    <div className="columns">
      <div className='column'>
        <NewAnimatedPiggy />
        <AnimatedRocket />
        <RadioContainer
          height="100"
          width="100"
          selected={preference === 'cheap'}
          clicked={setPreferenceCheap}
          label={'Cheap'}
        />
        <RadioContainer
          height="100"
          width="100"
          selected={preference === 'fast'}
          clicked={setPreferenceFast}
          label={'Fast'}
        />
      </div>


    </div>
  );
