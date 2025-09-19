//This component uses React.memo to optimize rendering by memoizing the Child component,
// preventing unnecessary re-renders unless the user prop changes.


import { useMemo } from "react";
import PropTypes from "prop-types";

function UseMemoChild({ user }) {
  const content = useMemo(() => {
    console.log("ChildComponent re-rendered");
    return <div>User Name: {user?.name}</div>;
  }, [user]);
  return content;
}

UseMemoChild.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default UseMemoChild;