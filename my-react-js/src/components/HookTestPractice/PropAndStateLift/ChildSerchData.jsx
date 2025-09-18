import { useMemo, useDeferredValue, useEffect } from "react";
import PropTypes from "prop-types";
// useDeferredValue is used to defer the value update to improve performance and avoid lag in UI experience
function ChildSerchData({ value }) {
  const defVal = useDeferredValue(value);

  useEffect(() => {
    console.log('value: ', value);
    console.log('dfvat ', defVal);
  }, [value, defVal]);

  const arr = useMemo(() => {
    let arr = [];
    for (let i = 0; i < 15000; i++) {
      arr.push(<div key={i}>{defVal}</div>);
    }
    return arr;
  }, [defVal]);

  return arr;
}

ChildSerchData.propTypes = {
  value: PropTypes.string.isRequired,
};

export default ChildSerchData;


// ------OLD CODE -------Cause delay in typing  or lag in ui experience

// import { useMemo } from "react";
// import PropTypes from "prop-types";

// function ChildSerchData({ value }) {
//   const arr = useMemo(() => {
//     let arr = [];
//     for (let i = 0; i <20000; i++) {
//       arr.push(<div key={i}>{value}</div>);
//     }
//     return arr;
//   }, [value]);

//   return (
//     <>
//       <div>ChildSerchData</div>
//       {arr}
//     </>
//   );
// }

// ChildSerchData.propTypes = {
//   value: PropTypes.string.isRequired,
// };

// export default ChildSerchData;