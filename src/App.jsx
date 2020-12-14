import React from "react";
import PropTypes from "prop-types";

const App = ({ greeting, subtitle }) => {
  return (
    <>
      <h1>{ greeting }</h1>
      <p>{ subtitle }</p>
    </>
  );
};

App.propTypes = {
	greeting: PropTypes.string.isRequired
};

App.defaultProps = {
	subtitle: 'Learning React with Fernando Herrera'
}

export default App;
