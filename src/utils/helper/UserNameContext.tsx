import React, { createContext, PropsWithChildren, useContext, useState } from 'react';

// Create a context for username
type UsernameContextType = {
  user: string | undefined ;
  setUser: (username: string) => void;
};

export const UserContext = createContext<UsernameContextType>({
  user: undefined,
  setUser: (username: string) => {},
});

// Custom hook to access and update the username context
export const useUser = (user: string): void => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUsername must be used within a UsernameProvider');
  }
  // Update the user using the provided username
  context.setUser(user);
};

// Provider component to wrap your app
export const UsernameProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<string | undefined>();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};