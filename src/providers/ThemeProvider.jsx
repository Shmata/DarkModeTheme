import React from "react";
import { THEME_TYPE } from "../constants";

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = React.useState(THEME_TYPE.LIGHT);

  const toggle = () => setThemeMode(themeMode === THEME_TYPE.LIGHT ? THEME_TYPE.DARK : THEME_TYPE.LIGHT);

  return (
    <ThemeContext.Provider value={{ themeMode, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};


export { ThemeContext };
export default ThemeProvider;
