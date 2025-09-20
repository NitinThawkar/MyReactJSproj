import React from 'react'
import FirstLevel from './WithoutContext/FirstLevel'
import LevelOne from './WithContext/LevelOne'
import { Provider } from './WithContext/Contex/MessageContext';
function UseContextHookAdvanceMain() {
  return (
    <>
      <h2>UseContextHookAdvanceMain</h2>

      <p>This FirstLevel component is showing prop drilling</p>
      <FirstLevel />

      <p>This LevelOne component is using Context API</p>
      <Provider>
        <LevelOne />
      </Provider>
    </>
  );
}

export default UseContextHookAdvanceMain

// <Provider>
//         <LevelOne />
//       </Provider>