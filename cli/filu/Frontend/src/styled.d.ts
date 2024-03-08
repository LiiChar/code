import 'styled-components';

import { ITheme, ThemeEnum } from './interfaces/style.theme';

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {
    type: ThemeEnum 
  }
}