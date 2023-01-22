import React, { useContext } from "react";
import { THEME_TYPE } from "../constants";
import { ThemeContext } from "../providers/ThemeProvider";

const ThemeSwitcher = () => {
  const { themeMode, toggle } = useContext(ThemeContext);

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={toggle}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode</span>
    </div>
  );
};

export default ThemeSwitcher;
