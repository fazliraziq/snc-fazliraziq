import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

// Create a context for log flag
type LogContextType = {
  enableLog: boolean; // Only one boolean variable for logging
  setEnableLog: (value: boolean) => void; // Function to update enableLog
};

export const LogContext = createContext<LogContextType>({
  enableLog: false, // Initialized with false
  setEnableLog: () => {}, // Default empty function
});

// Custom hook to access and update the log flag
export const useEnableLog = (): LogContextType => {
  const context = useContext(LogContext);
  if (!context) {
    throw new Error('useEnableLog must be used within a EnableLogProvider');
  }
  
  return context;
};

// Provider component to wrap your app
export const EnableLogProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [enableLog, setEnableLog] = useState<boolean>(false); // State for log flag

  const updateEnableLog = (value: boolean) => {
    setEnableLog(value);
  };

  return (
    <LogContext.Provider value={{ enableLog, setEnableLog: updateEnableLog }}>
      {children}
    </LogContext.Provider>
  );
};
