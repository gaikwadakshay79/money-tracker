export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('appState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };
  
  export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('appState', serializedState);
    } catch (err) {
      // Ignore write errors
    }
  };
  
  export const updateState = (key, value) => {
    try {
      // Retrieve the current state from localStorage
      const currentState = localStorage.getItem('appState');
      let state = {};
  
      // If there's existing state, parse it
      if (currentState) {
        state = JSON.parse(currentState);
      }
  
      // Update the state with the new value
      state[key]['list'] = value;
  
      // Serialize the updated state and save it back to localStorage
      const serializedState = JSON.stringify(state);
      localStorage.setItem('appState', serializedState);
    } catch (err) {
      console.error("Failed to save state to localStorage:", err);
    }
  };
  