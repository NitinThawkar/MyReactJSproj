//This component uses React.memo to optimize rendering by memoizing the Child component,
// preventing unnecessary re-renders unless the user prop changes.

import React from "react";
import PropTypes from "prop-types";

const UseMemoChild = React.memo(function UseMemoChild({ user }) {
  console.log("ChildComponent re-rendered");
  return <div>User Name: {user?.name}</div>;
});

UseMemoChild.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default UseMemoChild;