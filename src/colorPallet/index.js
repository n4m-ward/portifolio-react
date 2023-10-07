// @flow
import {DARK_THEME, LIGHT_THEME} from './themes.enum';
import * as lightTheme from './lightTheme.enum';
import * as darkTheme from './darkTheme.enum';

export const THEMES = {[LIGHT_THEME]: lightTheme, [DARK_THEME]: darkTheme};

export const collorPallete = {
    [LIGHT_THEME]: lightTheme,
    [DARK_THEME]: darkTheme,
};

export const FONT_FAMMILY: string = '-apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Fira Sans, Ubuntu, Oxygen, Oxygen Sans, Cantarell, Droid Sans, Apple Color Emoji, Segoe UI Emoji, Segoe UI Emoji, Segoe UI Symbol, Lucida Grande, Helvetica, Arial, sans-serif';