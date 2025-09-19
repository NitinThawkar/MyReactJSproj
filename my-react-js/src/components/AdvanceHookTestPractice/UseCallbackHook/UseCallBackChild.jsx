import React from "react";
import PropTypes from "prop-types";

const UseCallBackChild = React.memo(function UseCallBackChild({ increment }) {
    console.log("UseCallBackChild component re-rendered");
    return <button onClick={increment}>Increment Count</button>;
});

UseCallBackChild.propTypes = {
    increment: PropTypes.func.isRequired,
};

export default UseCallBackChild;