import React from "react";
import PropTypes from "prop-types";
function ChildCompD({ name, Age, isPerson }) {
  return (
    <div>
      <h4>Child Component D</h4>
      <h3>Name: {name}</h3>
      <p>Age: {Age}</p>
      <p>Is Person: {isPerson ? "Yes" : "No"}</p>
    </div>
  );
}
// PropTypes is used for type checking of props passed from parent component to child component
ChildCompD.propTypes = {
  name: PropTypes.string.isRequired,
  Age: PropTypes.number,
  isPerson: PropTypes.bool,
};


// Default props will be used when parent component does not pass any prop value to this child component
ChildCompD.defaultProps = {
  name: "Default Name",
  Age: 18,
  isPerson: true,
};


export default ChildCompD;
