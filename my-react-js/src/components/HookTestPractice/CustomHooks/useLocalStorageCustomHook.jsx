// Custom Hook to manage localStorage operations
// rules for custom hooks: https://reactjs.org/docs/hooks-custom.html
//  Must start with "use"  
//  Can return anything (value, function, object, array, etc.)
//  Should not be called conditionally or inside loops
//  Should handle side effects (if any) using useEffect or other appropriate hooks

export function useLocalStorageCustomHook(key) {
  const saveData = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  const getData = () => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };
  return { saveData, getData };
}
