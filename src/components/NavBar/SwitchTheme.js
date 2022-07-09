import React from 'react';
import './css/SwitchTheme.css';
import { SetThemeContext } from "../../hook/context/ThemeContext";
import { DARK_THEME, LIGHT_THEME } from "../../colorPallet/themes.enum";

function SwitchTheme() {
    const [switched, setSwitched] = React.useState(false);
    const { setTheme } = React.useContext(SetThemeContext);

    React.useEffect(() => {
        const theme = switched ? DARK_THEME : LIGHT_THEME;
        setTheme(theme)
    }, [switched])

    const handleSwitch = () => {
        setSwitched(!switched)
    }
  return (
    <label className="switch leftTop">
      <input
          value="theme"
          type="checkbox"
          checked={ switched }
          onChange={ handleSwitch }
      />
      <span className="slider round"></span>
    </label>
  );
}

export default SwitchTheme;
