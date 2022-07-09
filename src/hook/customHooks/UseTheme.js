// @flow

import React from 'react';
import { DARK_THEME } from '../../colorPallet/themes.enum';
import { LIGHT_THEME } from '../../colorPallet/themes.enum';

function UseTheme(): UseThemeType {
  const [theme, setThemeValue] = React.useState(LIGHT_THEME);

  function setTheme(userTheme: string) {
    const themes = [DARK_THEME, LIGHT_THEME];

    if (!themes.includes(userTheme)) {
      throw Error(
        `parametros invalidos, somente é permitido as opções ( ${LIGHT_THEME} ou ${DARK_THEME}`,
      );
    }

    setThemeValue(userTheme)
  }

  return { theme, setTheme };
}

export default UseTheme;

type UseThemeType = {
  theme: string,
  setTheme: (value: string) => void,
};
