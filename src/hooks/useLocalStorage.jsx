import { useState } from 'react';

// Usage
// function App() {
//   // Similar to useState but first arg is key to the value in local storage.
//   const [storageValue, setAddress] = useLocalStorage('name', 'Bob');

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Enter your name"
//         value={name}
//         onChange={e => setStorageValue(e.target.value)}
//       />
//     </div>
//   );
// }

// Hook
export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.

  // eslint will complain unused vars unless exported/imported + used
  /* eslint-disable no-unused-vars */
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  const getValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToGet = value instanceof Function ? value(storedValue) : value;
      // Save state
      // const getStoredValue = (valueToGet) => {

      // Save to local storage
      JSON.stringify(window.localStorage.getItem(key, valueToGet));
      // };
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
