// @flow

import React from 'react';
import { collorPallete } from '../../colorPallet';
import { SetThemeContext } from '../context/ThemeContext';

export function UseColorPallete(): ColorPallet {
  const { theme } = React.useContext(SetThemeContext);

  return collorPallete[theme];
}

type ColorPallet = {
  MAIN_TEXT_COLOR: string,
  SECOND_TEXT_COLOR: string,
  THIRD_TEXT_COLOR: string,
  FOURTH_TEXT_COLOR: string,
  BUTTON_SEE_MORE_TEXT_COLOR: string,
  MAIN_SITE_COLOR: string,
  MAIN_BACKGROUND_COLOR: string,
  PROJECT_BACKGROUND_COLOR: string,
};
