import React from "react";
import { PropTypes } from "prop-types";

const NavigationButton =  ({ setTab, tabNumber, buttonType }) => {
  return (
    <button
      onClick={() => setTab(tabNumber)}
      className={`navigation-button ${buttonType}`}
    >
      {tabNumber}
    </button>
  );
};

NavigationButton.propTypes = {
  setTab: PropTypes.func.isRequired,
  tabNumber: PropTypes.number.isRequired,
  buttonType: PropTypes.string,
};
NavigationButton.defaultProps = {
  buttonType: '',
};

export default NavigationButton;
