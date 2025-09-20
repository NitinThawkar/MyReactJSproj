// useInsertionEffect is a relatively new hook introduced in React 18+ for injecting styles before DOM mutations.
//  It's mostly used in libraries like styled-components or emotion.

import { useInsertionEffect } from 'react';
export const UseInsertionEffectHookTest = () => {
    useInsertionEffect(() => {
        // Create a style tag and insert dynamic CSS
        const style = document.createElement('style');
        style.textContent = `
            .dynamic-class {
                color: white;
                background-color: blue;
                padding: 10px;
            }
        `;
        
        document.head.appendChild(style);

        // Cleanup: Remove the style tag when the component unmounts
        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (<>
    <h2>UseInsertionEffectHookTest</h2>
        <div className="dynamic-class">Styled with useInsertionEffect</div>
    </>);
};

export default UseInsertionEffectHookTest;