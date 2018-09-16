import React from 'react';
import { ThemeProvider } from 'styled-components'
import { theme } from '../Styled/Theme';

export const StyledComponentThemeProvider =
 (props) => <ThemeProvider {...props} theme={theme}/>

export default StyledComponentThemeProvider;