import React from 'react';
import useTheme from '../customHooks/UseTheme';

export const SetThemeContext = React.createContext();

export const ThemeContext = ({ children }) => {
  const { theme, setTheme } = useTheme();

  return (
    <SetThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </SetThemeContext.Provider>
  );
};
