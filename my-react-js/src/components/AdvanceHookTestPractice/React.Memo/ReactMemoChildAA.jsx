import React from 'react';
import PropTypes from 'prop-types';

const ReactMemoChildAA = React.memo(function ReactMemoChildAA({ firstCount, person }) {
    console.log("ReactMemoChildAA component is re-rendered");
    return (
        <div>
            <h2>First Count: {firstCount}</h2>
        </div>
    );
});

ReactMemoChildAA.displayName = "ReactMemoChildAA";

ReactMemoChildAA.propTypes = {
    firstCount: PropTypes.number.isRequired,
};

export default ReactMemoChildAA;