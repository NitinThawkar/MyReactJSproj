import React from 'react';
import PropTypes from 'prop-types';

//if certain prop not change then only component will not re-render
//use prevProps and nextProps to compare specific props for re-rendering
const ReactMemoPerson = React.memo(function ReactMemoPerson({ name, age }) {
  console.log("ReactMemoPerson component is re-rendered");
  return (
    <div>
      {name}, {age}
    </div>
  );
},
(prevProps, nextProps) => {
    return prevProps.name === nextProps.name;
}
);

ReactMemoPerson.displayName = "ReactMemoPerson";

ReactMemoPerson.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default ReactMemoPerson;